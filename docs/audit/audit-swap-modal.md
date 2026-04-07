## Inventory Audit: swap-modal
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: `AccountSelectorHeader` is now handled as a separate floating header element that coexists with the title row, and the EXCLUDE rationale is source-backed rather than claiming it is replaced by the in-body title row.
- PASS: `SwapExchangeButton.qml` now has explicit file-level coverage with its own section and source-backed INCLUDE decisions for button chrome and icon behavior.
- PASS: the `SwapInputPanel` background cutout is no longer normalized away; it is correctly tracked as a missing visible detail in the summary instead.
