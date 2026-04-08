# Plan: 20-Primitive Compressed Variables in Figma

Issue: #25
Branch: `issue/25`

---

## Problem

134 CSS tokens → 134 Figma variables = unusable color picker. Designers see a wall of similar colors and can't find the right one.

## Solution

20 primitives as Figma variables with **modes** (themes). Each mode defines 20 values. Switching mode re-themes the entire file.

## Primitives (20)

### Neutrals (7)
| Variable name | Role | Current Light | Current Dark |
|--------------|------|---------------|-------------|
| `surface/0` | Page bg, cards, modals | `#FAFBFC` | `#2C2C2C` |
| `surface/1` | Secondary panels | `#F6F8FA` | `#252525` |
| `surface/2` | Borders, hover bg | `#EEF2F5` | `#373737` |
| `surface/3` | Active/selected bg | `#E9EDF1` | `#2C2C2C` |
| `surface/4` | Strong dividers | `#E2E6E8` | `#414141` |
| `text/primary` | Headings, body | `#000000` | `#FFFFFF` |
| `text/secondary` | Labels, placeholders | `#939BA1` | `#909090` |

### Brand (2)
| Variable name | Role | Current Light | Current Dark |
|--------------|------|---------------|-------------|
| `brand/primary` | Actions, links, active | `#4360DF` | `#88B0FF` |
| `brand/subtle` | Nav bg, tint | `#ECEFFB` | `#273251` |

### Status (5)
| Variable name | Role | Current Light | Current Dark |
|--------------|------|---------------|-------------|
| `status/success` | Positive | `#4EBC60` | `#60C370` |
| `status/danger` | Error, destructive | `#FF2D55` | `#FF5C7B` |
| `status/warning` | Caution | `#F6793C` | `#F6793C` |
| `status/mention` | @mention | `#0DA4C9` | `#7BE5FF` |
| `status/pin` | Pinned | `#FE8F59` | `#FFA67B` |

### Overlay (4)
| Variable name | Role | Current Light | Current Dark |
|--------------|------|---------------|-------------|
| `overlay/backdrop` | Modal dim | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.4)` |
| `overlay/shadow-1` | Subtle shadow | `rgba(0,34,51,0.03)` | `rgba(0,0,0,0.08)` |
| `overlay/shadow-2` | Medium shadow | `rgba(9,16,28,0.02)` | `rgba(107,111,118,0.02)` |
| `overlay/shadow-3` | Strong shadow | `rgba(0,0,0,0.15)` | `rgba(107,111,118,0.05)` |

**Note**: Figma variables don't support alpha in COLOR type. Overlay variables will be handled as solid colors with layer opacity, or as effect styles.

## Execution Steps

### Step 1: Create Figma file
- Use `create_new_file` on "Alisher's team" plan
- Name: "Status Primitives — Design System Foundation"

### Step 2: Create variable collection
- Collection name: "Primitives"
- Two modes: "Light", "Dark"
- 16 COLOR variables (the 16 non-overlay primitives)
- Overlay handled via effect styles (shadows) or documented separately

### Step 3: Build swatch page
- Page 1: "Swatches"
- Grid of 16 color rectangles, each bound to a primitive variable
- Label below each with variable name
- Grouped by category (Neutrals, Brand, Status)
- Auto-layout for clean arrangement

### Step 4: Build reference table
- Page 2: "Reference"
- Table showing: Variable name | Light value | Dark value | CSS token mapping | Usage notes
- Built as Figma frames with text, not a plugin

### Step 5: Verify
- Switch between Light/Dark modes — all swatches should update
- Screenshot both modes for review
- Verify values match `docs/color-system-current.md`

## What's NOT in scope
- Alpha/opacity variants (handled by Figma layer opacity)
- Identity/avatar colors (12 misc colors — separate collection later)
- Semantic token mapping (134 tokens referencing primitives — future step)
- Additional theme modes beyond Current Light/Dark (added incrementally)

## Files
- Plan: `docs/figma-experiments/primitive-variables-plan.md` (this file)
- Figma file: created via MCP in Step 1
- Reference: `docs/color-system-current.md`, `docs/color-counting-exploration.md`
