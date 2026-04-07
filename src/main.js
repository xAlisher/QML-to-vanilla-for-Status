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
import './tokens/fonts.css'

// Shell styles
import './shell/shell.css'

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
  'current-light':  { label: 'Current Light (70)',   tokens: 'current',   mode: 'light', iteration: 0, reason: 'Status v2 default. Blue-accented with high contrast — established brand identity, clear readability.' },
  'current-dark':   { label: 'Current Dark (67)',    tokens: 'current',   mode: 'dark',  iteration: 0, reason: 'Status v2 dark mode. Neutral grays with blue accents — reduces eye strain for extended use.' },
  'concept-light':  { label: 'Concept A Light (65)', tokens: 'concept',   mode: 'light', iteration: 0, reason: 'Warm minimalism. Desaturated neutrals convey trust and calm — privacy feels approachable, not clinical.' },
  'concept-dark':   { label: 'Concept A Dark (69)',  tokens: 'concept',   mode: 'dark',  iteration: 0, reason: 'Humane dark mode. Warm darks instead of cold grays — comfortable for hours, reduces side-viewer visibility.' },
  'nord-dark':      { label: 'Nord Dark (52)',       tokens: 'nord',      mode: 'dark',  iteration: 0, reason: 'Arctic-inspired muted palette. Low-chroma blues on dark surface — minimal glare, high legibility for privacy-conscious use.' },
  'dracula-dark':   { label: 'Dracula Dark (55)',    tokens: 'dracula',   mode: 'dark',  iteration: 0, reason: 'High-contrast dark with purple accents. Rich darks limit viewing angles — strong readability without bright glare.' },
  'monokai-dark':   { label: 'Monokai Dark (53)',    tokens: 'monokai',   mode: 'dark',  iteration: 0, reason: 'Developer-oriented warm dark. Amber/green accents on charcoal — familiar to technical users, easy on eyes.' },
  'logos-light':    { label: 'Logos Light (75)',      tokens: 'logos',     mode: 'light', iteration: 0, reason: 'Logos network identity. Purple-accented privacy palette — visually ties Status to the underlying privacy infrastructure.' },
  'solarized-dark': { label: 'Solarized Dark (46)',  tokens: 'solarized', mode: 'dark',  iteration: 0, reason: 'Scientifically optimized contrast. Fewest colors (46) — proven comfortable for extended reading, accessible for color blindness.' },
  'hacker-dark':    { label: 'Hacker Dark (47)',     tokens: 'hacker',    mode: 'dark',  iteration: 0, reason: 'Monochrome green-on-black. Maximum side-viewer protection — minimal palette reinforces digital sovereignty aesthetic.' },
  'basecamp-dark':  { label: 'Basecamp Dark (60)',   tokens: 'basecamp',  mode: 'dark',  iteration: 0, reason: 'Productivity-focused neutral dark. Restrained palette with warm grays — professional trust without visual noise.' },
  'neo-dark':       { label: 'Neo Dark (56)',        tokens: 'neo',       mode: 'dark',  iteration: 0, reason: 'Deep charcoal with cyan accents. High contrast ratio — strong privacy feel with modern, accessible readability.' },
  'neo-light':      { label: 'Neo Light (57)',       tokens: 'neo',       mode: 'light', iteration: 0, reason: 'Clean white with cyan accents. Bright but not glaring — accessible, simple, instills confidence in a privacy tool.' },
}

// --- Iterations (derived from theme registry) ---
const iterations = [...new Set(Object.values(themes).map(t => t.iteration))].sort()
let currentIteration = iterations[iterations.length - 1] // default to latest

// --- Font registry ---
const fonts = {
  'default':    { label: 'Inter' },
  'system':     { label: 'System UI' },
  'plex':       { label: 'IBM Plex' },
  'editorial':  { label: 'Serif' },
  'terminal':   { label: 'Monospace' },
}

// --- State ---
let currentScreen = 'community-channel'
let currentTheme = 'current-dark'
let currentFont = 'default'

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

function render() {
  const { tokens, mode } = themes[currentTheme]
  applyTheme(tokens, mode, currentFont)

  const app = document.querySelector('#app')
  app.innerHTML = `
    <div class="presentation">
      ${renderToolbar()}
      <div class="presentation__screen-area">
        <div class="shell" id="main-shell"></div>
      </div>
    </div>
  `
  const screenFn = screens[currentScreen].render
  document.getElementById('main-shell').innerHTML = renderShellInner(screenFn)

  bindToolbarEvents()
}

function renderToolbar() {
  // Filter themes by current iteration
  const filteredThemes = Object.entries(themes).filter(([, t]) => t.iteration === currentIteration)

  // Theme dropdown
  const themeOptions = filteredThemes.map(([key, { label }]) =>
    `<option value="${key}" ${currentTheme === key ? 'selected' : ''}>${label}</option>`
  ).join('')

  // Iteration buttons
  const iterationBtns = iterations.map(i =>
    `<button class="${currentIteration === i ? 'active' : ''}" data-set-iteration="${i}">#${i}</button>`
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
      <span class="presentation__toolbar-label">Iteration</span>
      <div class="presentation__toolbar-group">${iterationBtns}</div>
      <span class="presentation__toolbar-separator"></span>
      <span class="presentation__toolbar-label">Theme</span>
      <select class="presentation__toolbar-select" data-set-theme>${themeOptions}</select>
      <span class="presentation__toolbar-separator"></span>
      <span class="presentation__toolbar-label">Font</span>
      <select class="presentation__toolbar-select" data-set-font>${fontOptions}</select>
      <span class="presentation__toolbar-separator"></span>
      <span class="presentation__toolbar-label">Screen</span>
      <div class="presentation__toolbar-group">${screenBtns}</div>
      <div style="flex:1"></div>
      <span class="presentation__toolbar-reason">${themes[currentTheme].reason || ''}</span>
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

  document.querySelectorAll('[data-set-iteration]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentIteration = parseInt(btn.dataset.setIteration)
      const iterationThemes = Object.entries(themes).filter(([, t]) => t.iteration === currentIteration)
      if (iterationThemes.length > 0) currentTheme = iterationThemes[0][0]
      render()
    })
  })
  document.querySelectorAll('[data-set-screen]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentScreen = btn.dataset.setScreen
      render()
    })
  })
  document.querySelectorAll('[data-toggle-split]').forEach(btn => {
    btn.addEventListener('click', () => {
      render()
    })
  })
}

// --- Boot ---
render()
