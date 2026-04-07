# Pause State — Unresolved Items

Captured at: 2026-04-06, mid-session. Resume from here.

## Screen 1: Community Channel — Outstanding Fixes

### Critical (broken/incomplete)

1. **Chat header missing avatar**
   - StatusChatInfoButton.qml has StatusSmartIdenticon (36×36) before channel icon + title
   - Our HTML shows only: icon + title + description
   - Need: identicon → icon → title row, then subtitle row below

2. **Chat header missing pin count**
   - QML subtitle row: description + 1px vertical separator + pin icon (14×14) + "N pinned" text (clickable)
   - Our HTML: only description text
   - Need: full subtitle row with separator + pin indicator

3. **Message header incomplete (3 of 11 elements)**
   - Present: display name, timestamp, delivery status
   - Missing in HTML (CSS classes exist but unused):
     - Secondary name in parens (ENS name) — `.message__secondary-name`
     - Separator dots — `.message__header-dot`
     - Tertiary detail (compressed sender ID)
   - Missing entirely (no CSS or HTML):
     - Message origin info
     - Verification icons (trusted/untrusted/blocked/contact)
     - Resend button (expired messages)

4. **Reply connector path wrong**
   - QML: Shape with PathLine → PathArc (radiusX/Y: 13), 3px stroke
   - Ours: CSS border with border-bottom-left-radius: 8px (sharp L, not curved arc)
   - Need: SVG path or corrected CSS radius (13px) and proper positioning

### Medium

5. **Reply connector top margin**
   - QML: Layout.topMargin: profileImage.height/2 = 18px
   - Ours: top: 50% (relative to container, not fixed 18px)

6. **Display name color confirmed correct** — primaryColor1 (blue) ✓

7. **Chat header muted icon** — only visible when channel muted, low priority for mockup

### Low (deferred for static mockup)

8. Resend button (expired messages only)
9. Message origin info (bridge messages only)
10. Verification icons (need contact state data)

## Screen 2: Swap Modal — Outstanding Fixes (from visual comparison 2026-04-07)

### From Alisher's review (comparing mockup vs live app)

1. **Header looks different**
   - Live app: title row is inside the body (no border separator), network filter is a dropdown with full icon
   - Mockup: title + "On:" + small badge in a bordered header section
   - Need: remove header border, match network filter style to real app

2. **Account selector missing**
   - Live app: "Account 1" pill with emoji+color floats above dialog
   - Mockup: not present (was EXCLUDED in inventory)
   - Need: add account selector pill above dialog header

3. **Max button looks different**
   - Live app: "Max. 0.009441" as colored pill/link, right-aligned
   - Mockup: "Max: 4.2091" as plain text
   - Need: style as colored pill matching MaxSendButton QML (height 22, radius 20, primaryColor1 text)

4. **Arrow/exchange button looks different**
   - Live app: larger prominent circle with subtle border and shadow, sits between panels with overlap
   - Mockup: simpler, smaller appearance, no shadow
   - Need: match SwapExchangeButton.qml (44×44, indirectColor3 bg, directColor8 border) + add shadow

5. **Network selector position and style wrong (round 2)**
   - Live app: "On:" label and network dropdown are right-aligned in header row, dropdown has combobox chrome with proper spacing
   - Mockup: network filter is inside title row but positioning/style still off vs prod
   - Need: right-align "On:" + filter in title row, match combobox visual weight

6. **Account selector cropped and wrong position (round 2)**
   - Live app: account pill sits above and to the LEFT of the dialog, not centered
   - Mockup: centered, cropped at top
   - Need: left-align, ensure fully visible above dialog

7. **Token ticker style wrong**
   - Live app: token symbol is larger, bolder, with colored icon and dropdown chevron
   - Mockup: token symbol styling doesn't match the visual weight of prod
   - Need: verify font size (28px per QML), icon sizing (24×24), chevron style

8. **Redundant "Balance:" text**
   - Live app: no separate "Balance:" line — only "Max." button shown on Pay panel
   - Mockup: shows both "Balance: X ETH" and "Max. X" — redundant
   - Need: remove Balance text from Pay panel, keep only Max button

9. **Footer divider is line not shadow**
   - Live app: footer has a drop shadow at top (dropShadowEnabled: true in StatusDialogFooter)
   - Mockup: uses border-top: 1px solid
   - Need: replace border with box-shadow matching StatusDialogFooter dropShadow

### From Alisher's review round 4

10. **All dropdown chevrons wrong**
    - Mockup: text character `▾`
    - Source: StatusComboboxIndicator = 16×16 `chevron-down` StatusIcon, color baseColor1
    - Root cause: hand-drawn text substitute instead of extracted icon
    - Need: replace all `▾` with extracted chevron-down.svg (16×16, currentColor)

11. **Network selector spacing wrong**
    - Mockup: cramped padding around icon
    - Source: NetworkFilter.qml control.padding: 12, control.rightPadding: 36, control.topPadding: 7
    - Root cause: CSS padding values don't match StatusComboBox padding properties
    - Need: verify padding matches QML exactly

12. **Exchange/arrow button constantly wrong**
    - Mockup: hand-drawn arrow SVG, different visual weight
    - Source: SwapExchangeButton.qml icon.name: "arrow-down" → StatusQ/icons/arrow-down.svg
    - Root cause: hand-drawn SVG instead of extracted StatusQ icon (same anti-pattern as edit_pencil, password)
    - Need: replace with extracted arrow-down.svg, use currentColor fill

### From Alisher's review round 5

13. **Exchange button embedded between panels with panel cutout**
    - Live app: the exchange button sits between the two panels, and the panels have a semicircular cutout around the button where their edges meet it
    - Mockup: button just overlays on top of panels with no cutout
    - Root cause: SwapInputPanel.qml background is a Shape with a PathArc cutout (lines 182-257), not a simple Rectangle. The cutout was noted in inventory as MISSING (issue #3 in summary) but never implemented.
    - Need: implement the semicircular cutout in CSS or accept as known limitation

## Screens 3-4: Pending Same-Level Audit

Discover Communities audit complete (2026-04-07). Wallet Account has NOT been through the Layer 0 complexity audit + component inventory process.

## Process Issue: No Enforcement Gate

The root cause of all misses: rules are advisory, nothing prevents building code without completing the audit. Solution in progress: auditor agent that reviews component inventory and code before merge.

## Infrastructure Needed

- [ ] smux (tmux-based multi-agent communication)
- [ ] Auditor agent instructions (`docs/audit/AUDITOR.md`)
- [ ] Builder workflow doc (`docs/audit/BUILDER.md`)
- [ ] Git branch workflow for audit trail
