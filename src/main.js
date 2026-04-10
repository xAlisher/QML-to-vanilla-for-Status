// Token imports
import './tokens/current-light.css'
import './tokens/current-dark.css'
import './tokens/concept-light.css'
import './tokens/concept-dark.css'
import './tokens/nord-dark.css'
import './tokens/dracula-dark.css'
import './tokens/monokai-dark.css'
import './tokens/logos-light.css'
import './tokens/solarized-dark.css'
import './tokens/hacker-dark.css'
import './tokens/basecamp-dark.css'
import './tokens/neo-dark.css'
import './tokens/neo-light.css'
import './tokens/v1-light.css'
import './tokens/v1-dark.css'
import './tokens/v2mob-light.css'
import './tokens/v2mob-dark.css'
import './tokens/quiet-light.css'
import './tokens/quiet-dark.css'
import './tokens/current-light-r1.css'
import './tokens/current-dark-r1.css'
import './tokens/quiet-dark-r1.css'
import './tokens/v1-dark-r1.css'
import './tokens/hacker-dark-r1.css'
import './tokens/solarized-dark-r1.css'
import './tokens/dracula-dark-r1.css'
import './tokens/logos-light-r1.css'
import './tokens/monokai-dark-r1.css'
// Iteration 2 themes
import './tokens/i2-obsidian-vault-dark.css'
import './tokens/i2-obsidian-vault-light.css'
import './tokens/i2-cipher-night-dark.css'
import './tokens/i2-cipher-night-light.css'
import './tokens/i2-forest-protocol-dark.css'
import './tokens/i2-forest-protocol-light.css'
import './tokens/i2-mercury-steel-dark.css'
import './tokens/i2-mercury-steel-light.css'
import './tokens/i2-amber-sentinel-dark.css'
import './tokens/i2-amber-sentinel-light.css'
import './tokens/i2-oxide-copper-dark.css'
import './tokens/i2-oxide-copper-light.css'
import './tokens/i2-ghost-protocol-dark.css'
import './tokens/i2-ghost-protocol-light.css'
import './tokens/i2-crimson-vault-dark.css'
import './tokens/i2-crimson-vault-light.css'
import './tokens/i2-glacier-seal-dark.css'
import './tokens/i2-glacier-seal-light.css'
import './tokens/i2-dusk-protocol-dark.css'
import './tokens/i2-dusk-protocol-light.css'
import './tokens/i2-cb-clarity-blue-dark.css'
import './tokens/i2-cb-clarity-blue-light.css'
import './tokens/i2-cb-gold-slate-dark.css'
import './tokens/i2-cb-gold-slate-light.css'
// Iteration 3 themes
import './tokens/i3-vault-dark.css'
import './tokens/i3-vault-light.css'
import './tokens/i3-obsidian3-dark.css'
import './tokens/i3-obsidian3-light.css'
import './tokens/i3-sovereign-dark.css'
import './tokens/i3-sovereign-light.css'
import './tokens/i3-stealth-dark.css'
import './tokens/i3-stealth-light.css'
import './tokens/i3-ghost3-dark.css'
import './tokens/i3-ghost3-light.css'
import './tokens/i3-cipher3-dark.css'
import './tokens/i3-cipher3-light.css'
import './tokens/i3-dusk3-dark.css'
import './tokens/i3-dusk3-light.css'
import './tokens/i3-nordic-dark.css'
import './tokens/i3-nordic-light.css'
import './tokens/i3-basalt-dark.css'
import './tokens/i3-basalt-light.css'
import './tokens/i3-tunnel-dark.css'
import './tokens/i3-tunnel-light.css'
import './tokens/i3-visible-blue-orange-dark.css'
import './tokens/i3-visible-blue-orange-light.css'
import './tokens/i3-visible-mono-teal-dark.css'
import './tokens/i3-visible-mono-teal-light.css'
import './tokens/fonts.css'

// Shell styles
import './shell/shell.css'

import './tokens/francesca-logos-dark.css'
import './tokens/francesca-wcag-light.css'
import './tokens/francesca-wcag-dark.css'

// Screen styles
import './screens/community-channel.css'
import './screens/discover-communities.css'
import './screens/swap-modal.css'
import './screens/wallet-account.css'

// Screen HTML generators
import { renderCommunityChannel } from './screens/community-channel.js'
import { renderDiscoverCommunities } from './screens/discover-communities.js'
import { renderSwapModal } from './screens/swap-modal.js'
import { renderWalletAccount } from './screens/wallet-account.js'

// --- Theme registry ---
const themes = {
  'current-light':  { label: 'Current Light (70)',   tokens: 'current',   mode: 'light', iteration: 0, reason: 'Status Desktop default. Blue-accented with high contrast — established brand identity, clear readability.' },
  'current-dark':   { label: 'Current Dark (67)',    tokens: 'current',   mode: 'dark',  iteration: 0, reason: 'Status Desktop dark mode. Neutral grays with blue accents — reduces eye strain for extended use.' },
  'concept-light':  { label: 'Ned: Concept A Light (65)', tokens: 'concept',   mode: 'light', iteration: 0, reason: 'Warm minimalism. Desaturated neutrals convey trust and calm — privacy feels approachable, not clinical.' },
  'concept-dark':   { label: 'Ned: Concept A Dark (69)',  tokens: 'concept',   mode: 'dark',  iteration: 0, reason: 'Humane dark mode. Warm darks instead of cold grays — comfortable for hours, reduces side-viewer visibility.' },
  'nord-dark':      { label: 'Ned: Nord Dark (52)',       tokens: 'nord',      mode: 'dark',  iteration: 0, reason: 'Arctic-inspired muted palette. Low-chroma blues on dark surface — minimal glare, high legibility for privacy-conscious use. Reference: https://bananalarry.net/' },
  'dracula-dark':   { label: 'Ned: Dracula Dark (55)',    tokens: 'dracula',   mode: 'dark',  iteration: 0, reason: 'High-contrast dark with purple accents. Rich darks limit viewing angles — strong readability without bright glare. Reference: https://bananalarry.net/' },
  'monokai-dark':   { label: 'Ned: Monokai Dark (53)',    tokens: 'monokai',   mode: 'dark',  iteration: 0, reason: 'Developer-oriented warm dark. Amber/green accents on charcoal — familiar to technical users, easy on eyes. Reference: https://bananalarry.net/' },
  'logos-light':    { label: 'Logos Light (75)',      tokens: 'logos',     mode: 'light', iteration: 0, reason: 'Logos network website identity. Purple-accented privacy palette — visually ties Status to the underlying privacy infrastructure.' },
  'solarized-dark': { label: 'Ned: Solarized Dark (46)',  tokens: 'solarized', mode: 'dark',  iteration: 0, reason: 'Scientifically optimized contrast. Fewest colors (46) — proven comfortable for extended reading, accessible for color blindness. Reference: https://bananalarry.net/' },
  'hacker-dark':    { label: 'Hacker Dark (47)',     tokens: 'hacker',    mode: 'dark',  iteration: 0, reason: 'Hardcore monochrome green-on-black. Maximum side-viewer protection — minimal palette reinforces digital sovereignty, old-school terminal aesthetic.' },
  'basecamp-dark':  { label: 'Basecamp Dark (60)',   tokens: 'basecamp',  mode: 'dark',  iteration: 0, reason: 'Productivity-focused neutral dark. Restrained palette with warm grays — professional trust without visual noise. Reference: https://github.com/logos-co/logos-design-system' },
  'neo-dark':       { label: 'Neo Dark (56)',        tokens: 'neo',       mode: 'dark',  iteration: 0, reason: 'Deep charcoal with cyan accents. High contrast ratio — strong privacy feel with modern, accessible readability. Reference: Francesca\'s exploration https://www.figma.com/design/gZss5EzKuqdcSXOlqrQZoZ/Branding----Status?node-id=1193-21&t=EZqZrIfzcLpGreCU-0' },
  'neo-light':      { label: 'Neo Light (57)',       tokens: 'neo',       mode: 'light', iteration: 0, reason: 'Clean white with cyan accents. Bright but not glaring — accessible, simple, instills confidence in a privacy tool. Reference: Francesca\'s exploration https://www.figma.com/design/gZss5EzKuqdcSXOlqrQZoZ/Branding----Status?node-id=1193-21&t=EZqZrIfzcLpGreCU-0' },
  'v1-light':       { label: 'Legacy v1 Mobile Light (73)', tokens: 'v1',     mode: 'light', iteration: 1, reason: 'Status v1 mobile app palette. Pure white bg, pure gray neutrals (#939BA1), bright green success (#44D058), pink-red danger (#FF2D55). The original Status mobile identity. Source: quo/design_system/colors.cljs @ v1.20.6' },
  'v1-dark':        { label: 'Legacy v1 Mobile Dark (70)',  tokens: 'v1',  mode: 'dark',  iteration: 1, reason: 'Status v1 mobile dark mode. Pure dark gray (#141414), lighter blue accent (#6177E5), warm red danger (#FC5F5F). Clean, no navy tint. Source: quo/design_system/colors.cljs @ v1.20.6' },
  'v2mob-light':    { label: 'Legacy v2 Mobile Light (68)', tokens: 'v2mob', mode: 'light', iteration: 1, reason: 'Status v2 mobile app palette (quo2). Navy-tinted neutrals (#647084), teal success (#23ADA0), warm red danger (#E95460). The redesigned mobile identity. Source: quo/foundations/colors.cljs' },
  'v2mob-dark':     { label: 'Legacy v2 Mobile Dark (63)',  tokens: 'v2mob', mode: 'dark',  iteration: 1, reason: 'Status v2 mobile dark mode. Deep navy (#131D2F), blue accent (#88B0FF), teal success. More character than v1\'s pure grays. Source: quo/foundations/colors.cljs' },
  'quiet-light':    { label: 'Quiet Authority Light (65)', tokens: 'quiet', mode: 'light', iteration: 1, reason: 'Near-monochrome editorial. Single indigo accent on cool slate — reads like documentation, communicates calm authority and trust. Reference: Ned\'s proposal doc' },
  'quiet-dark':     { label: 'Quiet Authority Dark (54)',  tokens: 'quiet', mode: 'dark',  iteration: 1, reason: 'Deep charcoal editorial. Minimal indigo accent — maximum restraint, zero visual noise, strong side-viewer protection. Reference: Ned\'s proposal doc' },
  'current-light-r1': { label: 'Fixed: Current Light Compressed (20p)', tokens: 'current-r1', mode: 'light', iteration: 1, reason: 'Off-white background (#FAFBFC) reduces glare vs pure white. 20 primitives + color-mix() for all derived tokens.' },
  'current-dark-r1':  { label: 'Current Dark Compressed (20p)',  tokens: 'current-r1', mode: 'dark',  iteration: 1, reason: 'Same neutral dark as iteration 0, now with 20-primitive compression. All alpha variants derived via color-mix().' },
  'quiet-dark-r1':    { label: 'Quiet Authority Dark Compressed (20p)', tokens: 'quiet-r1', mode: 'dark', iteration: 1, reason: 'Deep charcoal editorial with 20-primitive compression. Same visual as iteration 0, structured for palette swapping.' },
  'v1-dark-r1':       { label: 'Legacy v1 Dark Compressed (20p)', tokens: 'v1-r1', mode: 'dark', iteration: 1, reason: 'Deep navy v1 palette with 20-primitive compression. All alpha variants derived via color-mix().' },
  'hacker-dark-r1':   { label: 'Fixed: Hacker Dark (56)',        tokens: 'hacker-r1',    mode: 'dark',  iteration: 1, reason: 'Revised from green-on-black: neutral gray text with subtle blue accent. Legible for extended use, accessible, maintains privacy-dark aesthetic.' },
  'solarized-dark-r1': { label: 'Fixed: Solarized Dark (47)',   tokens: 'solarized-r1', mode: 'dark',  iteration: 1, reason: 'Contrast fix: secondary text lightened to #7B8F97 for WCAG AA compliance (4.5:1 ratio). No other changes.' },
  'dracula-dark-r1':  { label: 'Fixed: Dracula Dark (58)',      tokens: 'dracula-r1',   mode: 'dark',  iteration: 1, reason: 'Accent shifted from purple (#BD93F9) to blue (#8BA4F8) — feels more sovereign, less playful. Better danger vs accent distinction.' },
  'logos-light-r1':   { label: 'Fixed: Logos Light (67)',       tokens: 'logos-r1',     mode: 'light', iteration: 1, reason: 'Reduced palette complexity (75→67 unique colors). Off-white bg (#FAFBF9) reduces glare. Merged near-duplicate sage shades.' },
  'monokai-dark-r1':  { label: 'Fixed: Monokai Dark (54)',     tokens: 'monokai-r1',   mode: 'dark',  iteration: 1, reason: 'Accents shifted cooler: amber→steel-gold (#D4A84A), lime→teal-green (#5CC4A0), cyan→steel-blue (#7AAEC4). Privacy app feel vs IDE.' },
  'francesca-logos-dark': { label: 'Francesca Logos Dark (56)', tokens: 'francesca-logos', mode: 'dark', iteration: 1, reason: 'Francesca\'s Logos dark theme. Muted earth tones, restrained brand (#b8cbd2), desaturated avatar colors. Logos network identity.' },
  'francesca-wcag-light': { label: 'Francesca WCAG AA Light (57)', tokens: 'francesca-wcag', mode: 'light', iteration: 1, reason: 'Francesca\'s WCAG AA compliant light theme. All text-vs-background contrasts meet or exceed 4.5:1. Brand: #3751d3.' },
  'francesca-wcag-dark':  { label: 'Francesca WCAG AA Dark (56)',  tokens: 'francesca-wcag', mode: 'dark',  iteration: 1, reason: 'Francesca\'s WCAG AA compliant dark theme. All contrasts meet AA standards. Brand: #5970ff on #121518.' },
  // --- Iteration 2: Privacy-inspired themes (from Volo) ---
  'i2-obsidian-dark':   { label: 'Obsidian Vault Dark (44)',    tokens: 'i2-obsidian-vault',    mode: 'dark',  iteration: 2, reason: 'Deep black + electric indigo. Signal+Mullvad+Tor inspiration. Maximum side-view blackout. ★★★★★' },
  'i2-obsidian-light':  { label: 'Obsidian Vault Light (42)',   tokens: 'i2-obsidian-vault',    mode: 'light', iteration: 2, reason: 'Soft violet-white + deep indigo accent. Trust-first simplicity.' },
  'i2-cipher-dark':     { label: 'Cipher Night Dark (44)',      tokens: 'i2-cipher-night',      mode: 'dark',  iteration: 2, reason: 'Rich navy + Signal blue. Professional trust meets deep privacy. ★★★★★' },
  'i2-cipher-light':    { label: 'Cipher Night Light (42)',     tokens: 'i2-cipher-night',      mode: 'light', iteration: 2, reason: 'Cool blue-white + deep blue accent. Naval authority.' },
  'i2-forest-dark':     { label: 'Forest Protocol Dark (44)',   tokens: 'i2-forest-protocol',   mode: 'dark',  iteration: 2, reason: 'Muted forest green. Eye comfort for marathon sessions. ★★★★★' },
  'i2-forest-light':    { label: 'Forest Protocol Light (42)',  tokens: 'i2-forest-protocol',   mode: 'light', iteration: 2, reason: 'Fresh green-white. Organic trust, calm confidence.' },
  'i2-mercury-dark':    { label: 'Mercury Steel Dark (44)',     tokens: 'i2-mercury-steel',     mode: 'dark',  iteration: 2, reason: 'Silver-charcoal + lavender accent. Mullvad-neutral precision. ★★★★★' },
  'i2-mercury-light':   { label: 'Mercury Steel Light (42)',    tokens: 'i2-mercury-steel',     mode: 'light', iteration: 2, reason: 'Cool gray-white + blue-violet accent. Hardware-grade neutrality.' },
  'i2-amber-dark':      { label: 'Amber Sentinel Dark (44)',    tokens: 'i2-amber-sentinel',    mode: 'dark',  iteration: 2, reason: 'Warm amber on charcoal. Brave-inspired watchdog warmth. ★★★★☆' },
  'i2-amber-light':     { label: 'Amber Sentinel Light (42)',   tokens: 'i2-amber-sentinel',    mode: 'light', iteration: 2, reason: 'Warm cream + deep gold accent. Alert confidence.' },
  'i2-oxide-dark':      { label: 'Oxide Copper Dark (44)',      tokens: 'i2-oxide-copper',      mode: 'dark',  iteration: 2, reason: 'Deep teal-copper. Status DNA evolved for privacy. ★★★★★' },
  'i2-oxide-light':     { label: 'Oxide Copper Light (42)',     tokens: 'i2-oxide-copper',      mode: 'light', iteration: 2, reason: 'Fresh teal-white. Original Status brand spirit.' },
  'i2-ghost-dark':      { label: 'Ghost Protocol Dark (44)',    tokens: 'i2-ghost-protocol',    mode: 'dark',  iteration: 2, reason: 'Pure monochrome. Tor-spirit anonymity, zero noise. ★★★★★' },
  'i2-ghost-light':     { label: 'Ghost Protocol Light (42)',   tokens: 'i2-ghost-protocol',    mode: 'light', iteration: 2, reason: 'Near-white monochrome. Disciplined, invisible.' },
  'i2-crimson-dark':    { label: 'Crimson Vault Dark (44)',     tokens: 'i2-crimson-vault',     mode: 'dark',  iteration: 2, reason: 'Dark crimson guard. ProtonMail sovereign power. ★★★★☆' },
  'i2-crimson-light':   { label: 'Crimson Vault Light (42)',    tokens: 'i2-crimson-vault',     mode: 'light', iteration: 2, reason: 'Soft rose-white + deep red accent. Bold trust.' },
  'i2-glacier-dark':    { label: 'Glacier Seal Dark (44)',      tokens: 'i2-glacier-seal',      mode: 'dark',  iteration: 2, reason: 'Ice-cold clarity. DuckDuckGo freshness, crisp privacy. ★★★★★' },
  'i2-glacier-light':   { label: 'Glacier Seal Light (42)',     tokens: 'i2-glacier-seal',      mode: 'light', iteration: 2, reason: 'Icy blue-white. Clean, uncluttered, fresh.' },
  'i2-dusk-dark':       { label: 'Dusk Protocol Dark (44)',     tokens: 'i2-dusk-protocol',     mode: 'dark',  iteration: 2, reason: 'Plum-navy + violet accent. Premium privacy at dusk. ★★★★★' },
  'i2-dusk-light':      { label: 'Dusk Protocol Light (42)',    tokens: 'i2-dusk-protocol',     mode: 'light', iteration: 2, reason: 'Soft lavender-white + deep violet. Premium calm.' },
  'i2-cb-blue-dark':    { label: 'CB: Clarity Blue Dark (44)',  tokens: 'i2-cb-clarity-blue',   mode: 'dark',  iteration: 2, reason: 'Colorblind safe (deuteranopia/protanopia). Blue-white-black only. WCAG AAA.' },
  'i2-cb-blue-light':   { label: 'CB: Clarity Blue Light (42)', tokens: 'i2-cb-clarity-blue',   mode: 'light', iteration: 2, reason: 'Colorblind safe. Blue-white axis, zero red/green reliance.' },
  'i2-cb-gold-dark':    { label: 'CB: Gold & Slate Dark (44)',  tokens: 'i2-cb-gold-slate',     mode: 'dark',  iteration: 2, reason: 'Colorblind safe (tritanopia + all CVDs). Blue-yellow axis. WCAG AAA.' },
  'i2-cb-gold-light':   { label: 'CB: Gold & Slate Light (42)', tokens: 'i2-cb-gold-slate',     mode: 'light', iteration: 2, reason: 'Colorblind safe. Gold on white, universally distinguishable.' },
  // --- Iteration 3: Refined privacy themes (from Volo) ---
  'i3-vault-dark':      { label: 'Vault Dark (44)',            tokens: 'i3-vault',             mode: 'dark',  iteration: 3, reason: 'Deep graphite + electric blue. Signal & Mullvad inspired.' },
  'i3-vault-light':     { label: 'Vault Light (41)',           tokens: 'i3-vault',             mode: 'light', iteration: 3, reason: 'Clean blue-white. Trust signal, minimal chrome.' },
  'i3-obsidian-dark':   { label: 'Obsidian Dark (43)',         tokens: 'i3-obsidian3',         mode: 'dark',  iteration: 3, reason: 'True black + cyan. Maximum viewing angle protection. Tor-inspired.' },
  'i3-obsidian-light':  { label: 'Obsidian Light (41)',        tokens: 'i3-obsidian3',         mode: 'light', iteration: 3, reason: 'Cool gray + teal accent. Austere clarity.' },
  'i3-sovereign-dark':  { label: 'Sovereign Dark (43)',        tokens: 'i3-sovereign',         mode: 'dark',  iteration: 3, reason: 'Dark navy + warm gold. Proton authority meets sovereignty.' },
  'i3-sovereign-light': { label: 'Sovereign Light (41)',       tokens: 'i3-sovereign',         mode: 'light', iteration: 3, reason: 'Blue-gray + gold accent. You own this.' },
  'i3-stealth-dark':    { label: 'Stealth Dark (43)',          tokens: 'i3-stealth',           mode: 'dark',  iteration: 3, reason: 'Near-black olive-grey + sage. Tactical calm, DuckDuckGo+Mullvad.' },
  'i3-stealth-light':   { label: 'Stealth Light (41)',         tokens: 'i3-stealth',           mode: 'light', iteration: 3, reason: 'Warm stone + sage green. Earthy neutrality.' },
  'i3-ghost-dark':      { label: 'Ghost Dark (43)',            tokens: 'i3-ghost3',            mode: 'dark',  iteration: 3, reason: 'Near-white surfaces + indigo. Proton refreshed. Clean document editor.' },
  'i3-ghost-light':     { label: 'Ghost Light (41)',           tokens: 'i3-ghost3',            mode: 'light', iteration: 3, reason: 'Off-white + indigo accent. Calm and trustworthy.' },
  'i3-cipher-dark':     { label: 'Cipher Dark (43)',           tokens: 'i3-cipher3',           mode: 'dark',  iteration: 3, reason: 'Cool dark slate + electric violet. Cryptographic edge for power users.' },
  'i3-cipher-light':    { label: 'Cipher Light (41)',          tokens: 'i3-cipher3',           mode: 'light', iteration: 3, reason: 'Pale violet-white + deep purple accent. Encryption aesthetic.' },
  'i3-dusk-dark':       { label: 'Dusk Dark (43)',             tokens: 'i3-dusk3',             mode: 'dark',  iteration: 3, reason: 'Deep burgundy-brown + warm amber. Human-first privacy, candlelight comfort.' },
  'i3-dusk-light':      { label: 'Dusk Light (41)',            tokens: 'i3-dusk3',             mode: 'light', iteration: 3, reason: 'Warm cream + amber accent. Trust & warmth.' },
  'i3-nordic-dark':     { label: 'Nordic Dark (43)',           tokens: 'i3-nordic',            mode: 'dark',  iteration: 3, reason: 'Dark blue-grey + frost teal. Mullvad Swedish aesthetic, ProtonVPN clean.' },
  'i3-nordic-light':    { label: 'Nordic Light (41)',          tokens: 'i3-nordic',            mode: 'light', iteration: 3, reason: 'Cool gray-blue + teal. Northern European privacy law heritage.' },
  'i3-basalt-dark':     { label: 'Basalt Dark (43)',           tokens: 'i3-basalt',            mode: 'dark',  iteration: 3, reason: 'Warm stone neutrals + slate blue. DuckDuckGo approachability + ProtonMail composure.' },
  'i3-basalt-light':    { label: 'Basalt Light (41)',          tokens: 'i3-basalt',            mode: 'light', iteration: 3, reason: 'Warm cream + slate blue accent. Calm confidence.' },
  'i3-tunnel-dark':     { label: 'Tunnel Dark (43)',           tokens: 'i3-tunnel',            mode: 'dark',  iteration: 3, reason: 'Pure near-black + vivid lime. Mullvad VPN "connected" green. Secure tunnel.' },
  'i3-tunnel-light':    { label: 'Tunnel Light (41)',          tokens: 'i3-tunnel',            mode: 'light', iteration: 3, reason: 'Light gray + green accent. VPN authority.' },
  'i3-cb-bo-dark':      { label: 'Visible Blue/Orange Dark (43)',  tokens: 'i3-visible-blue-orange', mode: 'dark',  iteration: 3, reason: 'Colorblind safe (deuteranopia/protanopia). Blue-orange, most universally safe pairing.' },
  'i3-cb-bo-light':     { label: 'Visible Blue/Orange Light (41)', tokens: 'i3-visible-blue-orange', mode: 'light', iteration: 3, reason: 'Colorblind safe. Blue-orange on white, WCAG AAA.' },
  'i3-cb-mt-dark':      { label: 'Visible Mono+Teal Dark (43)',    tokens: 'i3-visible-mono-teal',   mode: 'dark',  iteration: 3, reason: 'Colorblind safe (all CVDs including Achromatopsia). Luminance contrast + teal.' },
  'i3-cb-mt-light':     { label: 'Visible Mono+Teal Light (41)',   tokens: 'i3-visible-mono-teal',   mode: 'light', iteration: 3, reason: 'Colorblind safe. Pure monochrome + teal, safe for total colorblindness.' },
}

// --- Iterations (derived from theme registry) ---
const iterations = [...new Set(Object.values(themes).map(t => t.iteration))].sort()
let currentIteration = iterations[iterations.length - 1] // default to latest

// --- Font registry ---
const fonts = {
  'default':    { label: 'Inter' },
  'system':     { label: 'System UI' },
  'plex':       { label: 'IBM Plex' },
  'jetbrains':  { label: 'JetBrains Mono' },
  'editorial':  { label: 'Serif' },
  'terminal':   { label: 'Monospace' },
}

// --- Primitives definition (for customizer panel) ---
const primitives = [
  { key: '--p-surface-0', label: 'Surface 0', group: 'Neutrals' },
  { key: '--p-surface-1', label: 'Surface 1', group: 'Neutrals' },
  { key: '--p-surface-2', label: 'Surface 2', group: 'Neutrals' },
  { key: '--p-surface-3', label: 'Surface 3', group: 'Neutrals' },
  { key: '--p-surface-4', label: 'Surface 4', group: 'Neutrals' },
  { key: '--p-text', label: 'Text', group: 'Neutrals' },
  { key: '--p-text-secondary', label: 'Text Secondary', group: 'Neutrals' },
  { key: '--p-brand', label: 'Brand', group: 'Brand' },
  { key: '--p-brand-subtle', label: 'Brand Subtle', group: 'Brand' },
  { key: '--p-success', label: 'Success', group: 'Status' },
  { key: '--p-danger', label: 'Danger', group: 'Status' },
  { key: '--p-warning', label: 'Warning', group: 'Status' },
  { key: '--p-mention', label: 'Mention', group: 'Status' },
  { key: '--p-pin', label: 'Pin', group: 'Status' },
]

// --- State ---
let currentScreen = 'community-channel'
let currentTheme = 'current-dark'
let currentFont = 'default'
let currentView = 'desktop' // desktop or mobile
let sideBySide = false
let compareIteration = iterations[iterations.length - 1]
let compareTheme = 'current-dark'
let customizerOpen = false

const screens = {
  'community-channel': { label: 'Community Channel', render: renderCommunityChannel },
  'discover-communities': { label: 'Discover', render: renderDiscoverCommunities },
  'swap-modal': { label: 'Swap', render: renderSwapModal },
  'wallet-account': { label: 'Wallet', render: renderWalletAccount },
}

// --- Apply state to DOM ---
function applyTheme(tokens, mode, font) {
  document.documentElement.setAttribute('data-tokens', tokens)
  document.documentElement.setAttribute('data-mode', mode)
  if (font && font !== 'default') {
    document.documentElement.setAttribute('data-fonts', font)
  } else {
    document.documentElement.removeAttribute('data-fonts')
  }
}

function applySplitTokens(elementId, tokens, mode) {
  const el = document.getElementById(elementId)
  if (!el) return
  el.setAttribute('data-tokens', tokens)
  el.setAttribute('data-mode', mode)
}

function render() {
  const { tokens, mode } = themes[currentTheme]
  applyTheme(tokens, mode, currentFont)

  const app = document.querySelector('#app')
  const screenFn = screens[currentScreen].render

  if (sideBySide && themes[compareTheme]) {
    const compare = themes[compareTheme]
    app.innerHTML = `
      <div class="presentation">
        ${renderToolbar()}
        <div class="presentation__split">
          <div class="presentation__split-pane">
            <div class="presentation__split-label">${themes[currentTheme].label}</div>
            <div class="shell" data-tokens="${tokens}" data-mode="${mode}" id="split-left"></div>
          </div>
          <div class="presentation__split-pane">
            <div class="presentation__split-label">${compare.label}</div>
            <div class="shell" data-tokens="${compare.tokens}" data-mode="${compare.mode}" id="split-right"></div>
          </div>
        </div>
      </div>
    `
    document.getElementById('split-left').innerHTML = renderShellInner(screenFn)
    document.getElementById('split-right').innerHTML = renderShellInner(screenFn)
    applySplitTokens('split-left', tokens, mode)
    applySplitTokens('split-right', compare.tokens, compare.mode)
  } else {
    if (currentView === 'mobile') {
      app.innerHTML = `
        <div class="presentation">
          ${renderToolbar()}
          <div class="presentation__main">
            <div class="presentation__screen-area" style="justify-content:center;background:var(--base-color-5)">
              <div class="phone-frame">
                <div class="phone-frame__notch"></div>
                <div class="phone-frame__screen">
                  <div class="shell shell--mobile" id="main-shell"></div>
                </div>
                <div class="phone-frame__home"></div>
              </div>
            </div>
          </div>
        </div>
      `
      document.getElementById('main-shell').innerHTML = renderMobileShellInner(screenFn)
    } else {
      app.innerHTML = `
        <div class="presentation">
          ${renderToolbar()}
          <div class="presentation__main">
            <div class="presentation__screen-area">
              <div class="shell" id="main-shell"></div>
            </div>
            ${customizerOpen ? renderCustomizer() : ''}
          </div>
        </div>
      `
      document.getElementById('main-shell').innerHTML = renderShellInner(screenFn)
    }
  }

  bindToolbarEvents()
  if (customizerOpen && !sideBySide) bindCustomizerEvents()
}

function renderCustomizer() {
  let lastGroup = ''
  const rows = primitives.map(({ key, label, group }) => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(key).trim()
    const groupHeader = group !== lastGroup ? `<div class="customizer__group">${group}</div>` : ''
    lastGroup = group
    return `${groupHeader}
      <div class="customizer__row">
        <label class="customizer__label">${label}</label>
        <input type="color" class="customizer__swatch" data-primitive="${key}" value="${value || '#000000'}" />
        <span class="customizer__hex">${value}</span>
      </div>`
  }).join('')

  return `
    <div class="customizer">
      <div class="customizer__header">
        <span>Primitives</span>
        <button class="customizer__close" data-toggle-customizer>×</button>
      </div>
      <div class="customizer__body">${rows}</div>
    </div>
  `
}

function bindCustomizerEvents() {
  document.querySelectorAll('.customizer__swatch').forEach(input => {
    input.addEventListener('input', (e) => {
      const key = e.target.dataset.primitive
      document.documentElement.style.setProperty(key, e.target.value)
      const hexSpan = e.target.nextElementSibling
      if (hexSpan) hexSpan.textContent = e.target.value
    })
  })
  document.querySelectorAll('[data-toggle-customizer]').forEach(btn => {
    btn.addEventListener('click', () => {
      customizerOpen = !customizerOpen
      // Clear inline overrides when closing
      if (!customizerOpen) {
        primitives.forEach(({ key }) => document.documentElement.style.removeProperty(key))
      }
      render()
    })
  })
}

function linkify(text) {
  return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" style="color:var(--primary-color-1)">$1</a>')
}

function renderToolbar() {
  // Check if current theme has primitives (compressed)
  const isCompressed = currentTheme.includes('-r1')

  // Filter themes by current iteration
  const filteredThemes = Object.entries(themes).filter(([, t]) => t.iteration === currentIteration)

  // Theme dropdown
  const themeOptions = filteredThemes.map(([key, { label }]) =>
    `<option value="${key}" ${currentTheme === key ? 'selected' : ''}>${label}</option>`
  ).join('')

  // Compare dropdowns (separate iteration + theme)
  const compareFilteredThemes = Object.entries(themes).filter(([, t]) => t.iteration === compareIteration)
  const compareOptions = compareFilteredThemes.map(([key, { label }]) =>
    `<option value="${key}" ${compareTheme === key ? 'selected' : ''}>${label}</option>`
  ).join('')
  const compareIterationOptions = iterations.map(i =>
    `<option value="${i}" ${compareIteration === i ? 'selected' : ''}>#${i}</option>`
  ).join('')

  // Iteration dropdown
  const iterationOptions = iterations.map(i =>
    `<option value="${i}" ${currentIteration === i ? 'selected' : ''}>#${i}</option>`
  ).join('')

  // Font dropdown
  const fontOptions = Object.entries(fonts).map(([key, { label }]) =>
    `<option value="${key}" ${currentFont === key ? 'selected' : ''}>${label}</option>`
  ).join('')

  // Screen buttons
  const screenBtns = Object.entries(screens).map(([key, { label }]) =>
    `<button class="${currentScreen === key ? 'active' : ''}" data-set-screen="${key}">${label}</button>`
  ).join('')

  return `
    <div class="presentation__toolbar">
      <select class="presentation__toolbar-select" data-set-iteration>${iterationOptions}</select>
      <select class="presentation__toolbar-select" data-set-theme>${themeOptions}</select>
      <select class="presentation__toolbar-select" data-set-font>${fontOptions}</select>
      <select class="presentation__toolbar-select" data-set-view>
        <option value="desktop" ${currentView === 'desktop' ? 'selected' : ''}>Desktop</option>
        <option value="mobile" ${currentView === 'mobile' ? 'selected' : ''}>Mobile</option>
      </select>
      <div class="presentation__toolbar-group">${screenBtns}</div>
      <button class="${sideBySide ? 'active' : ''}" data-toggle-split>Compare</button>
      ${sideBySide ? `<select class="presentation__toolbar-select" data-set-compare-iteration>${compareIterationOptions}</select><select class="presentation__toolbar-select" data-set-compare>${compareOptions}</select>` : ''}
      ${isCompressed && !sideBySide ? `<button class="presentation__toolbar-cta ${customizerOpen ? 'active' : ''}" data-toggle-customizer>Customize</button>` : ''}
      <div class="presentation__toolbar-reason">${linkify(themes[currentTheme].reason || '')}</div>
    </div>
  `
}

function renderShellInner(screenFn) {
  const { nav, left, center, right } = screenFn()
  return `
    ${nav || renderDefaultNav()}
    ${left ? `<div class="shell__left">${left}</div>` : ''}
    <div class="shell__center">
      ${center}
    </div>
    ${right ? `<div class="shell__right">${right}</div>` : ''}
  `
}

function renderMobileShellInner(screenFn) {
  const { nav, left, center, right } = screenFn()
  // Mobile: show center panel only (full width), with bottom tab bar
  return `
    <div class="shell__mobile-content">
      ${center}
    </div>
    <div class="shell__mobile-tabs">
      <button class="shell__mobile-tab active" title="Messages"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2.3C17.36 2.3 21.7 6.64 21.7 12V18C21.7 20.04 20.04 21.7 18 21.7H12C6.64 21.7 2.3 17.36 2.3 12C2.3 6.64 6.64 2.3 12 2.3Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
      <button class="shell__mobile-tab" title="Communities"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M11 21C11 18.35 12.05 15.8 13.93 13.93C15.8 12.05 18.35 11 21 11M7 21C7 17.29 8.47 13.73 11.1 11.1C13.73 8.48 17.29 7 21 7M15.47 18.66C15.77 17.96 16.2 17.31 16.76 16.76C17.31 16.21 17.96 15.77 18.66 15.47C19.95 14.93 20.6 14.65 20.8 14.35C21 14.05 21 13.57 21 12.6V5.4C21 4.24 21 3.67 20.59 3.31C20.18 2.95 19.66 3.02 18.61 3.16C10.54 4.21 4.21 10.54 3.15 18.61C3.02 19.66 2.95 20.18 3.31 20.59C3.67 21 4.24 21 5.4 21H12.6C13.57 21 14.05 21 14.35 20.8C14.65 20.6 14.93 19.95 15.47 18.66Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
      <button class="shell__mobile-tab" title="Wallet"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 1.8C14.13 1.8 15.84 1.86 17.19 2.1C18.55 2.34 19.63 2.77 20.43 3.57C21.23 4.37 21.66 5.45 21.9 6.81C22.12 8.03 22.18 9.54 22.19 11.38C22.2 11.5 22.2 11.5 22.2 11.5C22.2 11.66 22.2 11.83 22.2 12C22.2 12.1 22.2 12.2 22.2 12.3C22.2 12.36 22.2 12.43 22.2 12.5C22.19 14.4 22.12 15.94 21.9 17.19C21.66 18.55 21.23 19.63 20.43 20.43C19.63 21.23 18.55 21.66 17.19 21.9C15.84 22.14 14.13 22.2 12 22.2C9.87 22.2 8.16 22.14 6.81 21.9C5.45 21.66 4.37 21.23 3.57 20.43C2.77 19.63 2.34 18.55 2.1 17.19C1.88 15.94 1.81 14.4 1.81 12.5C1.8 12.43 1.8 12.36 1.8 12.3C1.8 12.2 1.8 12.1 1.8 12C1.8 11.83 1.8 11.66 1.81 11.5C1.8 11.46 1.8 11.42 1.81 11.38C1.82 9.54 1.89 8.03 2.1 6.81C2.34 5.45 2.77 4.37 3.57 3.57C4.37 2.77 5.45 2.34 6.81 2.1C8.16 1.86 9.87 1.8 12 1.8Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
      <button class="shell__mobile-tab" title="Browser"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z" stroke="currentColor" stroke-width="1.4"/><path d="M9.99 10.55L8.55 15.33C8.53 15.4 8.6 15.47 8.67 15.45L13.94 14.02C13.98 14.01 14.01 13.98 14.02 13.94L15.45 8.69C15.47 8.61 15.39 8.54 15.32 8.57L10.05 10.48C10.02 10.49 9.99 10.52 9.99 10.55Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
    </div>
  `
}

function renderDefaultNav() {
  return `
    <div class="shell__nav">
      <div class="shell__nav-main">
        <div class="shell__nav-section">
          <button class="shell__nav-btn" title="Home"><svg viewBox="0 0 24 24" fill="none"><path d="M11.3057 3.67969C11.7208 3.38476 12.2792 3.38476 12.6943 3.67969L12.7812 3.74707L20.2812 10.1758C20.5471 10.4037 20.7001 10.7367 20.7002 11.0869V19.5C20.7002 20.1627 20.1627 20.7002 19.5 20.7002H4.5C3.83726 20.7002 3.2998 20.1627 3.2998 19.5V11.0869C3.29986 10.7367 3.45286 10.4037 3.71875 10.1758L11.2188 3.74707L11.3057 3.67969Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
          <button class="shell__nav-btn" title="Wallet"><svg viewBox="0 0 24 24" fill="none"><path d="M12.0005 1.7998C14.1269 1.79981 15.8372 1.86152 17.1919 2.09961C18.5524 2.33875 19.6344 2.76869 20.4331 3.56738C21.2317 4.36609 21.6618 5.44808 21.9009 6.80859C22.1153 8.0288 22.1828 9.53754 22.1948 11.3789C22.1977 11.4185 22.2007 11.4589 22.2007 11.5H22.1958C22.1966 11.664 22.2007 11.8308 22.2007 12C22.2007 12.0992 22.198 12.1976 22.1978 12.2949C22.1981 12.3628 22.2007 12.4313 22.2007 12.5H22.1958C22.1861 14.3965 22.12 15.9446 21.9009 17.1914C21.6617 18.5519 21.2318 19.6339 20.4331 20.4326C19.6344 21.2313 18.5524 21.6613 17.1919 21.9004C15.8372 22.1385 14.1269 22.2002 12.0005 22.2002C9.87405 22.2002 8.1638 22.1385 6.80908 21.9004C5.44857 21.6613 4.36658 21.2312 3.56787 20.4326C2.76919 19.6339 2.33924 18.5519 2.1001 17.1914C1.88096 15.9446 1.81487 14.3965 1.80518 12.5H1.80029C1.80029 12.4313 1.80292 12.3628 1.80322 12.2949C1.80294 12.1976 1.8003 12.0992 1.80029 12C1.80029 11.8308 1.80434 11.664 1.80518 11.5H1.80029C1.80029 11.4589 1.8033 11.4185 1.80615 11.3789C1.81818 9.53752 1.88566 8.02881 2.1001 6.80859C2.33923 5.44801 2.76917 4.3661 3.56787 3.56738C4.36659 2.76866 5.44848 2.33875 6.80908 2.09961C8.16381 1.86153 9.87402 1.7998 12.0005 1.7998ZM15.4663 10.2109C15.3571 10.4289 15.1969 10.6951 14.9644 10.9609C14.4034 11.6019 13.4661 12.2002 12.0005 12.2002C10.5349 12.2002 9.59758 11.6019 9.03662 10.9609C8.80394 10.695 8.64289 10.429 8.53369 10.2109C8.38903 10.2154 8.21566 10.2205 8.021 10.2305C7.42516 10.261 6.63774 10.3213 5.85693 10.4414C5.0647 10.5633 4.3288 10.7396 3.80908 10.9795C3.3918 11.1721 3.25923 11.3328 3.21826 11.4268C3.20972 11.6614 3.20494 11.9099 3.20264 12.1729C3.20608 14.2106 3.26987 15.7593 3.479 16.9492C3.693 18.1666 4.04437 18.9286 4.55811 19.4424C5.07187 19.9561 5.83391 20.3075 7.05127 20.5215C8.27462 20.7365 9.87713 20.7998 12.0005 20.7998C14.1239 20.7998 15.7264 20.7365 16.9497 20.5215C18.1671 20.3075 18.9291 19.9561 19.4429 19.4424C19.9566 18.9286 20.308 18.1666 20.522 16.9492C20.7311 15.7593 20.7949 14.2106 20.7983 12.1729C20.796 11.9099 20.7903 11.6614 20.7817 11.4268C20.7406 11.3328 20.6085 11.1719 20.1919 10.9795C19.6722 10.7396 18.9362 10.5633 18.144 10.4414C17.3633 10.3213 16.5758 10.261 15.98 10.2305C15.7849 10.2205 15.6112 10.2154 15.4663 10.2109ZM12.0005 6.7002C9.88157 6.7002 8.2655 6.7629 7.02686 6.93555C5.78284 7.10895 4.99188 7.38436 4.47021 7.75684C3.91812 8.15119 3.58523 8.71574 3.3999 9.63184C4.06853 9.35418 4.88002 9.17614 5.64404 9.05859C6.48803 8.92875 7.32591 8.86398 7.94873 8.83203C8.26106 8.81602 8.52212 8.80774 8.70557 8.80371C8.7973 8.8017 8.87028 8.8013 8.92041 8.80078C8.94518 8.80053 8.96459 8.79987 8.97803 8.7998H9.54736L9.67822 9.3252V9.32324C9.6784 9.32377 9.67882 9.32486 9.6792 9.32617C9.68082 9.33176 9.68416 9.34428 9.68994 9.36133C9.70172 9.39598 9.72271 9.45136 9.75439 9.52051C9.81867 9.6607 9.9245 9.85061 10.0894 10.0391C10.4035 10.398 10.9665 10.7998 12.0005 10.7998C13.0345 10.7998 13.5976 10.398 13.9116 10.0391C14.0765 9.85057 14.1823 9.66071 14.2466 9.52051C14.2783 9.45131 14.2993 9.39598 14.311 9.36133C14.3168 9.34422 14.3202 9.33173 14.3218 9.32617V9.3252L14.4536 8.7998H15.0229C15.0364 8.79988 15.0558 8.80053 15.0806 8.80078C15.1307 8.80129 15.2037 8.8017 15.2954 8.80371C15.4789 8.80775 15.7399 8.81602 16.0522 8.83203C16.6751 8.86398 17.513 8.92875 18.3569 9.05859C19.1206 9.17609 19.9317 9.35438 20.6001 9.63184C20.4148 8.71594 20.0827 8.15116 19.5308 7.75684C19.0091 7.38437 18.2181 7.10896 16.9741 6.93555C15.7355 6.76289 14.1194 6.7002 12.0005 6.7002ZM12.0005 3.2002C9.87709 3.2002 8.27463 3.26351 7.05127 3.47852C5.83379 3.69251 5.07187 4.04385 4.55811 4.55762C4.09604 5.01969 3.76684 5.68283 3.54932 6.69727C3.58417 6.67057 3.61953 6.64405 3.65576 6.61816C4.4466 6.05328 5.49969 5.73475 6.8335 5.54883C8.17295 5.36213 9.86953 5.2998 12.0005 5.2998C14.1314 5.29981 15.828 5.36212 17.1675 5.54883C18.5012 5.73476 19.5544 6.0533 20.3452 6.61816C20.3812 6.64386 20.4161 6.67077 20.4507 6.69727C20.2332 5.68303 19.9048 5.01966 19.4429 4.55762C18.9291 4.04387 18.1671 3.69251 16.9497 3.47852C15.7264 3.2635 14.1239 3.2002 12.0005 3.2002Z" fill="currentColor"/></svg></button>
          <button class="shell__nav-btn" title="Swap"><svg viewBox="0 0 24 24" fill="none"><g fill="currentColor"><path d="m6.46967 12.4697c.29289-.2929.76777-.2929 1.06066 0s.29289.7677 0 1.0606l-1.86612 1.8661c-.31498.315-.09189.8536.35356.8536h10.98223c1.7949 0 3.25-1.4551 3.25-3.25v-1c0-.4142.3358-.75.75-.75s.75.3358.75.75v1c0 2.6234-2.1266 4.75-4.75 4.75h-10.98223c-.44546 0-.66854.5386-.35356.8536l1.86612 1.8661c.29289.2929.29289.7677 0 1.0606s-.76777.2929-1.06066 0l-4-4c-.29289-.2929-.29289-.7677 0-1.0606z"/><path d="m16.4697 2.46967c-.2929.29289-.2929.76777 0 1.06066l1.8661 1.86612c.315.31498.0919.85355-.3536.85355h-10.9822c-2.62335 0-4.75 2.12665-4.75 4.75v1c0 .4142.33579.75.75.75s.75-.3358.75-.75v-1c0-1.79493 1.45507-3.25 3.25-3.25h10.9822c.4455 0 .6686.53857.3536.85355l-1.8661 1.86615c-.2929.2929-.2929.7677 0 1.0606s.7677.2929 1.0606 0l4-3.99997c.2929-.29289.2929-.76777 0-1.06066l-4-4c-.2929-.29289-.7677-.29289-1.0606 0z"/></g></svg></button>
          <button class="shell__nav-btn active" title="Messages"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2.2998C17.3572 2.2998 21.7002 6.64284 21.7002 12V18C21.7002 20.0435 20.0435 21.7002 18 21.7002H12C6.64284 21.7002 2.2998 17.3572 2.2998 12C2.2998 6.64284 6.64284 2.2998 12 2.2998Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></button>
          <button class="shell__nav-btn" title="Browser"><svg viewBox="0 0 24 24" fill="none"><path d="M9.98557 10.5481L8.55179 15.3274C8.52923 15.4026 8.59815 15.4732 8.67388 15.4526L13.9449 14.015C13.979 14.0057 14.0057 13.979 14.015 13.9449L15.4492 8.68627C15.4705 8.60803 15.3948 8.53827 15.3185 8.56598L10.0472 10.4828C10.0175 10.4936 9.99465 10.5178 9.98557 10.5481Z" stroke="currentColor" stroke-width="1.4"/><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
          <button class="shell__nav-btn" title="Communities Portal"><svg viewBox="0 0 24 24" fill="none"><path d="M10.9996 21.0001C10.9996 18.3479 12.0531 15.8044 13.9285 13.929C15.8039 12.0537 18.3474 11.0001 20.9996 11.0001M6.99981 21.0003C6.99981 17.2873 8.4748 13.7263 11.1003 11.1008C13.7258 8.47532 17.287 6.99996 21.0001 6.99996M15.4732 18.6635C15.7715 17.9581 16.2049 17.3095 16.7569 16.7574C17.309 16.2053 17.9576 15.772 18.663 15.4737C19.9543 14.9277 20.5999 14.6548 20.7998 14.3534C20.9996 14.0519 20.9996 13.568 20.9996 12.6001V5.40005C20.9996 4.24389 20.9996 3.66581 20.5912 3.30735C20.1827 2.94888 19.6568 3.01767 18.605 3.15526C10.5353 4.21081 4.21032 10.5358 3.15477 18.6055C3.01719 19.6573 2.94839 20.1832 3.30686 20.5916C3.66533 21.0001 4.2434 21.0001 5.39956 21.0001H12.5996C13.5675 21.0001 14.0515 21.0001 14.3529 20.8002C14.6543 20.6004 14.9273 19.9548 15.4732 18.6635Z" stroke="currentColor" stroke-width="1.4"/></svg></button>
        </div>
        <div class="shell__nav-separator"></div>
        <div class="shell__nav-section shell__nav-section--grow">
          <button class="shell__nav-btn shell__nav-btn--community" title="Status Community">
            <span style="font-size:14px;font-weight:700">S</span>
          </button>
        </div>
        <div class="shell__nav-separator"></div>
        <div class="shell__nav-section">
          <button class="shell__nav-btn" title="QR Scanner"><svg viewBox="0 0 24 24" fill="none"><g fill="currentColor"><path clip-rule="evenodd" d="m4 2c-1.10457 0-2 .89543-2 2v5c0 1.1046.89543 2 2 2h5c1.1046 0 2-.8954 2-2v-5c0-1.10457-.8954-2-2-2zm5 1.5h-5c-.27614 0-.5.22386-.5.5v5c0 .27614.22386.5.5.5h5c.27614 0 .5-.22386.5-.5v-5c0-.27614-.22386-.5-.5-.5z" fill-rule="evenodd"/><path d="m6.5 16c-.82843 0-1.5.6716-1.5 1.5s.67157 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.67157-1.5-1.5-1.5z"/><path clip-rule="evenodd" d="m6.5 13c-2.48528 0-4.5 2.0147-4.5 4.5s2.01472 4.5 4.5 4.5 4.5-2.0147 4.5-4.5-2.01472-4.5-4.5-4.5zm-3 4.5c0 1.6569 1.34315 3 3 3s3-1.3431 3-3-1.34315-3-3-3-3 1.3431-3 3z" fill-rule="evenodd"/><path d="m14 13c-.5523 0-1 .4477-1 1v1.5c0 .5523.4477 1 1 1h1.5c.5523 0 1-.4477 1-1v-1.5c0-.5523-.4477-1-1-1z"/><path d="m18.5 14c0-.5523.4477-1 1-1h1.5c.5523 0 1 .4477 1 1v1.5c0 .5523-.4477 1-1 1h-1.5c-.5523 0-1-.4477-1-1z"/><path d="m19.5 18.5c-.5523 0-1 .4477-1 1v1.5c0 .5523.4477 1 1 1h1.5c.5523 0 1-.4477 1-1v-1.5c0-.5523-.4477-1-1-1z"/><path d="m13 19.5c0-.5523.4477-1 1-1h1.5c.5523 0 1 .4477 1 1v1.5c0 .5523-.4477 1-1 1h-1.5c-.5523 0-1-.4477-1-1z"/><path d="m16 6c0-.55228.4477-1 1-1h1c.5523 0 1 .44772 1 1v1c0 .55228-.4477 1-1 1h-1c-.5523 0-1-.44772-1-1z"/><path clip-rule="evenodd" d="m13 4c0-1.10457.8954-2 2-2h5c1.1046 0 2 .89543 2 2v5c0 1.1046-.8954 2-2 2h-5c-1.1046 0-2-.8954-2-2zm2-.5h5c.2761 0 .5.22386.5.5v5c0 .27614-.2239.5-.5.5h-5c-.2761 0-.5-.22386-.5-.5v-5c0-.27614.2239-.5.5-.5z" fill-rule="evenodd"/></g></svg></button>
          <button class="shell__nav-btn" title="Settings"><svg viewBox="0 0 24 24" fill="none"><path d="M15.7666 2.48535C16.6387 2.81122 17.4633 3.25141 18.2178 3.79492L18.5361 4.03418L18.8047 4.24316L18.8057 4.58301L18.8174 7.85352C18.8175 7.87445 18.8229 7.89532 18.834 7.91309L18.8359 7.91602C18.8983 8.01666 18.9677 8.13118 19.0352 8.25586L19.0547 8.28125C19.0615 8.28826 19.0697 8.29362 19.0781 8.29883L21.9795 9.95215L22.2715 10.1191L22.3242 10.4502C22.4452 11.2062 22.4776 11.9727 22.4219 12.7344H24.2891L21.9883 14.042L19.0869 15.6924V15.6934C19.0693 15.7034 19.054 15.7177 19.0439 15.7354L19.041 15.7402C18.9844 15.8379 18.9163 15.956 18.8467 16.0684L18.8447 16.0723C18.8341 16.0891 18.8282 16.109 18.8281 16.1289V16.1309L18.8125 19.4062L18.8115 19.7441L18.5449 19.9531C17.709 20.6096 16.7777 21.1345 15.7832 21.5098L15.4795 21.625L15.1953 21.4668L12.2705 19.8369L12.2158 19.8223H11.8057C11.7843 19.8217 11.7629 19.8266 11.7441 19.8369L8.81934 21.4707L8.53613 21.6279L8.23242 21.5146C7.23608 21.1423 6.30258 20.62 5.46387 19.9658L5.19531 19.7568L5.19434 19.416L5.18262 16.1465V16.1455C5.18246 16.1248 5.17692 16.1045 5.16602 16.0869L5.16406 16.084C5.10149 15.9831 5.03147 15.8683 4.96387 15.7432V15.7441C4.95356 15.7258 4.93892 15.7101 4.9209 15.6992L2.02051 14.0469L1.72754 13.8809L1.6748 13.5488C1.51306 12.5257 1.51311 11.4831 1.6748 10.46L1.72754 10.1279L2.01953 9.96094L4.91602 8.30762L4.91699 8.30664C4.93457 8.29665 4.94898 8.28222 4.95898 8.26465L4.96191 8.25977C5.01861 8.16202 5.08753 8.04308 5.15723 7.93066L5.15918 7.92676C5.16965 7.91002 5.17567 7.89085 5.17578 7.87109V7.86914L5.19043 4.59375L5.19238 4.25586L5.45898 4.04688C6.29494 3.39041 7.22624 2.86549 8.2207 2.49023L8.52441 2.375L8.80859 2.5332L11.7295 4.16309C11.747 4.17279 11.7671 4.17822 11.7871 4.17773H12.1943C12.2049 4.17797 12.2154 4.17632 12.2256 4.17383L12.2549 4.16309L15.1807 2.5293L15.4639 2.37109L15.7666 2.48535Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.7" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg></button>
        </div>
        <div class="shell__nav-avatar" title="Profile">
          A
          <span class="status-dot"></span>
        </div>
      </div>
      <div class="shell__nav-ac">
        <button class="shell__nav-btn" title="Activity Center">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 2.89941C13.2302 2.89946 14.6959 3.18992 15.8916 4.3877C17.077 5.57542 17.8869 7.54647 18.0635 10.6621C18.1092 11.4696 18.1292 11.7975 18.168 12C18.207 12.204 18.2817 12.4312 18.4746 13.0098L19.8643 17.1787L20.1709 18.0996H16.2412C16.0958 18.9805 15.6795 19.801 15.04 20.4404C14.2336 21.2468 13.1394 21.7002 11.999 21.7002C10.8589 21.7 9.76522 21.2466 8.95898 20.4404C8.31969 19.801 7.90424 18.9804 7.75879 18.0996H3.82812L4.13574 17.1787L5.52539 13.0098C5.71818 12.4314 5.79198 12.2039 5.83105 12C5.86979 11.7975 5.89078 11.4695 5.93652 10.6621C6.11306 7.54653 6.92203 5.57543 8.10742 4.3877C9.3032 3.18971 10.7697 2.89941 12 2.89941ZM9.18848 18.0996C9.31463 18.6063 9.57389 19.0748 9.94922 19.4502C10.4929 19.9938 11.2302 20.2996 11.999 20.2998C12.7681 20.2998 13.506 19.994 14.0498 19.4502C14.4252 19.0748 14.6834 18.6063 14.8096 18.0996H9.18848ZM12 4.2998C10.9825 4.2998 9.93753 4.53654 9.09863 5.37695C8.2494 6.22787 7.50018 7.80812 7.33398 10.7412C7.29148 11.4915 7.26708 11.9436 7.20605 12.2627C7.14528 12.5801 7.0333 12.9128 6.85352 13.4521L5.77148 16.6992H18.2285L17.1465 13.4521C16.9667 12.9127 16.8537 12.5802 16.793 12.2627C16.732 11.9436 16.7085 11.4914 16.666 10.7412C16.4998 7.80834 15.7505 6.22792 14.9014 5.37695C14.0625 4.53655 13.0174 4.29985 12 4.2998Z" fill="currentColor"/></svg>
        </button>
      </div>
    </div>
  `
}

function bindToolbarEvents() {
  const themeSelect = document.querySelector('[data-set-theme]')
  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      currentTheme = e.target.value
      render()
    })
  }

  const fontSelect = document.querySelector('[data-set-font]')
  if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
      currentFont = e.target.value
      render()
    })
  }

  const iterationSelect = document.querySelector('[data-set-iteration]')
  if (iterationSelect) {
    iterationSelect.addEventListener('change', (e) => {
      currentIteration = parseInt(e.target.value)
      const iterationThemes = Object.entries(themes).filter(([, t]) => t.iteration === currentIteration)
      if (iterationThemes.length > 0) currentTheme = iterationThemes[0][0]
      if (iterationThemes.length > 1) compareTheme = iterationThemes[1][0]
      else if (iterationThemes.length > 0) compareTheme = iterationThemes[0][0]
      render()
    })
  }
  document.querySelectorAll('[data-set-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentScreen = btn.dataset.setScreen
      render()
    })
  })
  const viewSelect = document.querySelector('[data-set-view]')
  if (viewSelect) {
    viewSelect.addEventListener('change', (e) => {
      currentView = e.target.value
      sideBySide = false
      customizerOpen = false
      render()
    })
  }
  document.querySelectorAll('[data-toggle-split]').forEach(btn => {
    btn.addEventListener('click', () => {
      sideBySide = !sideBySide
      customizerOpen = false
      render()
    })
  })
  const compareIterSelect = document.querySelector('[data-set-compare-iteration]')
  if (compareIterSelect) {
    compareIterSelect.addEventListener('change', (e) => {
      compareIteration = Number(e.target.value)
      const compareFilteredThemes = Object.entries(themes).filter(([, t]) => t.iteration === compareIteration)
      if (compareFilteredThemes.length > 0) compareTheme = compareFilteredThemes[0][0]
      render()
    })
  }
  const compareSelect = document.querySelector('[data-set-compare]')
  if (compareSelect) {
    compareSelect.addEventListener('change', (e) => {
      compareTheme = e.target.value
      render()
    })
  }
  document.querySelectorAll('[data-toggle-customizer]').forEach(btn => {
    btn.addEventListener('click', () => {
      customizerOpen = !customizerOpen
      if (!customizerOpen) {
        primitives.forEach(({ key }) => document.documentElement.style.removeProperty(key))
      }
      render()
    })
  })
}

// --- Boot ---
render()
