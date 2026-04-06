# Issue 001: Sidebar nav doesn't match production app

## Current implementation vs QML source

### Container structure
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Total width | 68px | 76px (60px content + 8px left pad + 8px right pad) | Yes — widen to 76px |
| Background | Flat column, no radius | Rounded rect container (8px radius) with separate AC button container below | Yes — needs two separate rounded containers |
| Internal padding | 8px all sides | 8px top/left/right, **24px bottom** (bigPadding) | Yes — increase bottom padding |
| Container background | `--app-nav-bar-bg` fills full column | `--app-nav-bar-bg` fills rounded rect only; outer bg is `baseColor4` (same as left panel) | Yes — sidebar outer bg should be `baseColor4`, container boxes get `app-nav-bar-bg` |

### Button shape/size
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Size | 44×44px | **42×42px** | Yes |
| Shape | 8px radius (rounded rect) | **Circular** (radius = width/2 = 21px) | Yes — needs `border-radius: 50%` |
| Icon size | 18px font | **24×24px** SVG | Yes — icons too small |
| Padding | none | 8px internal padding inside 42px button | Minor |

### Active/hover states
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Normal icon color | `--direct-color-5` (muted black/white) | `primaryColor1` (#4360DF light / #88B0FF dark) | Yes — icons should be primary blue |
| Hover bg | `--nav-list-item-hover-bg` (grey) | `primaryColor2` (blue at 20% alpha) | Yes — hover should be tinted blue |
| Active bg | `--nav-list-item-selected-bg` (grey) | **Solid `primaryColor1`** (full blue fill) | Yes — active should be solid blue |
| Active icon color | `--primary-color-1` | `indirectColor1` (white/black inverse) | Partially — icon turns white on blue bg |

### Community buttons
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Shape | 8px radius with transparent border | 8px radius with **2px border** | Yes — needs visible border on active |
| Active state | Solid bg | **No bg fill, just 2px primaryColor1 border** | Yes — completely different pattern |
| Hover state | Grey bg | `primaryColor2` (blue tint) | Yes |

### Profile button
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Size | 36×36px | **32×32px** | Yes — slightly smaller |
| Status dot | None | **12×12px** circle with 2px border, green (online) or grey | Yes — missing entirely |

### Activity Center button
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Container | Part of main column | **Separate rounded rect container** below main one | Yes — needs its own box |
| Badge | Simple 8px dot | 8px dot with 2px border in nav-bar-bg color; expands to show count | Partially |

### Badge (notification dot)
| Property | Our CSS | QML Source | Fix needed |
|----------|---------|------------|------------|
| Size | 8px | 8px (after 2px border) | OK |
| Border | 2px solid nav-bar-bg | 2px solid nav-bar-bg | OK |
| Color | dangerColor1 | dangerColor1 | OK |
| Position | top:4px, right:4px | anchors to identicon top-right with negative margins | Close enough |

## Visual summary

The production sidebar looks like this:
```
┌─ baseColor4 background ─────┐
│ ┌─ navBar bg, 8px radius ─┐ │
│ │  ○ Chat (active=blue)    │ │
│ │  ○ Wallet                │ │
│ │  ○ Browser               │ │
│ │  ── separator ──         │ │
│ │  ◻ Community1 (border)   │ │
│ │  ◻ Community2            │ │
│ │  ── separator ──         │ │
│ │  ○ Portal                │ │
│ │  ○ Settings              │ │
│ │                          │ │
│ │  ◉ Profile (32px)        │ │
│ └──────────────────────────┘ │
│ ┌─ navBar bg, 8px radius ─┐ │
│ │  ○ Notifications         │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

Our current sidebar is a flat colored column with no rounded containers, wrong button shapes, and wrong colors.

## Priority
High — this is the most visible structural difference and will undermine credibility of the styling concepts if not fixed.
