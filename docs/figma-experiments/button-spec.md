# Button Component Specification

Issue: #27
Source: `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Controls/`

---

## Button Family Overview

| Component | Type | Base size | Shape | Use case |
|-----------|------|-----------|-------|----------|
| StatusButton | Text button (filled/outline) | Dynamic | Rounded rect | Primary actions, CTAs |
| StatusFlatButton | Text button (transparent) | Dynamic | Rounded rect | Secondary actions, links |
| StatusFlatRoundButton | Icon button (flat) | 44×44 | Rounded rect (8) | Toolbar actions |
| StatusRoundButton | Icon button (filled) | 44×44 | Circle | Prominent icon actions |

---

## StatusButton (Primary Component for Figma)

Source: `StatusButton.qml` → extends `StatusBaseButton.qml`

### Size Variants

| Size | Height | Icon size | H-padding (with icon) | H-padding (text only) | V-padding | Font size | Radius |
|------|--------|-----------|----------------------|----------------------|-----------|-----------|--------|
| **Large** (default) | Auto | 24×24 | 18px | 32px | 11px | 15px (body) | 8px |
| **Small** | Auto | 20×20 | 16px | 16px | 8px | 13px (caption) | 8px |
| **Tiny** | Auto | 16×16 | 8px | 8px | 5px | 13px (caption) | 6px |
| **XSmall** | Auto | 13×13 | 6px | 6px | 3px | 13px (caption) | 8px |

### Type Variants (Color Mapping)

| Type | Background | Hover bg | Text color | Disabled bg | Disabled text |
|------|-----------|----------|-----------|-------------|---------------|
| **Normal** | `brand/primary` @ 10% | `brand/primary` @ 20% | `brand/primary` | `surface/2` | `text/secondary` |
| **Primary** | `brand/primary` | hover(brand) | white (indirect) | `surface/2` | `text/secondary` |
| **Danger** | `status/danger` @ 10% | `status/danger` @ 20% | `status/danger` | `surface/2` | `text/secondary` |
| **Warning** | `status/warning` @ 10% | `status/warning` @ 20% | `status/warning` | `surface/2` | `text/secondary` |
| **Success** | `status/success` @ 10% | `status/success` @ 20% | `status/success` | `surface/2` | `text/secondary` |

### Outline Variant

When `isOutline: true` (Normal type only):
- Background: transparent
- Border: 1px `surface/2`
- Text: `brand/primary`

### States

| State | Visual change |
|-------|--------------|
| Default | normalColor bg |
| Hover | hoverColor bg |
| Pressed | hoverColor bg (same as hover in QML) |
| Disabled | disabledColor bg, baseColor1 text, opacity reduced |
| Loading | Content hidden, loading spinner shown |

### Typography

- Font: Inter
- Weight: Medium (500)
- Size: Large=15px (`size/body`), Small/Tiny/XSmall=13px (`size/caption`)

### Content Layout

```
[ icon spacing text ]  or  [ text ]  or  [ icon ]
```
- Spacing between icon and text: Large=6px, others=4px
- Icon color matches text color
- Text position: Left or Right of icon (default Right)

---

## StatusFlatButton

Source: `StatusFlatButton.qml` → extends `StatusBaseButton.qml`

Same as StatusButton except:
- **Background always transparent** (normal + disabled)
- Hover shows tinted background
- Border: 1px `surface/2` when not hovered (Normal type)

---

## StatusFlatRoundButton

Source: `StatusFlatRoundButton.qml`

| Property | Value |
|----------|-------|
| Size | 44×44 |
| Radius | 8px |
| Icon size | 24×24 |
| Background | Transparent (all states except hover) |

### Type Variants

| Type | Icon color | Hover bg |
|------|-----------|----------|
| Primary | `brand/primary` | `brand/primary` @ 10% |
| Secondary | `text/primary` | `surface/2` |
| Tertiary | `text/secondary` | `surface/2` |
| Quaternary | `text/primary` | `surface/2` |

---

## StatusRoundButton

Source: `StatusRoundButton.qml`

| Property | Value |
|----------|-------|
| Size | 44×44 |
| Radius | 22px (circle) |
| Icon size | 23×23 |

### Type Variants

| Type | Background | Hover bg | Icon color |
|------|-----------|----------|-----------|
| Primary | `brand/primary` @ 10% | `brand/primary` @ 20% | `brand/primary` |
| Secondary | `brand/primary` | misc/1 | white (indirect) |
| Tertiary | transparent | `brand/primary` @ 10% | `text/secondary` → `brand/primary` on hover |
| Quaternary | `status/danger` @ 10% | `status/danger` @ 20% | `status/danger` |
| Quinary | transparent | `brand/primary` @ 10% | `text/primary` |

---

## Figma Implementation Plan

### Component Structure

Create one **component set** named `Button` with these properties:

| Property | Values |
|----------|--------|
| Variant | Filled, Flat, Outline |
| Type | Normal, Primary, Danger, Warning, Success |
| Size | Large, Small, Tiny |
| State | Default, Hover, Disabled |
| Icon | Leading, Trailing, None, Icon-only |

### Token Bindings

| Button part | Bind to |
|------------|---------|
| Fill | Color primitive (per Type mapping above) |
| Text | Text style from Typography library |
| Font size | `size/body` (Large) or `size/caption` (Small/Tiny) |
| Corner radius | 8px (Large/Small) or 6px (Tiny) |
| Text color | Color primitive (per Type) |
| Border | Color primitive `surface/2` when outline |

### Figma File

Use: existing "Components and Pages" file (created by Alisher)
- Need file key to proceed

### Build Order

1. **Base frame** with auto-layout (icon + text)
2. **Fill + stroke** bound to color variables
3. **Text** using published typography styles
4. **Create variants** for Type × Size × State × Icon
5. **Component set** with property controls

### Source Files

| File | Path |
|------|------|
| StatusBaseButton.qml | `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Controls/StatusBaseButton.qml` |
| StatusButton.qml | `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Controls/StatusButton.qml` |
| StatusFlatButton.qml | `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Controls/StatusFlatButton.qml` |
| StatusFlatRoundButton.qml | `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Controls/StatusFlatRoundButton.qml` |
| StatusRoundButton.qml | `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Controls/StatusRoundButton.qml` |
