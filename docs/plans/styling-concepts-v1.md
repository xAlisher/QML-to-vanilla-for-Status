# Plan: Status Redesign — Styling Concepts for Stakeholder Sign-off

## Context

The brand strategy PDF defines a new visual direction for Status: warm minimalism, monochrome/low-chroma palette, high-contrast typographic hierarchy, humane dark mode. Before touching features, we need stakeholder sign-off on styling alone. The goal is to show 4 existing screens restyled under the new direction — same content and layout, different visual treatment.

**Why HTML/CSS/JS instead of Pencil/Penpot:**
- AI reads/writes all code directly — no encrypted formats or tool-mediated opacity
- CSS custom properties = design tokens — swap entire palette by toggling one attribute
- Vite hot-reload gives instant feedback in Chromium
- Git-trackable diffs for every iteration
- User sees results in browser, gives feedback, AI edits tokens/CSS, browser refreshes

---

## The 4 Screens

1. **Channel in community** — three-panel: channel list (left) + messages (center) + optional members (right)
2. **Discover communities directory** — title + search + tag filters + community cards grid
3. **Swap modal** — dialog with from/to token panels, exchange toggle, fees
4. **Wallet account** — account list (left) + header with balance + asset list with tabs (center)

---

## Execution

### Step 1: Scaffold Vite project

In `/home/alisher/status-redesign/`:
- `pnpm create vite . --template vanilla`
- Add Google Fonts (Inter, Roboto Mono) via `<link>`
- File structure:

```
src/
  tokens/
    current-light.css      ← extracted from tokens.json
    current-dark.css
    concept-light.css      ← new brand direction
    concept-dark.css
  shell/
    shell.html + shell.css ← app shell (nav sidebar + panels)
  screens/
    community-channel.html + .css
    discover-communities.html + .css
    swap-modal.html + .css
    wallet-account.html + .css
  main.js                 ← theme switcher + screen router
index.html                ← presentation wrapper
```

### Step 2: Extract current tokens → CSS custom properties

Source: `/home/alisher/designer/status-app/tokens.json`

Generate `current-light.css` and `current-dark.css` with all semantic colors, typography sizes, spacing scale as CSS custom properties scoped via `[data-tokens="current"][data-mode="light"]`.

### Step 3: Build app shell

Translate the StatusSectionLayout + PrimaryNavSidebar pattern to CSS flexbox:
- 52px nav sidebar (icon bar)
- 280px left panel
- Flex-1 center panel
- Optional right panel

QML references:
- `/home/alisher/status-desktop/ui/StatusQ/src/StatusQ/Layout/StatusSectionLayoutLandscape.qml`
- `/home/alisher/status-desktop/ui/app/mainui/panels/PrimaryNavSidebar.qml`

### Step 4: Build 4 screens (static HTML/CSS with current tokens)

Each screen is a standalone HTML partial loaded into the shell. Content is hardcoded placeholder data — realistic but fake.

**4a. Community channel**
- Left: community header (banner + name + members) + categorized channel list
- Center: message bubbles (sent/received) + input bar
- QML: `CommunityColumnView.qml`, `ChatColumnView.qml`, `ChatContentView.qml`

**4b. Discover communities**
- Full center panel: "Discover Communities" heading + search + tags + grid of community cards
- QML: `CommunitiesPortalLayout.qml`, `CommunitiesGridView.qml`, `PromotionalCommunityCard.qml`

**4c. Swap modal**
- Overlay dialog: from-panel + exchange button + to-panel + fees + confirm
- QML: `SwapModal.qml`, `SwapInputPanel.qml`, `SwapExchangeButton.qml`

**4d. Wallet account**
- Left: account list with balances
- Center: account header (emoji + name + balance) + tab bar (Assets/Collectibles/Activity) + token rows
- QML: `WalletLayout.qml`, `LeftTabView.qml`, `RightTabView.qml`, `WalletAccountHeader.qml`

### Step 5: Create concept token set

Based on brand strategy, create `concept-light.css` and `concept-dark.css`:

**Light concept:**
- Primary: desaturated warm blue (replacing #4360DF)
- Backgrounds: warm off-white (#FAFAF8)
- Text: high contrast black on warm neutrals
- Borders/separators: subtler, warmer greys
- Nav sidebar: near-white (not blue-tinted #ECEFFB)
- Monospace accents where current design uses body font for labels

**Dark concept ("humane dark mode"):**
- Background: warm dark (#1A1A18 instead of cold #2C2C2C)
- Surfaces: warm layers (#262624)
- Text: off-white (#F0EEEB) instead of pure white
- Primary accent: desaturated warm blue
- Subtle surface hierarchy

### Step 6: Presentation layer

- **Theme toggle bar** (fixed top): Current / Concept A × Light / Dark
- **Screen tabs**: Community Channel | Discover | Swap | Wallet
- **Side-by-side mode**: iframe-based split showing current vs concept simultaneously
- **Labels**: "Current Design" / "Concept A — Warm Minimalism"
- **Framing text**: "Styling exploration only — features and content unchanged"

---

## Key Source Files

| Purpose | Path |
|---------|------|
| Design tokens | `/home/alisher/designer/status-app/tokens.json` |
| Brand strategy | `/home/alisher/status-redesign/Brand Strategy_ ᛋ Status .pdf` |
| App shell layout | `status-desktop/ui/StatusQ/src/StatusQ/Layout/StatusSectionLayoutLandscape.qml` |
| Nav sidebar | `status-desktop/ui/app/mainui/panels/PrimaryNavSidebar.qml` |
| Community channel | `status-desktop/ui/app/AppLayouts/Communities/views/CommunityColumnView.qml` |
| Chat messages | `status-desktop/ui/app/AppLayouts/Chat/views/ChatColumnView.qml` |
| Discover communities | `status-desktop/ui/app/AppLayouts/Communities/CommunitiesPortalLayout.qml` |
| Community cards | `status-desktop/ui/app/AppLayouts/Communities/controls/PromotionalCommunityCard.qml` |
| Swap modal | `status-desktop/ui/app/AppLayouts/Wallet/popups/swap/SwapModal.qml` |
| Swap input | `status-desktop/ui/app/AppLayouts/Wallet/panels/SwapInputPanel.qml` |
| Wallet layout | `status-desktop/ui/app/AppLayouts/Wallet/WalletLayout.qml` |
| Wallet left panel | `status-desktop/ui/app/AppLayouts/Wallet/views/LeftTabView.qml` |
| Wallet right panel | `status-desktop/ui/app/AppLayouts/Wallet/views/RightTabView.qml` |
| Wallet header | `status-desktop/ui/app/AppLayouts/Wallet/panels/WalletAccountHeader.qml` |

---

## Verification

1. `pnpm dev` → opens in Chromium at localhost:5173
2. All 4 screens render with current tokens → should resemble existing app
3. Toggle to concept → same layouts, visibly different palette/type/spacing
4. Toggle light/dark for each → both modes work
5. Side-by-side comparison view works
6. No broken layouts, missing tokens, or placeholder-only screens

---

## Task Breakdown

See TASKS.md § Styling Concepts for the ordered task list.
