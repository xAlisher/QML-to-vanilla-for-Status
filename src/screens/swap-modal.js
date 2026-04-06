export function renderSwapModal() {
  const center = `
    <div class="swap-backdrop">
      <div class="swap-modal">
        <div class="swap-modal__header">
          <div class="swap-modal__title-row">
            <span class="swap-modal__title">Swap</span>
            <span class="swap-modal__network">
              On:
              <span class="swap-modal__network-badge">E</span>
              Ethereum
            </span>
          </div>
          <button class="swap-modal__close" title="Close">×</button>
        </div>

        <div class="swap-modal__body">
          <div class="swap-panels">
            <!-- Pay panel -->
            <div class="swap-panel">
              <div class="swap-panel__left">
                <div class="swap-panel__label">Pay</div>
                <input class="swap-panel__amount" type="text" value="1.5" readonly />
                <div class="swap-panel__fiat">≈ $3,847.50</div>
              </div>
              <div class="swap-panel__right">
                <div class="swap-panel__token-selector">
                  <div class="swap-panel__token-icon" style="background:#627EEA">E</div>
                  <span class="swap-panel__token-symbol">ETH</span>
                  <span class="swap-panel__token-chevron">▾</span>
                </div>
                <div class="swap-panel__balance">Balance: 4.2091 ETH</div>
                <button class="swap-panel__max-btn">Max: 4.2091</button>
              </div>
            </div>

            <!-- Exchange button -->
            <button class="swap-exchange-btn" title="Swap direction">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M10 16l-3-3M10 16l3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Receive panel -->
            <div class="swap-panel">
              <div class="swap-panel__left">
                <div class="swap-panel__label">Receive</div>
                <input class="swap-panel__amount" type="text" value="5,842.31" readonly />
                <div class="swap-panel__fiat">≈ $3,841.12</div>
              </div>
              <div class="swap-panel__right">
                <div class="swap-panel__token-selector">
                  <div class="swap-panel__token-icon" style="background:#2775CA">D</div>
                  <span class="swap-panel__token-symbol">DAI</span>
                  <span class="swap-panel__token-chevron">▾</span>
                </div>
                <div class="swap-panel__balance">Balance: 1,200.00 DAI</div>
              </div>
            </div>
          </div>

          <!-- Quote -->
          <div class="swap-quote">
            1 ETH ≈ 3,894.87 DAI
            <span class="swap-quote__fiat">($2,565.00)</span>
          </div>
        </div>

        <div class="swap-modal__footer">
          <div class="swap-modal__footer-left">
            <span class="swap-modal__footer-label">Max slippage:</span>
            <span class="swap-modal__footer-value">0.5%</span>
            <button class="swap-modal__footer-edit">Edit</button>
          </div>
          <div class="swap-modal__footer-right">
            <span class="swap-modal__fees">
              Max fees: <span class="swap-modal__fees-value">$12.45</span>
            </span>
            <button class="swap-modal__submit">Swap</button>
          </div>
        </div>
      </div>
    </div>
  `

  return { nav: null, left: null, center, right: null }
}
