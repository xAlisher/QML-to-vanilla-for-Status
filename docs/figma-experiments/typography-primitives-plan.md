# Plan: Typography Primitives in Figma

Issue: #26
Branch: `issue/26`
Figma file: `oKl1tjwtlsfEgjMSJQOTxV` (Status Primitives — Design System Foundation)

---

## Source: QML Typography System

### Font Families (3)

| QML name | Font | Usage |
|----------|------|-------|
| `baseFont` | Inter | All UI text |
| `monoFont` | InterStatus | Mono labels (addresses, amounts) |
| `codeFont` | Roboto Mono | Code blocks |

### Font Size Scale (6 named + custom)

From `theme.cpp` (base sizes, before fontSizeOffset):

| QML token | Base size | CSS var | Role |
|-----------|----------|---------|------|
| `secondaryAdditionalTextSize` | 17px | `--font-size-secondary-additional` | Section headers |
| `primaryTextFontSize` | 15px | `--font-size-primary` | Body text, list items |
| `secondaryTextFontSize` | 14px | `--font-size-secondary` | Secondary body |
| `additionalTextSize` | 13px | `--font-size-additional` | Captions, footer labels |
| `tertiaryTextFontSize` | 12px | `--font-size-tertiary` | Small labels, badges |
| `asideTextFontSize` | 10px | `--font-size-aside` | Tiny labels |

Custom sizes used via `Theme.fontSize(N)`:

| Size | Usage |
|------|-------|
| 40px | Onboarding headlines |
| 28px | Dialog titles (HeaderTitleText) |
| 24px | Large display |
| 19px | Card titles, account names |
| 16px | — |
| 11px | Micro labels |
| 9px | — |

### Font Weights (4 used)

| QML weight | CSS value | Figma style | Usage count in StatusQ |
|-----------|-----------|-------------|----------------------|
| `Font.Medium` | 500 | Medium | 38 (most common) |
| `Font.Bold` | 700 | Bold | 6 |
| `Font.Normal` | 400 | Regular | 5 |
| `Font.DemiBold` | 600 | Semi Bold | 3 |

### Line Heights

Most components use `lineHeight: 1.2` (ratio) or specific fixed heights:
- 38px (dialog titles at 28px size)
- 26px (19px card titles)
- 24px (content lines)
- 22px (list items)
- 18px (captions)
- 14px (small labels)

---

## Figma Variables Plan

### Variable Collection: "Typography"

Figma supports FLOAT variables — use for sizes. Font family set via text styles.

| Variable name | Value | Type |
|--------------|-------|------|
| `size/section-header` | 17 | FLOAT |
| `size/body` | 15 | FLOAT |
| `size/body-secondary` | 14 | FLOAT |
| `size/caption` | 13 | FLOAT |
| `size/label` | 12 | FLOAT |
| `size/aside` | 10 | FLOAT |
| `size/title-dialog` | 28 | FLOAT |
| `size/title-card` | 19 | FLOAT |

### Text Styles (Figma native)

Combine font + size + weight + line-height into reusable text styles:

| Style name | Font | Size | Weight | Line height | Usage |
|-----------|------|------|--------|-------------|-------|
| `Heading/Dialog` | Inter | 28px | Regular (400) | 38px | Dialog titles |
| `Heading/Card` | Inter | 19px | Bold (700) | 26px | Card titles, community names |
| `Heading/Section` | Inter | 17px | Bold (700) | 22px | Section headers |
| `Body/Default` | Inter | 15px | Medium (500) | 22px | Primary body text |
| `Body/Secondary` | Inter | 14px | Regular (400) | 20px | Secondary text |
| `Caption/Default` | Inter | 13px | Medium (500) | 18px | Footer labels, captions |
| `Label/Default` | Inter | 12px | Regular (400) | 16px | Badges, small labels |
| `Label/Aside` | Inter | 10px | Regular (400) | 14px | Tiny labels |
| `Mono/Body` | Roboto Mono | 15px | Regular (400) | 22px | Addresses, amounts |
| `Mono/Caption` | Roboto Mono | 13px | Regular (400) | 18px | Code, hashes |

---

## Execution Steps

### Step 1: Create FLOAT variables for sizes
- Add to existing file `oKl1tjwtlsfEgjMSJQOTxV`
- New collection: "Typography"
- 8 FLOAT variables for the size scale

### Step 2: Create text styles
- 10 text styles covering the main combinations
- Named with `/` hierarchy for Figma panel grouping

### Step 3: Build specimen page
- New page: "Typography"
- Show each text style with sample text
- Include size, weight, line-height annotations
- Group by: Headings, Body, Captions/Labels, Mono

### Step 4: Verify
- Screenshot specimen page
- Cross-reference with QML source values

---

## What's NOT in scope
- fontSizeOffset system (dynamic scaling — Figma doesn't support this natively)
- InterStatus font (not available on Google Fonts — use Inter as proxy)
- Every possible size/weight combination (only the 10 most-used styles)
