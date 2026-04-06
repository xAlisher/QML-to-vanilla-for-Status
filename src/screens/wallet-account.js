export function renderWalletAccount() {
  const accounts = [
    { name: 'Main Wallet', emoji: '🏦', balance: '$10,847.23', color: '#4360DF', active: true },
    { name: 'Savings', emoji: '🔒', balance: '$25,312.00', color: '#26A69A' },
    { name: 'DeFi', emoji: '🌱', balance: '$4,209.15', color: '#FE8F59' },
    { name: 'Watch-only', emoji: '👁', balance: '$0.00', color: '#909090', watchOnly: true },
  ]

  // Asset model fields from TokenDelegate: name, symbol, logoUri, balanceText, marketBalance, marketChangePct24hour
  const assets = [
    { name: 'Ethereum', symbol: 'ETH', fiat: '$6,412.50', crypto: '2.5000 ETH', color: '#627EEA', initial: 'E', change: '+3.2%', price: '$2,565.00', up: true },
    { name: 'Status Network Token', symbol: 'SNT', fiat: '$1,247.80', crypto: '42,000 SNT', color: '#4360DF', initial: 'S', change: '-1.4%', price: '$0.03', up: false },
    { name: 'Dai', symbol: 'DAI', fiat: '$2,000.00', crypto: '2,000.00 DAI', color: '#F5AC37', initial: 'D', change: '+0.01%', price: '$1.00', up: true },
    { name: 'USD Coin', symbol: 'USDC', fiat: '$850.00', crypto: '850.00 USDC', color: '#2775CA', initial: 'U', change: '+0.0%', price: '$1.00', up: true },
    { name: 'Wrapped Bitcoin', symbol: 'WBTC', fiat: '$336.93', crypto: '0.0052 WBTC', color: '#F09242', initial: 'W', change: '+2.8%', price: '$64,794', up: true },
  ]

  const left = `
    <div class="wallet-left">
      <div class="wallet-left__header">
        <span class="wallet-left__title">Wallet</span>
        <button class="wallet-left__add-btn" title="Add account">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v6M5 8h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>
      <div class="wallet-left__divider"></div>
      <div class="wallet-all-accounts">
        <div class="wallet-all-accounts__label">All accounts</div>
        <div class="wallet-all-accounts__balance">$40,368.38 <span class="wallet-all-accounts__currency">USD</span></div>
      </div>
      <div class="wallet-accounts">
        ${accounts.map(a => `
          <div class="wallet-account-item${a.active ? ' active' : ''}">
            <div class="wallet-account-item__icon" style="background:${a.color}20">${a.emoji}</div>
            <div class="wallet-account-item__info">
              <div class="wallet-account-item__name">${a.name}</div>
              <div class="wallet-account-item__balance">${a.balance}</div>
            </div>
            ${a.watchOnly ? '<span class="wallet-account-item__badge" title="Watch-only"><svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 3C4 3 1.5 7.5 1.5 7.5s2.5 4.5 6 4.5 6-4.5 6-4.5S11 3 7.5 3z" stroke="currentColor" stroke-width="1.2"/><circle cx="7.5" cy="7.5" r="2" stroke="currentColor" stroke-width="1.2"/></svg></span>' : ''}
          </div>
        `).join('')}
      </div>
      <div class="wallet-left__footer">
        <div class="wallet-left__footer-link">
          <span class="wallet-left__footer-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          Saved addresses
        </div>
      </div>
    </div>
  `

  const center = `
    <div class="wallet-header">
      <div class="wallet-header__top">
        <div class="wallet-header__emoji" style="background:#4360DF20">🏦</div>
        <span class="wallet-header__name">Main Wallet</span>
        <span class="wallet-header__balance">$10,847.23</span>
        <span class="wallet-header__spacer"></span>
        <div class="wallet-header__actions">
          <button class="wallet-header__action-btn wallet-header__action-btn--icon" title="Refresh">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8a6 6 0 0110.9-3.5M14 8a6 6 0 01-10.9 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M13 1v4h-4M3 15v-4h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="wallet-header__action-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="3" stroke="currentColor" stroke-width="1.2"/><path d="M1 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="5" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M14 14c0-1.7-1-3-2.5-3.7" stroke="currentColor" stroke-width="1.2"/></svg>
            0x1a2b...3c4d
          </button>
        </div>
      </div>
    </div>
    <div class="wallet-tabs">
      <button class="wallet-tab active">Assets</button>
      <button class="wallet-tab">Collectibles</button>
      <button class="wallet-tab">Activity</button>
    </div>
    <div class="wallet-assets">
      ${assets.map(a => `
        <div class="wallet-asset-row">
          <div class="wallet-asset__icon" style="background:${a.color}">${a.initial}</div>
          <div class="wallet-asset__info">
            <div class="wallet-asset__name">${a.name}</div>
            <div class="wallet-asset__symbol">${a.symbol}</div>
          </div>
          <div class="wallet-asset__values">
            <div class="wallet-asset__fiat">${a.fiat}</div>
            <div class="wallet-asset__crypto">${a.crypto}</div>
          </div>
          <div class="wallet-asset__change">
            <div class="wallet-asset__change-value wallet-asset__change-value--${a.up ? 'up' : 'down'}">${a.change}</div>
            <div class="wallet-asset__divider"></div>
            <div class="wallet-asset__change-value wallet-asset__change-value--${a.up ? 'up' : 'down'}">${a.price}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="wallet-footer">
      <button class="wallet-footer__btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 16V4M10 4l-4 4M10 4l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Send
      </button>
      <button class="wallet-footer__btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M10 16l-4-4M10 16l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Receive
      </button>
      <button class="wallet-footer__btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M13 4l3 3-3 3M7 16l-3-3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 7H8M4 13h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        Buy
      </button>
      <button class="wallet-footer__btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 8.5l-2 2 2 2"/><path d="M3.5 10.5h10c1.7 0 3-1.3 3-3v-1"/><path d="M14.5 11.5l2-2-2-2"/><path d="M16.5 9.5h-10c-1.7 0-3 1.3-3 3v1"/></g></svg>
        Swap
      </button>
    </div>
  `

  return { nav: null, left, center, right: null }
}
