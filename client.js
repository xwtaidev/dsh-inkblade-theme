/* Inkblade for DeepSeek Harness, adapted from the Obsidian Inkblade theme.
 * Copyright (c) 2026 xwtaidev. MIT license; see LICENSE.
 * The ModuleLoader artifact is intentionally dependency-free and ready to install.
 */
window.__ModuleLoader__.load({
  id: '@xwtaidev/dsh-theme-inkblade',
  factory() {
    // Values follow the source theme's rice paper / wet ink palettes. Each
    // override must contain both modes; DSH resolves the system preference.
    const pair = (light, dark) => ({ light, dark });
    const heading = '"Iowan Old Style", "Palatino Linotype", "Songti SC", STSong, "Noto Serif CJK SC", "Source Han Serif SC", SimSun, Georgia, serif';
    const tokens = {
      '--dsw-alias-bg-base': pair('#f1ede3', '#141819'),
      '--dsw-alias-bg-layer-1': pair('#f7f3ea', '#1a2021'),
      '--dsw-alias-bg-layer-2': pair('#e9e3d7', '#22292a'),
      '--dsw-alias-bg-layer-3': pair('#e0d9ca', '#293132'),
      '--dsw-alias-bg-overlay': pair('#f7f3ea', '#22292a'),
      '--dsw-alias-bg-module-platform': pair('#ece7dc', '#1a2021'),
      '--dsw-alias-border-l1': pair('#cec4b1', '#303839'),
      '--dsw-alias-border-l2': pair('#bcb29f', '#404b4c'),
      '--dsw-alias-border-l3': pair('#aaa18e', '#505d5e'),
      '--dsw-alias-label-primary': pair('#292f2d', '#dedbd0'),
      '--dsw-alias-label-primary-bluish': pair('#292f2d', '#dedbd0'),
      '--dsw-alias-label-primary-dimmed': pair('#535b55', '#a7b0aa'),
      '--dsw-alias-label-secondary': pair('#535b55', '#a7b0aa'),
      '--dsw-alias-label-tertiary': pair('#605c50', '#899593'),
      '--dsw-alias-label-caption': pair('#605c50', '#899593'),
      '--dsw-alias-label-primary-inverted': pair('#fff9ee', '#141819'),
      '--dsw-alias-label-primary-foreground': pair('#fff9ee', '#141819'),
      '--dsw-alias-brand-primary': pair('#765a2e', '#c9b083'),
      '--dsw-alias-brand-text': pair('#765a2e', '#c9b083'),
      '--dsw-alias-link': pair('#3e6569', '#9fbabb'),
      '--dsw-alias-button-primary-fill': pair('#765a2e', '#c9b083'),
      '--dsw-alias-button-primary-hover': pair('#61491f', '#dbc79e'),
      '--dsw-alias-button-primary-dimmed': pair('#b8a27e', '#695d48'),
      '--dsw-alias-interactive-bg-hover': pair('#292f2d0e', '#dedbd010'),
      '--dsw-alias-interactive-bg-active': pair('#765a2e1f', '#c9b08324'),
      '--dsw-alias-interactive-bg-hover-solid': pair('#e0d9ca', '#2d3536'),
      '--dsw-alias-state-business-primary': pair('#765a2e', '#c9b083'),
      '--dsw-alias-state-error-primary': pair('#a03e30', '#df8b7d'),
      '--dsw-alias-state-success-primary': pair('#4f6646', '#a2b395'),
      '--dsw-alias-state-warn-primary': pair('#8c542b', '#d5a474'),
      '--dsw-alias-state-warn-label': pair('#765a2e', '#c9b083'),
      '--dsw-alias-state-idle-primary': pair('#5e635e', '#a7b0aa'),
      '--dsw-alias-markdown-code-block': pair('#e9e3d7', '#1a2021'),
      '--dsw-alias-markdown-inline-code': pair('#e7e1d5', '#22292a'),
      '--dsw-alias-settings-card-fill': pair('#f7f3ea', '#1a2021'),
      '--dsw-alias-settings-card-stroke': pair('#cec4b1', '#303839'),
      '--dsw-alias-scrollbar-bg-l1': pair('#5e635e3d', '#a7b0aa36'),
      '--dsw-alias-scrollbar-hover-l1': pair('#765a2e80', '#c9b08366'),
      '--dsw-alias-scrollbar-bg-l2': pair('#5e635e3d', '#a7b0aa36'),
      '--dsw-alias-scrollbar-hover-l2': pair('#765a2e80', '#c9b08366'),
      '--dsw-specific-sidebar-fill': pair('#e6dfd0', '#101415'),
      '--dsw-specific-sidebar-nav-item-active': pair('#d8cfbd', '#293132'),
      '--dsw-specific-sidebar-nav-item-active-accent': pair('#ddd3c0', '#293132'),
      '--dsw-specific-sidebar-nav-item-hover': pair('#ddd3c0', '#22292a'),
      '--dsw-specific-bubble': pair('#e9e3d7', '#22292a'),
      '--dsw-specific-input-major': pair('#f7f3ea', '#1a2021'),
      '--dsw-specific-menu': pair('#f7f3eaf5', '#22292af5'),
      // Preserve the host's adjustable text-size delta while borrowing the
      // source theme's system serif headings. No fonts are downloaded.
      '--dsw-font-markdown-h1': pair(`700 calc(21px + var(--dsh-content-font-delta)) / calc(30px + var(--dsh-content-font-delta)) ${heading}`, `700 calc(21px + var(--dsh-content-font-delta)) / calc(30px + var(--dsh-content-font-delta)) ${heading}`),
      '--dsw-font-markdown-h2': pair(`700 calc(19px + var(--dsh-content-font-delta)) / calc(28px + var(--dsh-content-font-delta)) ${heading}`, `700 calc(19px + var(--dsh-content-font-delta)) / calc(28px + var(--dsh-content-font-delta)) ${heading}`),
      '--dsw-font-markdown-h3': pair(`700 calc(18px + var(--dsh-content-font-delta)) / calc(26px + var(--dsh-content-font-delta)) ${heading}`, `700 calc(18px + var(--dsh-content-font-delta)) / calc(26px + var(--dsh-content-font-delta)) ${heading}`)
    };
    return {
      inject: ['theme'],
      apply(ctx) {
        ctx.effect(() => ctx.theme.overrideTokens('@xwtaidev/dsh-theme-inkblade', tokens), 'Inkblade: theme colors');
      }
    };
  }
});
