## Inventory Audit: swap-modal
Status: FAIL
Date: 2026-04-07

### Findings:
- MISSING / WRONG EXCLUDE: `SwapModal.qml` `header: Item { AccountSelectorHeader { ... } }` is a real on-screen header element positioned above the dialog with `y: -height - Theme.padding`; it is not replaced by the title row inside the scroll body. The inventory marks `A1` as `EXCLUDE` with the wrong justification ("our header shows title row instead"), but source shows both the account selector header and the title row coexist.
- MISSING COVERAGE: `SwapExchangeButton.qml` is one of the requested source files for this audit, but the inventory never gives it its own file-level component section with explicit coverage. It is only mentioned inline under `A2b-3`, which is not enough for a full component inventory against the listed QML sources.
- UNJUSTIFIED SHORTCUT: `SwapInputPanel.qml` background `Shape` includes a rounded cutout path sized around the 44px exchange button, but the inventory says it is "simplified as plain rectangle" and "not critical for styling mockup". That is exactly the kind of approximation the audit forbids. If the current HTML/CSS does not implement the cutout, this must be listed as a missing/broken item in the summary rather than normalized away.
