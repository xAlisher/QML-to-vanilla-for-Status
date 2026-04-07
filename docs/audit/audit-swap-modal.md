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
