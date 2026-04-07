# Component Inventory — Discover Communities (Full Screen)

Full screen inventory per BUILDER.md protocol. Covers every component
on the Discover Communities screen: center panel only (no left/right panels).

---

## A. CENTER PANEL (CommunitiesPortalLayout.qml)

File: /home/alisher/status-desktop/ui/app/AppLayouts/Communities/CommunitiesPortalLayout.qml
Parent: StatusSectionLayout, centerPanel is an Item
Margins: topMargin=smallPadding(10), leftMargin=xlPadding*2(64), rightMargin=xlPadding(32)
Inner: ColumnLayout, spacing: 18

### A1. StatusBaseText (Title)
Line 107–116
Text: "Discover Communities", font.weight: Bold, font.pixelSize: 28, color: directColor1
elide: ElideRight, wrapMode: Wrap, maximumLineCount: 2
**INCLUDE** (already present)

### A2. ColumnLayout (Controls wrapper)
Line 118–154, spacing: Theme.padding(16)

#### A2a. RowLayout (Search + buttons row)
Line 121–145

##### A2a-1. SearchBox
Line 122–130
Layout.maximumWidth: 327, Layout.preferredHeight: 38, topPadding: 0, bottomPadding: 0
**INCLUDE** (already present)

##### A2a-2. Item (filler)
Line 133–135, Layout.fillWidth: true
**INCLUDE** (already present as `flex:1` spacer)

##### A2a-3. LayoutItemProxy → buttonsRow
Line 137–144, visible: !d.compactMode
Proxies the buttonsRow (see A6) into this position when not compact
**INCLUDE** (buttons already rendered here in non-compact layout)

#### A2b. LayoutItemProxy (compact buttonsRow)
Line 147–153, visible: d.compactMode
Same buttonsRow but positioned below search in compact mode
**EXCLUDE** (compact/responsive layout not in static mockup scope — mockup is full width)

### A3. TagsRow (communityTags)
Line 156–161
File: TagsRow is a StatusQ component
Tags from communitiesStore.communityTags, Layout.fillWidth: true
Each tag: StatusCommunityTag — height 32, radius 16, spacing 10, inactive: transparent bg + 1px border baseColor2, active: bg primaryColor2, text: primaryColor1, DemiBold, primaryTextFontSize
**INCLUDE** (already present)

### A4. CommunitiesGridView (main scrollable content)
Line 163–182
File: /home/alisher/status-desktop/ui/app/AppLayouts/Communities/views/CommunitiesGridView.qml
Layout.leftMargin/rightMargin: preventShadowClipMargin(Theme.padding=16)
contentWidth: availableWidth, padding: 0, bottomPadding: layoutBottomMargin(xlPadding*2=64)

#### A4-inner. ColumnLayout (contentColumn)
File: CommunitiesGridView.qml line 158–255

##### A4a. StatusBaseText (Featured label)
Line 164–173
visible: !searchLayout && featuredRepeater.count
Layout.topMargin: scrollViewTopMargin(20)
text: "Featured", font.weight: Bold, font.pixelSize: 17 (subtitlePixelSize), color: directColor1
**INCLUDE** (already present)

##### A4b. Flow (Featured grid)
Line 175–198
delegateCountPerRow: Math.trunc(parent.width / (delegateWidth + spacing))
Layout.preferredWidth: (delegateCountPerRow * delegateWidth) + (spacing * (delegateCountPerRow - 1))
Layout.alignment: AlignHCenter
spacing: Theme.padding(16)
visible: featuredRepeater.count

###### A4b-1. Repeater (featuredRepeater)
Line 187–191
model: searchLayout ? root.model : featuredModel (filtered by featured=true)
delegate: communityCardDelegate → StatusCommunityCard (see C1)
**INCLUDE** (already present)

###### A4b-transitions. move/add Transitions
Line 192–197
NumberAnimation on x,y
**EXCLUDE** (animation, not applicable to static mockup)

##### A4c. StatusBaseText (All label)
Line 200–208
visible: !searchLayout && popularCommunitiesCount
Layout.topMargin: 20
text: "All", font.weight: Bold, font.pixelSize: 17, color: directColor1
**INCLUDE** (already present)

##### A4d. Flow (All grid)
Line 210–245, id: gridLayout
Same layout properties as featured grid
spacing: Theme.padding(16)
visible: !searchLayout

###### A4d-1. Repeater (firstPopularElementsRepeater)
Line 221–225
model: sfpmFirstPopularElementsModel (non-featured, index < promotionalCardPosition)
promotionalCardPosition: Math.max(gridLayout.delegateCountPerRow - 1, 1)
For 3-col grid: position 2 (0-indexed), so first 2 cards before promo
delegate: communityCardDelegate → StatusCommunityCard (see C1)
**INCLUDE** (already present)

###### A4d-2. PromotionalCommunityCard
Line 227–232
File: /home/alisher/status-desktop/ui/app/AppLayouts/Communities/controls/PromotionalCommunityCard.qml
width: delegateWidth(335)
Signals: onLearnMore, onInitiateVote → open external links
See C2 for sub-components
**INCLUDE** (already present)

###### A4d-3. Repeater (restOfPopularElementsRepeater)
Line 234–238
model: sfpmRestOfPopularElementsModel (non-featured, index >= promotionalCardPosition)
delegate: communityCardDelegate → StatusCommunityCard (see C1)
**INCLUDE** (already present)

###### A4d-transitions. move/add Transitions
Line 239–244
**EXCLUDE** (animation)

##### A4e. StatusBaseText (empty state)
Line 247–254
visible: root.model.ModelCount.count === 0
Layout.alignment: AlignHCenter, Layout.topMargin: xlPadding*2(64)
text: "No communities found", color: baseColor1
**EXCLUDE** (empty state — mockup shows populated data)

### A5. Component: chooseCommunityCreationTypePopupComponent
Line 218–256
StatusDialog popup triggered by Create New Community button (when discord import option shown)
Contains two BannerPanel items for "Create new" and "Import existing"
**EXCLUDE** (popup dialog, not rendered in static mockup)

### A6. RowLayout: buttonsRow
Line 186–216
spacing: Theme.bigPadding(24), Layout.preferredHeight: 38

#### A6a. StatusButton (Join Community)
Line 192–199
text: "Join Community", height: 38
**INCLUDE** (already present)

#### A6b. StatusButton (Create New Community)
Line 202–215
text: "Create New Community", type: Primary, height: 38
visible: root.createCommunityEnabled (default true)
**INCLUDE** (already present)

---

## C. DELEGATE COMPONENTS

### C1. StatusCommunityCard (Big size)
File: /home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Components/StatusCommunityCard.qml
implicitWidth: 335, implicitHeight: 230
radius: bannerRadius(20), border: 1px directColor8, color: transparent

#### C1-shadow. DropShadow (layer.effect)
Line 213–222
horizontalOffset: 0, verticalOffset: 2
radius: hovered ? bannerRadiusHovered(30) : bannerRadius(20) ← this is shadow blur radius
samples: 25, spread: 0
color: hovered ? backdropColor : dropShadow
**INCLUDE** — current CSS only has hover shadow, missing default shadow

#### C1a. Item (banner)
Line 225–263
anchors.top: parent.top, width: parent.width, height: bannerHeight(64)

##### C1a-1. Rectangle (mask)
Line 232–241, radius: bannerRadius(20), color: communityColor (when loaded), visible when no image
**INCLUDE** (already present — rendered as .community-card__banner with bg color)

##### C1a-2. Image (banner image)
Line 244–253
source: root.banner, fillMode: PreserveAspectCrop
**EXCLUDE** (mockup uses color banners, not images)

##### C1a-3. OpacityMask
Line 256–262, visible: root.loaded
**EXCLUDE** (image masking, no images in mockup)

#### C1b. Rectangle (community logo circle)
Line 266–285
z: content.z + 1
anchors.top: parent.top, topMargin: 16 (Big), leftMargin: margins(12)
width: asset.width + 4 = 44, height: 44, radius: 22
color: cardColor (when loaded)

##### C1b-1. StatusRoundedImage (logo image)
Line 277–284
width: parent.width - 4 = 40, height: 40
image.source: root.asset.source
**INCLUDE** (already present as .community-card__avatar with inner circle)

#### C1c. Rectangle (content card)
Line 288–434
z: banner.z + 1, visible: root.loaded
anchors.topMargin: 40 (Big), width: parent.width, height: cardHeigth(190)
color: cardColor, radius: cardRadius(16)

##### C1c-1. Loader (rightHeaderLoader)
Line 300–306
anchors.top: 8, anchors.right: 8
sourceComponent: rigthHeaderComponent (token permissions row)
**EXCLUDE** (only active when isTokenGatedCommunity, not in basic mockup)

##### C1c-2. ColumnLayout (community info)
Line 309–335
anchors.topMargin: 32 (Big), leftMargin: margins(12), rightMargin: margins(12)
spacing: 6 (Big)

###### C1c-2a. StatusBaseText (name)
Line 317–324
font.weight: Bold (Big), font.pixelSize: titleFontSize(19), color: directColor1, elide
**INCLUDE** (already present)

###### C1c-2b. StatusBaseText (description)
Line 325–334
font.pixelSize: primaryTextFontSize(15), lineHeight: 1.2, color: directColor1
maximumLineCount: 2 (Big), wrapMode: WordWrap, elide
**INCLUDE** (already present)

##### C1c-3. ColumnLayout (bottom stats)
Line 336–433
anchors.bottom: parent.bottom, bottomMargin: 8, leftMargin: margins(12), rightMargin: margins(12)
spacing: 18 (Big)

###### C1c-3a. Row (member/active stats)
Line 344–383
spacing: 20, visible: root.memberCountVisible

Members Row (line 348–364):
- StatusIcon: icon "tiny/members", width: 16, height: 16 — **INCLUDE** (already present)
- StatusBaseText: numberFormat(members), font.pixelSize: primaryTextFontSize(15), color: directColor1 — **INCLUDE** (already present)

Active Users Row (line 366–382):
- StatusIcon: icon "tiny/flash", width: 14, height: 14 — **INCLUDE** (already present with meta-icon--small class)
- StatusBaseText: numberFormat(activeUsers), font.pixelSize: primaryTextFontSize(15), color: directColor1 — **INCLUDE** (already present)

###### C1c-3b. Loader (bottomRowLoader)
Line 386–399
Layout.preferredHeight: 24, visible: active
active: root.categories.count > 0 || !!root.bottomRowComponent
sourceComponent: tagsListComponent (categories tags row) or bottomRowComponent

####### C1c-3b-tags. Component: tagsListComponent
Line 401–431
StatusRollArea containing Row of StatusListItemTag delegates
Each tag: height 24, bgColor transparent, bgRadius 20, bgBorderColor directColor8, spacing 0
emoji 24x24, title font.pixelSize tertiaryTextFontSize, color directColor1
**EXCLUDE** (per-card category tags — mockup cards don't have category data populated)

#### C1d. Rectangle (loading card)
Line 437–517
visible: !root.loaded
Loading skeleton with placeholder rectangles
**EXCLUDE** (loading state, not in static mockup)

#### C1e. HoverHandler + TapHandlers
Line 519–534
cursorShape: PointingHandCursor, click/rightclick/longpress handlers
**INCLUDE** (cursor pointer already in CSS)

---

### C2. PromotionalCommunityCard
File: /home/alisher/status-desktop/ui/app/AppLayouts/Communities/controls/PromotionalCommunityCard.qml
implicitWidth: 335, implicitHeight: 230
Parent: Item containing ShapeRectangle

#### C2a. ShapeRectangle (background)
Line 37–38, anchors.fill: parent
**INCLUDE** (already present as .promo-card with border)

#### C2b. ColumnLayout (content)
Line 40–103
width: parent.width, anchors.centerIn: parent, spacing: defaultSpacing(8)

##### C2b-1. StatusIcon (communities icon)
Line 45–49
Layout.topMargin: 28, Layout.alignment: AlignHCenter
icon: "communities"
**INCLUDE** (already present)

##### C2b-2. StatusBaseText (title)
Line 52–58
text: "Want to see your community here?", font.weight: Bold
Layout.maximumWidth: parent.width - 4 * defaultMargin(12) = width - 48
**INCLUDE** (already present)

##### C2b-3. StatusBaseText (description)
Line 60–68
text: "Help more people discover your community...", font.pixelSize: additionalTextSize(13)
lineHeight: 1.2, horizontalAlignment: AlignHCenter, wrapMode: WordWrap
Layout.maximumWidth: parent.width - 4 * 12
**INCLUDE** (already present)

##### C2b-4. Separator
Line 71–77
Layout.fillWidth: true, Layout.topMargin: 22, Layout.leftMargin: 12, Layout.rightMargin: 12, Layout.bottomMargin: 4
**INCLUDE** (already present)

##### C2b-5. RowLayout (buttons)
Line 79–101
Layout.fillWidth: true, Layout.leftMargin: 12, Layout.rightMargin: 12, spacing: defaultSpacing(8)

###### C2b-5a. StatusButton (Learn more)
Line 86–91
text: "Learn more", icon.name: "external-link", size: Small(30px height)
**INCLUDE** (already present)

###### C2b-5b. StatusButton (Initiate the vote)
Line 94–99
text: "Initiate the vote", icon.name: "external-link", size: Small(30px height)
**INCLUDE** (already present)

---

## Summary: INCLUDE items that are MISSING or BROKEN

| # | Section | Component | Issue | Severity |
|---|---------|-----------|-------|----------|
| 1 | A4 | CommunitiesGridView bottomPadding | CSS bottom padding is 32px, QML is xlPadding*2=64px | Medium |
| 2 | C1-shadow | DropShadow (default + hover) | CSS has no default shadow; hover uses wrong color token (drop-shadow-3 vs backdropColor) and wrong default blur (missing 20px default) | Medium |
