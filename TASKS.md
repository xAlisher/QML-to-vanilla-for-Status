# Status Redesign — Tasks

## Styling Concepts (stakeholder sign-off)

Plan: `docs/plans/styling-concepts-v1.md`

### 1. Scaffold
- [x] 1a. Vite project init (`pnpm create vite . --template vanilla`)
- [x] 1b. File structure: `src/tokens/`, `src/shell/`, `src/screens/`, `src/main.js`
- [x] 1c. Add Google Fonts (Inter, Roboto Mono) to `index.html`

### 2. Current tokens
- [x] 2a. Extract light semantic tokens from `tokens.json` → `current-light.css`
- [x] 2b. Extract dark semantic tokens from `tokens.json` → `current-dark.css`

### 3. App shell
- [x] 3a. Read QML layout sources (StatusSectionLayout, PrimaryNavSidebar)
- [x] 3b. Build shell HTML + CSS (nav sidebar + panel layout)

### 4. Screens (current tokens)
- [x] 4a. Community channel — left panel (community header + channel list)
- [x] 4b. Community channel — center panel (messages + input bar)
- [x] 4c. Discover communities — search + tags + card grid
- [x] 4d. Swap modal — from/to panels + exchange button + fees
- [x] 4e. Wallet account — left panel (account list)
- [x] 4f. Wallet account — center panel (header + tabs + asset rows)

### 5. Concept tokens
- [x] 5a. Read brand strategy PDF, extract color/type decisions
- [x] 5b. Create `concept-light.css` (warm minimalism palette)
- [x] 5c. Create `concept-dark.css` (humane dark mode)

### 6. Presentation layer
- [x] 6a. Theme toggle bar (Current/Concept × Light/Dark)
- [x] 6b. Screen tabs (4 screens)
- [x] 6c. Side-by-side comparison mode (iframe split)
- [x] 6d. Labels and framing text

### 7. Pixel-perfect pass (from QML source)
- [x] 7a. Sidebar: correct container structure, button shapes, colors, items, icons
- [x] 7b. Community channel: rebuilt 1:1 from CommunityColumnView + ChatColumnView QML
- [x] 7c. Discover communities: rebuilt from CommunitiesPortalLayout + StatusCommunityCard QML
- [x] 7d. Swap modal: rebuilt from SwapModal + SwapInputPanel + SwapExchangeButton QML
- [x] 7e. Wallet account: rebuilt from LeftTabView + RightTabView + WalletAccountHeader QML
- [x] 7f. Extract skills from completed work

### 7.5. Detail pass (from QML re-reading)
- [x] 7.5a. Discover Communities: bottom padding 64px, card shadow default+hover, avatar overflow/z-index fix
- [x] 7.5b. Swap Modal: footer restructure, extracted icons, account selector, network filter, panel cutouts

### 8. Visual review
- [~] 8a. All 4 screens render correctly with current tokens — NEEDS VISUAL REVIEW
- [~] 8b. All 4 screens render correctly with concept tokens — NEEDS VISUAL REVIEW
- [~] 8c. Light/dark toggle works for both token sets — NEEDS VISUAL REVIEW
- [~] 8d. Side-by-side view works — NEEDS VISUAL REVIEW

---

## Website

### Homepage
- [ ] Hero section: "Pay your people, keep it private." + subhead + CTAs (Get the app / Try a $1 private payment / Learn how Logos works)
- [ ] Core narrative section: "Why This Matters Now"
- [ ] Simple explainer: Logos → Status flow
- [ ] Lifestyle-forward hero options (Live on your own terms / Keep your life small and your work big)

### Site Pages
- [ ] Home: "Live quieter. Build louder."
- [ ] L2: Build in public (fees, AA, compatibility)
- [ ] Private: Move in private (Logos, privacy properties, OPSEC)
- [ ] Pay: P2P with @handles (how it works, fees, Fast vs Private)
- [ ] Learn: Tutorials, explainers, Journal
- [ ] Community: Rooms to join, office hours, contributor paths
- [ ] Download: Desktop, Mobile, Keycard
- [ ] Governance: SNT, proposals, transparency
- [ ] FAQ page

## Copy Kit
- [ ] Homepage hero copy (headline, subhead, CTAs)
- [ ] L2 section copy
- [ ] Logos section copy
- [ ] P2P section copy
- [ ] Bridge card (wallet) copy
- [ ] Composer hint (chat/payment) copy
- [ ] Community setup copy

## Design System
- [ ] Color palette: warm neutrals + restrained highlight, dark/light themes
- [ ] Typography: modern grotesk + monospace accents, type scale
- [ ] Iconography: simple, line-driven, no skeuomorphic cash imagery
- [ ] Motion guidelines: purposeful, no decorative confetti
- [ ] Component library: modular cards, lists, payments, splits
- [ ] Two-lane visual cues: Fast (L2) vs Private (Logos) differentiation via copy/micro-tokens

## Rebrand Guidelines
- [ ] Voice guide: calm, clear, human, confident without edge
- [ ] Typography spec
- [ ] Color spec
- [ ] Iconography spec
- [ ] Motif: split path merging at a key ("studio vs street")
- [ ] App microcopy guide

## Onboarding Journey
- [ ] First 5 minutes flow: create key → claim @handle → default to L2 → $1 test payment
- [ ] First win flow: join L2 room → claim badge/NFT → backup/recovery tutorial
- [ ] Privacy introduction prompt: "Prefer a smaller footprint? Try Private Mode."
- [ ] First private action: guided "Move to Private" bridge flow
- [ ] Habit formation: per-contact default route, subtle "Move to Private?" prompts

## Education Content
- [ ] 60-second animation: when to use which lane
- [ ] Primer: "Privacy without permission" — beginner's guide to Logos
- [ ] Guide: "Your first private payment" (5 minutes)
- [ ] Article: "What an L2 is (and why fees got small)"
- [ ] Checklist: OPSEC basics (backups, devices, travel mode)

## Marketing
### Campaigns
- [ ] "Start open. Finish private." — sponsor first 3 L2 txs + first bridge
- [ ] "Friends first. Feeds never." — bill-split week, social demos
- [ ] "Public hustle, private backbone." — partner grants/bounty payouts via Logos

### Channels
- [ ] Product-led growth: in-app prompts, shareable payment links, event QR
- [ ] Community ambassadors: co-ops, local tech meetups, privacy orgs
- [ ] Integrations: wallets/dapps for L2, payroll/grants tools via Logos

## Roadmap (4 Quarters)

### Q1: P2P Foundation & L2 Polish
- [ ] @handle registry and resolution
- [ ] P2P MVP: Pay, Request, Notes, QR/NFC, basic Split
- [ ] L2 AA with sponsored first txs, fee transparency
- [ ] Bridge UX v1: "Move to Private" with clear disclosures
- [ ] Education: 60-sec lanes explainer, "first private $1" tutorial

### Q2: Private Mode Depth & Safety
- [ ] Logos transfers: view keys, memos, fresh receive addresses, randomized delays
- [ ] Split v2: itemized splits, scanned receipts, settle per lane
- [ ] Contacts/circles with per-circle privacy defaults
- [ ] Mutual contact verification, first-payment locks
- [ ] Campaign: "Friends first. Feeds never."

### Q3: Communities & Creator Flows
- [ ] Community treasuries, roles/permissions, stipend templates
- [ ] Token-gated rooms with private credentials, membership dues on L2
- [ ] Creator tooling: public drops on L2, private supporter rooms on Logos
- [ ] Bridge UX v2: batching/scheduling, privacy meter per transfer
- [ ] Dev SDK for route-by-intent

### Q4: Scale, Interoperability & Trust
- [ ] Performance: P2P and chat optimizations, mobile cold-start, sync improvements
- [ ] Off-ramp partners, regional coverage
- [ ] Formal privacy docs: threat models, audits, metadata surfaces guide
- [ ] Transparency: quarterly metrics dashboard
- [ ] Internationalization: top 5 languages, regional compliance
