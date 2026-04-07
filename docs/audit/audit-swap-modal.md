## Inventory Audit: swap-modal
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: `AccountSelectorHeader` is now handled as a separate floating header element that coexists with the title row, and the EXCLUDE rationale is source-backed rather than claiming it is replaced by the in-body title row.
- PASS: `SwapExchangeButton.qml` now has explicit file-level coverage with its own section and source-backed INCLUDE decisions for button chrome and icon behavior.
- PASS: the `SwapInputPanel` background cutout is no longer normalized away; it is correctly tracked as a missing visible detail in the summary instead.

## Code Audit: swap-modal
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L72) renders the slippage edit control as a text button `"Edit"`, but `SwapModal.qml` uses a `StatusFlatButton` with only `icon.name: "edit_pencil"` and no text in the footer row at [SwapModal.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml#L476).
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L80) renders the submit control as plain text `"Swap"`, but `signButton` in `SwapModal.qml` always includes an authentication icon (`icon.name: ...`) alongside the label at [SwapModal.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml#L532).

## Code Re-Audit: swap-modal footer icons
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L74) now adds a pencil glyph, but it is still an inline hand-drawn SVG. QML specifies `icon.name: "edit_pencil"` on a `StatusFlatButton`; per audit rules this must use the matching StatusQ icon asset, not a custom-drawn substitute.
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L85) now adds an auth glyph before `Swap`, but it is also an inline hand-drawn SVG. `signButton` in [SwapModal.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml#L540) uses a real icon chosen from `Constants.authenticationIconByType[...]`, so the HTML must use the corresponding StatusQ asset rather than an approximated SVG.

## Code Re-Audit: swap-modal extracted footer icons
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the slippage edit control now uses the exact extracted `edit_pencil.svg` path from StatusQ with `currentColor`, so it matches the QML `icon.name: "edit_pencil"` requirement instead of using a hand-drawn substitute.
- PASS: the submit button now uses the exact extracted `password.svg` path from StatusQ with `currentColor`, and [Constants.qml](/home/alisher/status-desktop/ui/imports/utils/Constants.qml#L1124) confirms `LoginType.Password` maps to `"password"`, matching the current mockup state.

## Code Audit: swap-modal visual fixes
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L5) and [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L28) render the account selector as a centered pill with emoji text `"🏦 Account 1 ▾"`, but [AccountSelectorHeader.qml](/home/alisher/status-desktop/ui/imports/shared/controls/AccountSelectorHeader.qml#L1) is an `AccountSelector` with an 8px-radius rectangular background, a 32x32 `StatusSmartIdenticon`, and the current account name text. The current HTML is structurally and visually different from the real component.
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L12) and [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L81) reduce `NetworkFilter` to `"On:" + 32px circle + external chevron`, but [NetworkFilter.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/controls/NetworkFilter.qml#L1) is a `StatusComboBox` with a 38px combobox background, built-in indicator, 24x24 network identicon/image, and control padding. With `showTitle: false`, the title text is hidden, but the combobox chrome remains. The current HTML omits that structure and uses the wrong icon sizing/chrome.

## Code Re-Audit: swap-modal account selector and network filter
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L5) still hardcodes the account selector colors inline as `#4360DF`, `#fff`, and `rgba(...)`. [AccountSelectorHeader.qml](/home/alisher/status-desktop/ui/imports/shared/controls/AccountSelectorHeader.qml#L1) resolves these from theme/account-color logic (`Utils.getColorForId`, `Utils.getContrastingColor`, `Theme.palette.primaryColor3`), and the audit rules require theme/token-driven colors rather than hardcoded values.
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L14) and [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L101) still render the network filter icon as a text `"E"` badge. [NetworkFilter.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/controls/NetworkFilter.qml#L76) uses a real 24x24 `StatusSmartIdenticon`/network image asset (`Assets.svg(d.singleSelectionIconUrl)`), so the current HTML is still using a placeholder instead of the actual icon treatment.

## Code Re-Audit: swap-modal token colors and real network icon
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the account selector no longer hardcodes inline colors; it now uses CSS token variables for the background, identicon background, text, and indicator, which clears the previous theme/token mismatch against `AccountSelectorHeader.qml`.
- PASS: the network filter now uses a real Ethereum SVG image as the 24x24 icon instead of a text placeholder badge, which matches the `NetworkFilter.qml` image-based icon treatment for single selection.

## Code Audit: swap-modal 6 visual fixes
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L78) adds `padding-top: 24px` to `.swap-modal__header`, but in [SwapModal.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml#L183) the title row lives inside the `StatusScrollView` with `topPadding: 0` and no extra header spacer. This shifts the visible title/network row away from the QML layout.
- BLOCKING: [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L323) adds `box-shadow: 0 2px 8px var(--drop-shadow)` to `.swap-exchange-btn`, but [SwapExchangeButton.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/controls/SwapExchangeButton.qml#L7) defines only background, border, icon, and hover states. There is no shadow in the source component, so this is an unsupported visual addition.

## Code Re-Audit: swap-modal unsourced additions removed
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: `.swap-modal__header` no longer adds the extra `padding-top: 24px`, so the title/network row is back in line with the `StatusScrollView` `topPadding: 0` layout from `SwapModal.qml`.
- PASS: `.swap-exchange-btn` no longer adds a shadow, so it now matches `SwapExchangeButton.qml`, which specifies only background, border, icon, and hover state styling.

## Code Re-Audit: swap-modal round 3 visual fixes
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the title weight, close-button removal, token-symbol weight, and header row structure now align with the visible `SwapModal.qml` row composition and the referenced component defaults.
- PASS: the account selector is now left-positioned above the modal with visible overflow, which matches the `AccountSelectorHeader` anchoring pattern (`y: -height - Theme.padding`) instead of the earlier centered/cropped treatment.
- PASS: the pay-panel redundant balance text is removed and the remaining layout changes stay within the source-backed scope of the requested visual corrections.

## Code Re-Audit: swap-modal round 4 extracted chevrons and arrow
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the account selector, network filter, and token selector now use the exact extracted `chevron-down.svg` path with `currentColor`, replacing the previous text chevrons.
- PASS: the exchange button now uses the exact extracted `arrow-down.svg` path with `currentColor`, matching `SwapExchangeButton.qml` instead of the earlier hand-drawn arrow.
- PASS: the network filter indicator spacing and positioning are now aligned to the `StatusComboBox` pattern, and the changes stay within source-backed icon/chrome adjustments.

## Code Audit: swap-modal cutout fix
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L218) implements the notch as a `circle 25px`, but the `SwapInputPanel.qml` path does not use a 25px circle. The actual QML cutout arc is `radiusX: root.swapExchangeButtonWidth/2 + path.strokeWidth` and `radiusY: root.swapExchangeButtonWidth/2 - path.strokeWidth/2`, which resolves to `23px` by `21.5px` for the default 44px exchange button at [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L209). The current CSS therefore uses the wrong size and wrong shape.
- BLOCKING: [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L218) also assumes a symmetric radial-gradient notch centered exactly on the edge, but the QML cutout width is driven by `relativeX: root.swapExchangeButtonWidth + (shape.cutoutGap + path.strokeWidth*2)` at [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L210), so the current CSS is still a geometric approximation rather than a source-matched translation of the actual `ShapePath`.

## Code Re-Audit: swap-modal cutout geometry
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the cutout now uses an ellipse with `23px` by `21.5px`, which matches the `SwapInputPanel.qml` `PathArc` values `radiusX` and `radiusY` for the default 44px exchange button.
- PASS: the pay/receive panel cutouts are still placed on opposite edges in line with `scale: -1` for Pay and `scale: 1` for Receive, so the orientation remains consistent with the QML shape logic.

## Code Re-Audit: swap-modal widened cutout opening
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.css](/home/alisher/status-redesign/src/screens/swap-modal.css#L225) now uses `ellipse 25px 21.5px`, but the QML cutout arc still specifies `radiusX: root.swapExchangeButtonWidth/2 + path.strokeWidth`, which resolves to `23px` for the default 44px button at [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L212). The CSS widened the curve itself, not just the opening span, so it no longer matches the source geometry.
- BLOCKING: the builder’s new rationale follows `relativeX: root.swapExchangeButtonWidth + (shape.cutoutGap + path.strokeWidth*2)` at [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L210), which does resolve to a `50px` opening, but QML uses that together with `radiusX: 23px`, not instead of it. The current CSS collapses those two independent parameters into a single `25px` ellipse and therefore changes the actual curve profile.

## Code Re-Audit: swap-modal SVG clipPath cutout
Status: FAIL
Date: 2026-04-07

### Findings:
- BLOCKING: [swap-modal.js](/home/alisher/status-redesign/src/screens/swap-modal.js#L5) hardcodes the clipPath box as `pw = 520` and `ph = 133`, but the source component is not defined that way. In QML, [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L102) sets `implicitWidth: 492` and [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L103) sets `implicitHeight: 131`, while [SwapModal.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml#L227) makes each panel fill its parent width. The current SVG therefore bakes in unsourced absolute dimensions instead of matching the actual panel box.
- BLOCKING: because the clipPath uses `clipPathUnits="userSpaceOnUse"` with those fixed `520x133` coordinates, the cutout path is no longer derived from `shape.width` and `shape.height` like the QML `ShapePath` at [SwapInputPanel.qml](/home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml#L206). That means the geometry will drift whenever the rendered panel width differs from the hardcoded SVG width, so this is still not a faithful translation of the source.
