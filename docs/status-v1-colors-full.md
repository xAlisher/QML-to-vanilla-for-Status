# Status Legacy v1 — Complete Color System

Source: [`status-im/status-legacy` @ tag `v1.20.6`](https://github.com/status-im/status-legacy/blob/v1.20.6/src/quo/design_system/colors.cljs)

**Important**: This is the actual v1 color system from `src/quo/design_system/colors.cljs`, NOT the quo2 foundations which were part of the v2 redesign.

---

## Light Theme

| Token | Value (rgba) | Hex | Role |
|-------|-------------|-----|------|
| ui-background | rgba(255,255,255,1) | `#FFFFFF` | Default view background |
| ui-01 | rgba(238,242,245,1) | `#EEF2F5` | Secondary background |
| ui-02 | rgba(0,0,0,0.1) | — | Dividers |
| ui-03 | rgba(0,0,0,0.86) | — | Dark background |
| interactive-01 | rgba(67,96,223,1) | `#4360DF` | Accent — buttons, own messages, actions |
| interactive-02 | rgba(236,239,252,1) | `#ECEFFC` | Light accent — button bg, message bg |
| interactive-03 | rgba(255,255,255,0.1) | — | Background for interactive above accent |
| interactive-04 | rgba(147,155,161,1) | `#939BA1` | Disabled state |
| text-01 | rgba(0,0,0,1) | `#000000` | Main text |
| text-02 | rgba(147,155,161,1) | `#939BA1` | Secondary text |
| text-03 | rgba(255,255,255,0.7) | — | Secondary on accent |
| text-04 | rgba(67,96,223,1) | `#4360DF` | Links |
| text-05 | rgba(255,255,255,1) | `#FFFFFF` | Text inverse on accent |
| icon-01 | rgba(0,0,0,1) | `#000000` | Primary icons |
| icon-02 | rgba(147,155,161,1) | `#939BA1` | Secondary icons |
| icon-03 | rgba(255,255,255,0.4) | — | Secondary icons on accent bg |
| icon-04 | rgba(67,96,223,1) | `#4360DF` | Interactive icon |
| icon-05 | rgba(255,255,255,1) | `#FFFFFF` | Icons inverse on accent |
| positive-01 | rgba(68,208,88,1) | `#44D058` | Success — text, icons |
| positive-02 | rgba(78,188,96,0.1) | — | Success background |
| positive-03 | rgba(78,188,96,1) | `#4EBC60` | Lighter positive |
| negative-01 | rgba(255,45,85,1) | `#FF2D55` | Error — text, icons |
| negative-02 | rgba(255,45,85,0.1) | — | Error background |
| warning-01 | rgba(255,202,15,1) | `#FFCA0F` | Warning |
| warning-02 | rgba(255,202,15,0.1) | — | Warning background |
| shadow-01 | rgba(0,9,26,0.12) | — | Main shadow |
| backdrop | rgba(0,0,0,0.4) | — | Modal backdrop |
| border-01 | rgba(238,242,245,1) | `#EEF2F5` | Default border |
| border-02 | rgba(67,96,223,0.1) | — | Accent border |
| highlight | rgba(67,96,223,0.4) | — | Highlight |
| blurred-bg | rgba(255,255,255,0.3) | — | Blurred background |

---

## Dark Theme

| Token | Value (rgba) | Hex | Role |
|-------|-------------|-----|------|
| ui-background | rgba(20,20,20,1) | `#141414` | Default view background |
| ui-01 | rgba(37,37,40,1) | `#252528` | Secondary background |
| ui-02 | rgba(0,0,0,0.1) | — | Dividers |
| ui-03 | rgba(0,0,0,0.86) | — | Dark background |
| interactive-01 | rgba(97,119,229,1) | `#6177E5` | Accent — lighter blue for dark mode |
| interactive-02 | rgba(35,37,47,1) | `#23252F` | Dark accent background |
| interactive-03 | rgba(255,255,255,0.1) | — | Background for interactive above accent |
| interactive-04 | rgba(131,140,145,1) | `#838C91` | Disabled state |
| text-01 | rgba(255,255,255,1) | `#FFFFFF` | Main text |
| text-02 | rgba(131,140,145,1) | `#838C91` | Secondary text |
| text-03 | rgba(255,255,255,0.7) | — | Secondary on accent |
| text-04 | rgba(97,119,229,1) | `#6177E5` | Links |
| text-05 | rgba(20,20,20,1) | `#141414` | Text inverse |
| icon-01 | rgba(255,255,255,1) | `#FFFFFF` | Primary icons |
| icon-02 | rgba(131,140,145,1) | `#838C91` | Secondary icons |
| icon-03 | rgba(255,255,255,0.4) | — | Secondary icons on accent bg |
| icon-04 | rgba(97,119,229,1) | `#6177E5` | Interactive icon |
| icon-05 | rgba(20,20,20,1) | `#141414` | Icons inverse |
| positive-01 | rgba(68,208,88,1) | `#44D058` | Success |
| positive-02 | rgba(78,188,96,0.1) | — | Success background |
| positive-03 | rgba(78,188,96,1) | `#4EBC60` | Lighter positive |
| negative-01 | rgba(252,95,95,1) | `#FC5F5F` | Error — warmer red for dark |
| negative-02 | rgba(252,95,95,0.1) | — | Error background |
| warning-01 | rgba(255,202,15,1) | `#FFCA0F` | Warning |
| warning-02 | rgba(255,202,15,0.1) | — | Warning background |
| shadow-01 | rgba(0,0,0,0.75) | — | Main shadow (stronger in dark) |
| backdrop | rgba(0,0,0,0.4) | — | Modal backdrop |
| border-01 | rgba(37,37,40,1) | `#252528` | Default border |
| border-02 | rgba(97,119,229,0.1) | — | Accent border |
| highlight | rgba(67,96,223,0.4) | — | Highlight |
| blurred-bg | rgba(0,0,0,0.3) | — | Blurred background |

---

## Legacy Named Colors

| Name | Value | Role |
|------|-------|------|
| white | `#FFFFFF` | — |
| black | `#000000` | — |
| gray | `#939BA1` | Secondary text/icons |
| gray-lighter | `#EEF2F5` | Light background |
| blue | `#4360DF` | Accent blue |
| blue-light | `#ECEFFC` | Light accent bg |
| red | `#FF2D55` | Error/danger |
| green | `#44D058` | Success |
| purple | `#887AF9` | Chat color |
| orange | `#FE8F59` | Chat color |
| red-audio-recorder | `#FA6565` | Audio recorder |
| mention-incoming | `#0DA4C9` | Mention highlight |
| mention-outgoing | `#9EE8FA` | Mention highlight |
| default-community-color | `#773377` | Community fallback |
| color-online | `#7CDA00` | Online status |
| color-dnd | `#FA6565` | Do not disturb |
| color-inactive | `#939BA1` | Inactive status |

---

## Chat Colors

| Hex | Index |
|-----|-------|
| `#FA6565` | 0 |
| `#7CDA00` | 1 |
| `#887AF9` | 2 |
| `#51D0F0` | 3 |
| `#FE8F59` | 4 |
| `#D37EF4` | 5 |

## Account Colors

| Hex |
|-----|
| `#9B832F` |
| `#D37EF4` |
| `#1D806F` |
| `#FA6565` |
| `#7CDA00` |
| `#887AF9` |
| `#8B3131` |

---

## Mention Colors

| Token | Light | Dark |
|-------|-------|------|
| mentioned-background | `#DEF6FC` | `#2A4046` |
| mentioned-border | `#B8ECF9` | `#2A4046` |
| pin-background | `#FFEECC` | `#34232B` |

---

## Key Characteristics of v1 vs v2

| Aspect | v1 (this file) | v2 (quo2/foundations) |
|--------|---------------|---------------------|
| Neutral tint | **Pure gray** (`#141414`, `#939BA1`) | Navy-tinted (`#1B273D`, `#647084`) |
| Dark bg | **Pure dark** `#141414` (rgb 20,20,20) | Navy `#131D2F` |
| Success | **Bright green** `#44D058` | Teal `#23ADA0` |
| Danger (light) | **Pink-red** `#FF2D55` | Same `#FF2D55` |
| Danger (dark) | **Warm red** `#FC5F5F` | `#E95460` |
| Warning | **Yellow** `#FFCA0F` | Orange `#FF7D46` |
| Dark accent | **Lighter blue** `#6177E5` | `#88B0FF` |
| Secondary text (dark) | **Gray** `#838C91` | Navy-gray `#A1ABBD` |
| Token system | Semantic roles (interactive, text, icon) | Numbered scale (neutral-50, primary-50) |
| Color count | ~30 unique values | 67+ unique values |
