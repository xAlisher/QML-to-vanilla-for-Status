# How We Count Colors — Exploration

## The Problem

We label themes as "Current Light (70)" — but what does "70" mean? There are multiple ways to count, and each gives a different number. This matters because Volo's requirement says "up to 4-5 colors" while our themes have 46-75.

## Layers of the Color System

### Layer 1: Semantic Tokens (134 per theme)
CSS custom properties like `--primary-color-1`, `--base-color-2`, `--card-color`.
Every theme has exactly **134 tokens**. This number doesn't change — it's the API surface.

### Layer 2: Unique Values (46-75 per theme)
Deduplicated hex/rgba values. This is what our labels currently show.
Many tokens share the same value (e.g., `--background`, `--card-color`, `--modal-bg` all = `#FFFFFF`).

### Layer 3: Base Colors with Alpha Stripped (47 for current-light)
Many "unique values" are just a base color + transparency suffix:
- `#4360DF` → `#4360DF33` (20%) → `#4360DF1A` (10%) → `#4360DF0D` (5%)
- `#000000` → 9 opacity steps for the direct-color scale

If we strip alpha, current-light has **47 unique base colors**.

### Layer 4: Compressed Primitives (20 core)
From `docs/color-system-current.md`:
- 7 neutrals (surfaces + text)
- 4 brand (primary + steps)
- 5 status (success, danger, warning, mention, pin)
- 4 overlay (shadows + backdrop)

Everything else is either an alpha variant, a duplicate, or an identity/misc color.

## What Are We Actually Counting?

| Counting method | Current Light | Solarized Dark | Range |
|----------------|--------------|----------------|-------|
| Semantic tokens | 134 | 134 | always 134 |
| Unique values (current labels) | 70 | 46 | 46-75 |
| Base colors (alpha stripped) | 47 | ~30 | 30-47 |
| Core primitives | 20 | ~15 | 15-20 |
| Volo's target | — | — | 4-5 |

## The Transparency Question

### Current state
- ~115 of 134 tokens use some form of transparency (8-digit hex or rgba)
- The direct-color scale alone is 9 tokens — all `#000000` at different opacities
- Status colors each have 3 variants: solid + 20% + 10%

### Dev preference: reduce transparency
- **Why**: transparent colors cause compositing — the GPU blends layers at render time. Opaque colors are a single fill.
- **Trade-off**: opaque equivalents only work on known backgrounds. `#4360DF1A` on white = `#E8ECF9` (opaque), but on dark = different.
- **Recommendation**: pre-compute opaque equivalents for the 2 known backgrounds (light surface, dark surface) per theme. Keep rgba only for overlays/backdrops where transparency is functionally necessary.

### What this means for counting
If we pre-compute opaque equivalents:
- The 9 direct-color steps become 9 opaque grays (light) or 9 opaque off-whites (dark)
- Status color alpha variants become opaque tints
- Token count stays 134, but unique value count drops because many alpha variants resolve to the same opaque value on the same background

## Do We Count Identity/Avatar Colors?

Each theme has **12 misc-color tokens** for avatar/community identity.
These are NOT system UI colors — they're data-driven (each user/community picks one).

**Recommendation**: exclude from the "theme complexity" count. They're fixed across themes and don't affect the UI feel.

## Proposed Counting Definition

For theme labels and stakeholder communication:

> **"N colors"** = unique opaque base colors used for system UI, excluding:
> - Identity/avatar colors (12, fixed)
> - Alpha variants (derived from base × opacity)
> - Spacing/typography values
>
> This represents the actual **visual palette** a user perceives.

### Projected counts with this definition

| Theme | Current label | Projected (UI-only, opaque bases) |
|-------|--------------|-----------------------------------|
| Current Light | 70 | ~25 |
| Current Dark | 67 | ~23 |
| Solarized Dark | 46 | ~18 |
| Hacker Dark | 47 | ~15 |

### Volo's "4-5 colors" target
This likely means **4-5 perceptually distinct color families** (not individual values):
1. Neutral (grays/whites/blacks)
2. Brand (blue)
3. Success (green/teal)
4. Danger (red)
5. Warning (orange) — could merge with danger

Within each family, there are opacity/shade steps, but the user perceives ~5 hues.

## Recommendation

1. **Labels**: change from "unique values" to "UI base colors (excl. avatars + alpha)"
2. **Target**: aim for ~20 UI base colors per theme, organized into 4-5 color families
3. **Transparency**: pre-compute opaque equivalents where possible, keep rgba only for overlays
4. **Communication**: tell stakeholders "5 color families, ~20 shades total"
