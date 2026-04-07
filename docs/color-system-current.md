# Status Current — Compressed Semantic Color System

## Primitives (20 raw colors)

### Neutrals

| Primitive | Light | Dark | Role |
|-----------|-------|------|------|
| `surface-0` | `#FFFFFF` | `#2C2C2C` | page bg, cards, modals |
| `surface-1` | `#F6F8FA` | `#252525` | secondary panels, subtle bg |
| `surface-2` | `#EEF2F5` | `#373737` | borders, separators, hover bg |
| `surface-3` | `#E9EDF1` | `#2C2C2C` | active/selected bg, input bg |
| `surface-4` | `#E2E6E8` | `#414141` | strong dividers, input secondary |
| `text-primary` | `#000000` | `#FFFFFF` | headings, body text |
| `text-secondary` | `#939BA1` | `#909090` | labels, placeholders, icons |

### Brand

| Primitive | Light | Dark | Role |
|-----------|-------|------|------|
| `brand` | `#4360DF` | `#88B0FF` | primary action, links, active tab |
| `brand-subtle` | `#ECEFFB` | `#273251` | nav bg, selected tint |
| `brand-10` | `#4360DF1A` | `#869EFF33` | ghost fills, switch bg |
| `brand-20` | `#4360DF33` | `#869EFF4D` | secondary bg, emoji reaction hover |

### Status

| Primitive | Light | Dark | Role |
|-----------|-------|------|------|
| `success` | `#4EBC60` | `#60C370` | positive change, confirmed |
| `danger` | `#FF2D55` | `#FF5C7B` | error, destructive, negative change |
| `warning` | `#F6793C` | `#F6793C` | caution, pending |
| `mention` | `#0DA4C9` | `#7BE5FF` | @mention highlight |
| `pin` | `#FE8F59` | `#FFA67B` | pinned message accent |

### Overlay

| Primitive | Light | Dark | Role |
|-----------|-------|------|------|
| `overlay` | `rgba(0,0,0,0.4)` | `rgba(0,0,0,0.4)` | backdrop, modal dim |
| `shadow-1` | `rgba(0,34,51,0.03)` | `rgba(0,0,0,0.08)` | subtle drop shadow |
| `shadow-2` | `rgba(0,0,0,0.15)` | `rgba(107,111,118,0.05)` | stronger shadow |

---

## Opacity Scale (applied to text-primary)

| Step | Light | Dark | Use |
|------|-------|------|-----|
| 100% | `#000000` / `#FFFFFF` | text, icons |
| 90% | `E6` | strong secondary |
| 80% | `CC` | medium secondary |
| 70% | `B3` | soft secondary |
| 40% | `66` | disabled text |
| 30% | `4D` | ghost text |
| 10% | `1A` | faint borders |
| 5% | `0D` | hover tint |

---

## Semantic Mapping (134 tokens → 20 primitives)

### Surfaces & Backgrounds

| Token | Maps to | Notes |
|-------|---------|-------|
| `--background`, `--card-color`, `--modal-bg`, `--app-layout-bg`, `--list-item-bg`, `--indirect-color-4` | `surface-0` | |
| `--secondary-menu-background`, `--base-color-4`, `--badge-border` | `surface-1` | |
| `--background-hover`, `--border`, `--separator`, `--base-color-2`, `--menu-hover-bg` | `surface-2` | |
| `--base-color-3`, `--chat-list-item-selected-bg`, `--nav-list-item-selected-bg` | `surface-3` | |
| `--chat-input-secondary-bg` | `surface-4` | |
| `--app-nav-bar-bg`, `--desktop-blue-10` | `brand-subtle` | |

### Text & Icons

| Token | Maps to | Notes |
|-------|---------|-------|
| `--direct-color-1`, `--text-color` | `text-primary` @ 100% | |
| `--direct-color-2` | `text-primary` @ 90% | |
| `--direct-color-3` | `text-primary` @ 80% | |
| `--direct-color-4` | `text-primary` @ 70% | footer values |
| `--direct-color-5` | `text-primary` @ 40% | footer labels |
| `--direct-color-6` | `text-primary` @ 30% | placeholders |
| `--direct-color-7` | `text-primary` @ 10% | faint borders |
| `--direct-color-8` | `text-primary` @ 5% | hover tints |
| `--base-color-1`, `--secondary-text`, `--dark-grey` | `text-secondary` | |

### Inverse (text-on-brand)

| Token | Maps to | Notes |
|-------|---------|-------|
| `--indirect-color-1` | Light: `#FFF` / Dark: `#000` | text on primary bg |
| `--indirect-color-2` | above @ 70% | |
| `--indirect-color-3` | above @ 40% | panel bg |

### Brand / Primary

| Token | Maps to | Notes |
|-------|---------|-------|
| `--primary-color-1`, `--switch-tab-button-bg`, `--switch-tab-text` | `brand` | |
| `--primary-color-2`, `--secondary-background` | `brand-20` | |
| `--primary-color-3`, `--switch-tab-bar-bg` | `brand-10` | |

### Status Colors

| Token | Maps to | Notes |
|-------|---------|-------|
| `--success-color-1` | `success` | |
| `--success-color-2` | `success` @ 10% | |
| `--success-color-3` | `success` @ 20% | |
| `--danger-color-1` | `danger` | |
| `--danger-color-2` | `danger` @ 20% | |
| `--danger-color-3` | `danger` @ 10% | |
| `--warning-color-1` | `warning` | |
| `--warning-color-2` | `warning` @ 20% | |
| `--warning-color-3` | `warning` @ 10% | |
| `--mention-color-1` | `mention` | |
| `--mention-color-2–4` | `mention` @ 30/20/10% | |
| `--pin-color-1` | `pin` | |
| `--pin-color-2–3` | `pin` parent @ 20/10% | |

---

## Misc / Customisation (12 avatar/community colors)

These are identity colors, not system colors. Used for avatars, community banners, account markers.

| # | Light | Dark | Hovered |
|---|-------|------|---------|
| 1 | `#2946C4` | `#AAC6FF` | `#364DB2` |
| 2 | `#887AF9` | `#887AF9` | `#6D62C7` |
| 3 | `#51D0F0` | `#51D0F0` | `#41A6C0` |
| 4 | `#D37EF4` | `#D37EF4` | `#A965C3` |
| 5 | `#FA6565` | `#FA6565` | `#C85151` |
| 6 | `#FE8F59` | `#FE8F59` | — |
| 7 | `#FFCA0F` | `#FFCA0F` | `#CCA20C` |
| 8 | `#7CDA00` | `#93DB33` | `#63AE00` |
| 9 | `#26A69A` | `#10A88E` | `#1E857B` |
| 10 | `#8B3131` | `#AD4343` | `#6F2727` |
| 11 | `#9B832F` | `#EAD27B` | `#7C6926` |
| 12 | `#9EA85D` | `#AFB551` | — |

---

## Summary

| Layer | Count | Description |
|-------|-------|-------------|
| Neutrals | 7 | surfaces + text |
| Brand | 4 | primary + opacity steps |
| Status | 5 | success, danger, warning, mention, pin |
| Overlay | 4 | shadows + backdrop |
| **Core total** | **20** | all UI chrome |
| Misc/identity | 12 | avatar/community colors |
| Opacity scale | 8 | applied to text-primary |
| Semantic tokens | 134 | aliases into the 20 primitives |
