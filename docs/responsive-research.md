# Responsive Layout Research — Status Desktop QML Source

## Primary Breakpoint

```
ThemeUtils.portraitBreakpoint: Qt.size(1200, 680)
```

**Condition** (`AppMain.qml:153`):
```qml
readonly property bool isPortraitMode: appMain.width < 1200
```

When `width < 1200` OR `height > width`: the app switches from **landscape** (3-column SplitView) to **portrait** (SwipeView with tabbed panels).

---

## Layout Modes

### Landscape (width ≥ 1200) — `StatusSectionLayoutLandscape.qml`

3-column SplitView:

| Panel | Default Width | Min Width | Notes |
|-------|-------------|-----------|-------|
| Left | 306px | — | Collapsible, e.g. channel list |
| Center | flex (fills remaining) | 300px | Main content |
| Right | 250px | 58px | Optional, hidden via `showRightPanel` |

Nav sidebar: **always visible**, 60px wide (icon-only).

### Portrait (width < 1200 or height > width) — `StatusSectionLayoutPortrait.qml`

SwipeView with 3 indexed pages:

| Index | Panel | Navigation |
|-------|-------|-----------|
| 0 | Left panel (channel list, accounts) | Swipe right or back button |
| 1 | Center panel (chat, content) | Tap item in left panel |
| 2 | Right panel (details) | Tap action in center |

Nav sidebar: **collapsible drawer** — swipe to open/close.

---

## Per-Screen Behavior (Our 4 Screens)

### Community Channel

| Component | Landscape | Portrait |
|-----------|-----------|---------|
| Left panel (channels) | Fixed 304px (`Constants.chatSectionLeftColumnWidth`) | Full-width swipe page (index 0) |
| Center (chat) | Fills remaining space | Full-width swipe page (index 1) |
| Nav sidebar | Always visible | Drawer (swipe to open) |
| Navigation | Click channel → shows chat alongside | Click channel → `goToNextPanel()` swipes to chat |

### Discover Communities

| Component | Landscape | Portrait |
|-----------|-----------|---------|
| Grid layout | `CommunitiesGridView` with `delegateCountPerRow` auto-calculated | Same but fewer columns |
| Compact mode | Triggered at `width < 600` | Buttons reflow below search |
| Action buttons | Inline with search row | Moved below search in compact |

### Swap Modal

| Component | Landscape | Portrait |
|-----------|-----------|---------|
| Modal width | Fixed 556px | Same 556px |
| Height | Auto | `fillHeightOnBottomSheet: true` — expands to fill |
| Behavior | Centered dialog | Bottom sheet style |

### Wallet Account

| Component | Landscape | Portrait |
|-----------|-----------|---------|
| Left panel (accounts) | SplitView panel, ~306px | Full-width swipe page (index 0) |
| Center (assets) | Fills remaining | Full-width swipe page (index 1) |
| Compact mode | Headers compact at `width < 600` | Text truncation, layout adjusts |
| Navigation | Click account → shows assets alongside | Click account → swipes to assets |

---

## Nav Sidebar (PrimaryNavSidebar.qml)

```qml
property bool alwaysVisible: windowWidth > windowHeight
```

| Mode | Behavior |
|------|----------|
| Landscape | Always visible, position: 1.0 |
| Portrait | Drawer, position: 0.0 (closed), swipe/drag to open |
| Width | 60px content + 8px padding = 68px total |
| Drag | Enabled when `!alwaysVisible && !hasPopups` |

---

## Breakpoint Summary

| Component | Threshold | What Changes |
|-----------|-----------|-------------|
| **StatusSectionLayout** | width < 1200 OR height > width | 3-column → SwipeView pages |
| **PrimaryNavSidebar** | width ≤ height | Fixed sidebar → collapsible drawer |
| **CommunitiesPortalLayout** | width < 600 | Buttons reflow (compact mode) |
| **Wallet headers** | width < 600 | Text truncation, compact layout |
| **SwapModal** | — | Fixed 556px, bottom sheet on mobile |

---

## Key Source Files

| Purpose | Path |
|---------|------|
| Breakpoint definition | `StatusQ/src/StatusQ/Core/Theme/ThemeUtils.qml:40` |
| Layout chooser (portrait/landscape) | `StatusQ/src/StatusQ/Layout/StatusSectionLayout.qml:185` |
| Landscape layout (3-column) | `StatusQ/src/StatusQ/Layout/StatusSectionLayoutLandscape.qml` |
| Portrait layout (SwipeView) | `StatusQ/src/StatusQ/Layout/StatusSectionLayoutPortrait.qml` |
| Nav sidebar (drawer) | `app/mainui/panels/PrimaryNavSidebar.qml:41` |
| App root (isPortraitMode) | `app/mainui/AppMain.qml:153` |
| Community compact mode | `app/AppLayouts/Communities/CommunitiesPortalLayout.qml:57` |
| Channel left panel width | `imports/utils/Constants.qml` (chatSectionLeftColumnWidth = 304) |

---

## Implications for Mobile Mockup (Samsung S21 Ultra)

Samsung S21 Ultra CSS viewport: **~412×915** (portrait).

At 412px wide:
- `isPortraitMode: true` (412 < 1200)
- `height > width` → portrait layout
- All panels become **full-width SwipeView pages**
- Nav sidebar becomes a **drawer** (hidden by default)
- Communities enter **compact mode** (412 < 600)
- Wallet enters **compact mode** (412 < 600)
- Swap modal: 412px wide (fills screen), bottom sheet behavior

**What we need to build:**
1. Mobile shell: bottom tab bar OR swipe-to-open drawer instead of fixed nav sidebar
2. Each screen as a single full-width panel (no side-by-side)
3. Back button navigation between panels
4. Phone frame wrapper (412×915)
