# Component Inventory — Swap Modal (Full Screen)

Full screen inventory per BUILDER.md protocol. Covers every component
in the Swap Modal dialog.

---

## A. DIALOG CONTAINER (SwapModal.qml)

File: /home/alisher/status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml
Parent: StatusDialog
implicitWidth: 556, topPadding: Theme.xlPadding(32), backgroundColor: baseColor3

### A1. header: Item { AccountSelectorHeader }
Line 168–181
File: AccountSelectorHeader is a StatusQ component
Positioned y: -height - Theme.padding (floats above dialog top edge)
Shows: account name, emoji, balance — allows switching wallet accounts via popup
Coexists with the title row (A2a-1) inside the body — they are separate elements.
**EXCLUDE** (the AccountSelectorHeader is a floating popup trigger positioned outside the dialog viewport at y: -height - Theme.padding. In the static mockup, the dialog is shown without account switching UI. The close button in our mockup header comes from StatusDialog's built-in headerAction, not from AccountSelectorHeader.)

### A2. StatusScrollView (body)
Line 183–456
anchors.fill: parent, contentWidth: availableWidth
topPadding: 0, bottomPadding: Theme.xlPadding(32)

#### A2-inner. ColumnLayout
Line 189–455, spacing: Theme.padding(16)

##### A2a. Column (title wrapper — prevents resize on network popup)
Line 196–231

###### A2a-1. RowLayout (title row)
Line 199–230, spacing: 12

####### A2a-1a. HeaderTitleText
Line 202–206
text: "Swap", fillWidth, AlignLeft|AlignVCenter
Font: fontSize(28), lineHeight 38, letterSpacing -0.4 (from HeaderTitleText defaults)
**INCLUDE** (already present)

####### A2a-1b. StatusBaseText ("On:")
Line 207–215
text: "On:", color: baseColor1, font.pixelSize: additionalTextSize(13)
lineHeight: 38, lineHeightMode: FixedHeight, verticalAlignment: AlignVCenter
**INCLUDE** (already present)

####### A2a-1c. NetworkFilter
Line 216–229
Network selector badge (shows selected network icon + name)
multiSelection: false, showTitle: false
**INCLUDE** (already present as network badge)

##### A2b. Item (panels container)
Line 233–340
Layout.fillWidth, Layout.margins: 2
Layout.preferredHeight: payPanel.height + receivePanel.height + 4

###### A2b-1. SwapInputPanel (payPanel)
Line 238–283
File: /home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml
See C1 for sub-components
swapSide: Pay, anchors top/left/right
**INCLUDE** (already present)

###### A2b-2. SwapInputPanel (receivePanel)
Line 285–323
Same component as payPanel but swapSide: Receive
interactive: false, anchors bottom/left/right
**INCLUDE** (already present)

###### A2b-3. SwapExchangeButton
Line 325–339
File: /home/alisher/status-desktop/ui/app/AppLayouts/Wallet/controls/SwapExchangeButton.qml
anchors.centerIn: parent
implicitWidth: 44, implicitHeight: 44
isRoundIcon: true, normalColor: indirectColor3, hoverColor: directColor8
borderWidth: 1, borderColor: hovered ? directColor7 : directColor8
icon: hovered ? "arrow-up" : "arrow-down", icon.color: baseColor1
**INCLUDE** (already present)

##### A2c. RowLayout (approximation/quote row)
Line 342–420
visible: validSwapProposalReceived || swapProposalLoading
spacing: 0

###### A2c-1. StatusBaseText (left quote)
Line 371–380
text: "1 ETH ≈", color: directColor4, font.weight: Medium, pixelSize: additionalTextSize(13)
**INCLUDE** (already present)

###### A2c-2. StatusTextWithLoadingState (right quote amount)
Line 382–393
text: quote amount, customColor: directColor4, font.weight: Medium, additionalTextSize
loading: amountLoading
**INCLUDE** (already present — loading state excluded for static mockup)

###### A2c-3. StatusBaseText (fiat price)
Line 395–409
text: "($2,565.00)", color: directColor5, font.weight: Medium, additionalTextSize
visible: !amountLoading
**INCLUDE** (already present)

###### A2c-4. StatusFlatButton (invert quote)
Line 411–419
icon.name: "swap", size: XSmall, hoverColor: transparent
visible: !amountLoading
**EXCLUDE** (interactive swap-direction button, not in static mockup scope)

##### A2d. EditSlippagePanel
Line 422–434
Layout.fillWidth, Layout.topMargin: Theme.padding
visible: editSlippageButton.checked (default false)
**EXCLUDE** (hidden by default, only shows when user clicks edit slippage)

##### A2e. ErrorTag
Line 436–454
visible: isError (when errorMessage !== "")
**EXCLUDE** (error state, not in static mockup)

### A3. footer: StatusDialogFooter
Line 458–592
color: baseColor3, dropShadowEnabled: true

#### A3a. leftButtons: ColumnLayout
Line 462–491
Layout.leftMargin: Theme.padding(16), spacing: 0

##### A3a-1. StatusBaseText (slippage label)
Line 465–470
text: "Max slippage:", color: directColor5, font.weight: Medium
**INCLUDE** — currently flat in same row, QML has it ABOVE the value

##### A3a-2. RowLayout (slippage value + edit)
Line 471–490

###### A3a-2a. StatusBaseText (slippage value)
Line 472–478
text: "0.5%", color: directColor4, font.weight: Medium
**INCLUDE** (already present)

###### A3a-2b. StatusFlatButton (edit slippage)
Line 479–489
icon.name: "edit_pencil", size: Tiny
textColor: hovered ? directColor1 : directColor5
hoverColor: transparent
visible: !checked (visible when not editing)
**INCLUDE** (already present)

#### A3b. rightButtons: RowLayout
Line 493–591
Layout.rightMargin: Theme.padding(16), spacing: Theme.bigPadding(24)

##### A3b-1. ColumnLayout (fees column)
Line 497–545

###### A3b-1a. StatusBaseText (fees label)
Line 498–503
text: "Max fees:", color: directColor5, font.weight: Medium
**INCLUDE** — currently inline, QML has it ABOVE the value

###### A3b-1b. StatusBaseText (fees value)
Line 504–543
text: formatted fee amount or "--", color: directColor4, font.weight: Medium
Contains LoadingComponent (visible when loading) — **EXCLUDE** loading state
**INCLUDE** (already present)

##### A3b-2. StatusButton (Swap/Sign button)
Line 546–589
text: "Swap" (or "Approve {token}" when approval needed)
disabledColor: directColor8
**INCLUDE** (already present)

### A4. Component: swapApproveModalComponent
Line 594–653
SwapApproveCapModal popup
**EXCLUDE** (approval flow popup, not in static mockup)

### A5. Component: swapSignModalComponent
Line 655–740
SwapSignModal popup
**EXCLUDE** (sign flow popup, not in static mockup)

---

## C. DELEGATE COMPONENTS

### C1. SwapInputPanel (Control)
File: /home/alisher/status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml
padding: Theme.padding(16), implicitWidth: 492, implicitHeight: 131
background: Shape with indirectColor3 fill, directColor8 border (directColor7 when focused)
radius: Theme.radius(8)

#### C1-bg. Shape (background with cutout)
Line 182–257
Rounded rectangle with semicircular cutout at top center (for exchange button)
fillColor: indirectColor3, strokeColor: directColor8 (normal) / directColor7 (focused)
strokeWidth: 1, scale: -1 for Pay side (cutout at bottom)
**INCLUDE** — current CSS renders as plain rectangle. QML has a semicircular cutout sized around the 44px exchange button. This is a MISSING visual detail (see summary).

#### C1-content. RowLayout (contentItem)
Line 259–355, spacing: 20

##### C1a. ColumnLayout (left — amount input)
Line 261–292, Layout.fillHeight/fillWidth

###### C1a-1. AmountToSend (amount input)
Line 265–291
caption: "Pay" or "Receive" (line 84), interactive
Contains: caption label (additionalTextSize, directColor1), amount input (fontSize 34), fiat line
**INCLUDE** (already present: label, amount input, fiat text)

##### C1b. ColumnLayout (right — token selector + balance)
Line 293–354

###### C1b-1. Item (spacer)
Line 295, Layout.fillHeight
**INCLUDE** (implicit in flexbox)

###### C1b-2. AssetSelector (holdingSelector)
Line 297–323
Layout.alignment: AlignRight
Shows: token icon 24x24 + symbol text (28px) + chevron
**INCLUDE** (already present)

###### C1b-3. Item (spacer)
Line 325, Layout.fillHeight when maxSendButton not visible
**INCLUDE** (implicit in flexbox)

###### C1b-4. MaxSendButton
Line 327–353
Layout.alignment: AlignRight
visible: isSelectedHoldingValidAsset AND swapSide === Pay
height: 22px, horizontalPadding: 8, verticalPadding: 3, radius: 20
font: tertiaryTextFontSize(12), color: primaryColor1
**INCLUDE** (already present — only on Pay panel)

---

### C2. SwapExchangeButton
File: /home/alisher/status-desktop/ui/app/AppLayouts/Wallet/controls/SwapExchangeButton.qml
Parent: StatusButton
implicitWidth: 44, implicitHeight: 44

#### C2a. StatusButton properties
Line 7–22
isRoundIcon: true — renders as circle (border-radius: 50%)
normalColor: indirectColor3, disabledColor: normalColor
hoverColor: directColor8
borderWidth: 1
borderColor: hovered ? directColor7 : directColor8
opacity: enabled ? 1 : 0.4
focusPolicy: Qt.NoFocus
**INCLUDE** (already present in CSS)

#### C2b. Icon
Line 11–12
icon.name: hovered ? "arrow-up" : "arrow-down"
icon.color: baseColor1
**INCLUDE** (already present — static arrow-down SVG, hover state swap excluded for static mockup)

---

## Summary: INCLUDE items that are MISSING or BROKEN

| # | Section | Component | Issue | Severity |
|---|---------|-----------|-------|----------|
| 1 | A3a | Footer left: slippage | CSS has flat row layout. QML has ColumnLayout: label on top, RowLayout (value + edit) below, spacing: 0 | Medium |
| 2 | A3b | Footer right: fees + button | CSS has flat row. QML has RowLayout spacing bigPadding(24): ColumnLayout (label above, value below) + StatusButton | Medium |
| 3 | C1-bg | SwapInputPanel background Shape | CSS renders plain rectangle. QML has semicircular cutout path at top center (Pay) / bottom center (Receive) sized around the 44px exchange button. Missing visual detail. | Low |
