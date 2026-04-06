export function renderDiscoverCommunities() {
  const communities = [
    { name: 'Status', desc: 'An open source, Ethereum-based app for private, secure communication and transactions.', members: 4832, active: 312, color: '#4360DF', initial: 'S' },
    { name: 'Ethereum', desc: 'The official Ethereum community. Discuss protocol upgrades, EIPs, and ecosystem growth.', members: 12400, active: 1203, color: '#627EEA', initial: 'E' },
    { name: 'Privacy Advocates', desc: 'A community for people who care about digital rights, encryption, and online freedom.', members: 2100, active: 89, color: '#26A69A', initial: 'P' },
    { name: 'DeFi Builders', desc: 'Building the future of decentralized finance. Share projects, research, and ideas.', members: 6700, active: 445, color: '#FE8F59', initial: 'D' },
    { name: 'Keycard Users', desc: 'Hardware security for your keys. Tips, troubleshooting, and feature requests.', members: 890, active: 34, color: '#887AF9', initial: 'K' },
    { name: 'Logos Research', desc: 'Discussion about Logos network protocols, privacy primitives, and decentralized infrastructure.', members: 1560, active: 78, color: '#8B3131', initial: 'L' },
  ]

  // Tags from StatusCommunityTag: emoji + name, DemiBold, primaryColor1
  const tags = [
    { emoji: '🌐', name: 'all' },
    { emoji: '🔒', name: 'privacy' },
    { emoji: '💰', name: 'defi' },
    { emoji: '💬', name: 'social' },
    { emoji: '🏛️', name: 'governance' },
    { emoji: '🛠️', name: 'dev tools' },
    { emoji: '🎨', name: 'art & culture' },
  ]

  const center = `
    <div class="discover">
      <div class="discover__title">Discover Communities</div>
      <div class="discover__controls">
        <div class="discover__search">
          <svg class="discover__search-icon" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M11 11l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          <input class="discover__search-input" type="text" placeholder="Search" readonly />
        </div>
        <div style="flex:1"></div>
        <div class="discover__actions">
          <button class="discover__action-btn discover__action-btn--secondary">Join Community</button>
          <button class="discover__action-btn discover__action-btn--primary">Create New Community</button>
        </div>
      </div>
      <div class="discover__tags">
        ${tags.map((t, i) => `<span class="discover__tag${i === 0 ? ' active' : ''}">${t.emoji} ${t.name}</span>`).join('')}
      </div>

      <div class="discover__section-label">Featured</div>
      <div class="discover__grid">
        ${communities.slice(0, 3).map(c => communityCard(c)).join('')}
      </div>

      <div class="discover__section-label">All</div>
      <div class="discover__grid">
        ${communities.slice(0, 2).map(c => communityCard(c)).join('')}
        ${promoCard()}
        ${communities.slice(2).map(c => communityCard(c)).join('')}
      </div>
    </div>
  `

  return { nav: null, left: null, center, right: null }
}

function communityCard({ name, desc, members, active, color, initial }) {
  return `
    <div class="community-card">
      <div class="community-card__banner" style="background:${color}"></div>
      <div class="community-card__avatar">
        <div class="community-card__avatar-inner" style="background:${color}">${initial}</div>
      </div>
      <div class="community-card__content">
        <div class="community-card__name">${name}</div>
        <div class="community-card__description">${desc}</div>
        <div class="community-card__meta">
          <span class="community-card__meta-item">
            <svg class="community-card__meta-icon" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="3" stroke="currentColor" stroke-width="1.2"/><path d="M1 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="5" r="2" stroke="currentColor" stroke-width="1.2"/><path d="M14 14c0-1.7-1-3-2.5-3.7" stroke="currentColor" stroke-width="1.2"/></svg>
            ${formatNumber(members)}
          </span>
          <span class="community-card__meta-item">
            <svg class="community-card__meta-icon community-card__meta-icon--small" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 3.5L12 5.5l-2.5 2.5L10 12 7 10l-3 2 .5-4L2 5.5l3.5-1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>
            ${formatNumber(active)}
          </span>
        </div>
      </div>
    </div>
  `
}

function promoCard() {
  return `
    <div class="promo-card">
      <div class="promo-card__icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10.9996 21.0001C10.9996 18.3479 12.0531 15.8044 13.9285 13.929C15.8039 12.0537 18.3474 11.0001 20.9996 11.0001M6.99981 21.0003C6.99981 17.2873 8.4748 13.7263 11.1003 11.1008C13.7258 8.47532 17.287 6.99996 21.0001 6.99996M15.4732 18.6635C15.7715 17.9581 16.2049 17.3095 16.7569 16.7574C17.309 16.2053 17.9576 15.772 18.663 15.4737C19.9543 14.9277 20.5999 14.6548 20.7998 14.3534C20.9996 14.0519 20.9996 13.568 20.9996 12.6001V5.40005C20.9996 4.24389 20.9996 3.66581 20.5912 3.30735C20.1827 2.94888 19.6568 3.01767 18.605 3.15526C10.5353 4.21081 4.21032 10.5358 3.15477 18.6055C3.01719 19.6573 2.94839 20.1832 3.30686 20.5916C3.66533 21.0001 4.2434 21.0001 5.39956 21.0001H12.5996C13.5675 21.0001 14.0515 21.0001 14.3529 20.8002C14.6543 20.6004 14.9273 19.9548 15.4732 18.6635Z" stroke="currentColor" stroke-width="1.4"/></svg>
      </div>
      <div class="promo-card__title">Want to see your community here?</div>
      <div class="promo-card__text">Help more people discover your community — start or join the vote to get it on the board.</div>
      <div class="promo-card__divider"></div>
      <div class="promo-card__actions">
        <button class="promo-card__btn">Learn more ↗</button>
        <button class="promo-card__btn">Initiate the vote ↗</button>
      </div>
    </div>
  `
}

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  return n.toString()
}
