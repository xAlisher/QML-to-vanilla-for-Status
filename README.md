# QML-to-vanilla for Status

Translates Status desktop QML screens into vanilla HTML/CSS/JS with a tokenized design system.

## What's here

- 4 screens: Community Channel, Discover Communities, Swap, Wallet
- 11 color themes, 5 font schemes — swappable from a dropdown
- Each theme is ~130 CSS custom properties in one file
- Side-by-side compare mode for any two themes

## How it was built

Two-agent pipeline: one builds HTML/CSS from QML source, the other audits components against the spec before merge. Workflow docs in `docs/audit/`.

## Run it

```
pnpm install
pnpm dev
```

Requires Node 20+.
