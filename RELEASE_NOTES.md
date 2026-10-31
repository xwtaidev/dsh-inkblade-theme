# Inkblade for DeepSeek Harness v1.0.0

Inkblade's first DeepSeek Harness release adapts the original Obsidian theme's ink, rice paper, aged brass, cool steel, and vermilion visual language to the DSH Web client. It is a token-based adaptation rather than a direct port of the Obsidian stylesheet.

## Highlights

- **Light mode — rice paper:** a warm paper base (`#f1ede3`), dark ink text (`#292f2d`), bronze accents (`#765a2e`), and cool teal links (`#3e6569`).
- **Dark mode — ink night:** a cool ink base (`#141819`), soft light text (`#dedbd0`), aged gold accents (`#c9b083`), and steel-blue links (`#9fbabb`).
- **Restrained semantic colors:** vermilion error accents and coordinated surface, sidebar, text, button, status, Markdown code, settings-card, and scrollbar tokens where DSH consumes those overrides.
- **Local serif headings:** Markdown H1–H3 use a local serif fallback stack and follow DSH's content-size adjustment. These heading styles use their own font stack rather than the user-configured DSH text font.
- **Light, Dark, and System:** the theme follows DSH's appearance setting instead of adding a separate item to the built-in appearance selector.
- **Ready-to-load client:** no build step, third-party theme runtime dependencies, remote font downloads, or bundled game artwork are required. The theme code does not read credentials or initiate network requests; DSH and its installer may have their own network and profile requirements.

## Installation and use

In DeepSeek Harness, open **Plugins → Add Plugin → Install Third-party Plugin** and select the project directory or provide its [GitHub repository](https://github.com/xwtaidev/dsh-inkblade-theme). For a reproducible installation, review and pin the full Git commit for this release. Confirm and enable the bundle, then choose Light, Dark, or System in the appearance settings. Follow the installer's status and warnings; an update may require a restart.

The package name is `@xwtaidev/dsh-theme-inkblade`. An npm installation by name is available only after the package has actually been published to npm. A GitHub release does not automatically publish an npm package or list it in a third-party market.

## Theme behavior and compatibility

- Disable or remove the bundle to release its token override layer and reveal the underlying theme values.
- Multiple enabled theme layers are composed per token in registration order. Later overrides win where they overlap, while non-overlapping overrides remain. Enable only one theme for predictable results.
- Components using independent, locally redefined, or hard-coded colors may not adopt every palette value. DSH retains its own layout and functionality.
- Obsidian-specific file-tree styling, Canvas, and custom callouts are not ported to DSH. Built-in colors may briefly appear at startup before the plugin applies its layer.
- A DSH build providing the compatible `ctx.theme.overrideTokens` client service is required. An independently verified DSH, operating-system, and Node compatibility range has not yet been documented.

## Validation

The maintainer reports manually testing a local development version in DSH; the precise configuration and coverage have not been independently documented.

Automated tests exercise client registration, light/dark token pairs, effect cleanup, bundle metadata, and selected body and primary-button color contrasts using simulated DSH services. They do not constitute a full real-host compatibility or accessibility audit.

## Attribution and license

Adapted from [Obsidian Inkblade](https://github.com/xwtaidev/obsidian-inkblade-theme) by xwtaidev. Inkblade is an independent fan work inspired by *Phantom Blade Zero* (影之刃零), with no official affiliation or authorization. This package includes no game artwork, game logos, or commercial fonts.

Copyright © 2026 xwtaidev. Released under the [MIT License](https://github.com/xwtaidev/dsh-inkblade-theme/blob/main/LICENSE).
