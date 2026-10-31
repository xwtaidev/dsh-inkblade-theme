import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
const code = await readFile(new URL('client.js', root), 'utf8');

function load() {
  let module;
  vm.runInNewContext(code, { window: { __ModuleLoader__: { load(value) { module = value; } } } });
  assert.equal(module.id, manifest.name);
  return module.factory();
}

test('package is a DSH bundle with matching client dependency', async () => {
  assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(manifest.dsh.client.platform, 'web');
  assert.equal(manifest.dsh.client.immediately, true);
  assert.ok(manifest.dsh.client.inject.includes('@deepseek-ai/dsh-client-ui-theme'));
  assert.match(await readFile(new URL('cordis.patch.yml', root), 'utf8'), new RegExp(manifest.name));
  for (const path of Object.values(manifest.exports).filter(p => !p.includes('*'))) await readFile(new URL(path, root));
});

test('registers two-mode token layer and disposes it', () => {
  const plugin = load();
  assert.deepEqual(Array.from(plugin.inject), ['theme']);
  let registered, dispose;
  const layers = new Map();
  plugin.apply({
    effect(start) { dispose = start(); },
    theme: { overrideTokens(source, tokens) {
      registered = tokens;
      assert.equal(source, manifest.name);
      for (const [key, value] of Object.entries(tokens)) {
        assert.match(key, /^--/);
        assert.equal(typeof value.light, 'string');
        assert.equal(typeof value.dark, 'string');
        assert.ok(value.light && value.dark);
      }
      layers.set(source, tokens);
      return () => layers.delete(source);
    } }
  });
  assert.equal(layers.size, 1);
  assert.equal(registered['--dsw-alias-bg-base'].light, '#f1ede3');
  assert.equal(registered['--dsw-alias-bg-base'].dark, '#141819');
  assert.match(registered['--dsw-font-markdown-h1'].light, /--dsh-content-font-delta/);
  dispose();
  assert.equal(layers.size, 0);
});

test('default body and primary-button pairs meet WCAG AA', () => {
  let tokens;
  load().apply({ effect(fn) { fn(); }, theme: { overrideTokens(_source, t) { tokens = t; return () => {}; } } });
  const luminance = hex => {
    const rgb = hex.match(/[0-9a-f]{2}/gi).map(v => parseInt(v, 16) / 255).map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
    return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
  };
  const contrast = (a, b) => { const v = [luminance(a), luminance(b)].sort((x, y) => y - x); return (v[0] + .05) / (v[1] + .05); };
  for (const mode of ['light', 'dark']) {
    assert.ok(contrast(tokens['--dsw-alias-label-primary'][mode], tokens['--dsw-alias-bg-base'][mode]) >= 4.5);
    assert.ok(contrast(tokens['--dsw-alias-label-primary-inverted'][mode], tokens['--dsw-alias-button-primary-fill'][mode]) >= 4.5);
  }
});
