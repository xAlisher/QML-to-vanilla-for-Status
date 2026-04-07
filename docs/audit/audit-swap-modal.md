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
