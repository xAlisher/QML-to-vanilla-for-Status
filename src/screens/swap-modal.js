export function renderSwapModal() {
  const center = `
    <div class="swap-backdrop">
      <div class="swap-modal">
        <div class="swap-modal__account-selector">
          <span class="swap-modal__account-identicon">🏦</span>
          <span class="swap-modal__account-name">Account 1</span>
          <svg class="swap-modal__account-indicator" width="16" height="16" viewBox="0 0 24 24" fill="none"><path clip-rule="evenodd" d="m6.46967 9.46967c.29289-.29289.76777-.29289 1.06066 0l4.11607 4.11613c.1953.1952.5119.1952.7072 0l4.1161-4.11613c.2929-.29289.7677-.29289 1.0606 0s.2929.76773 0 1.06063l-4.6464 4.6465c-.4882.4881-1.2796.4881-1.7678 0l-4.64643-4.6465c-.29289-.2929-.29289-.76774 0-1.06063z" fill="currentColor" fill-rule="evenodd"/></svg>
        </div>
        <div class="swap-modal__header">
          <div class="swap-modal__title-row">
            <span class="swap-modal__title">Swap</span>
          </div>
          <span class="swap-modal__network">
            On:
            <span class="swap-modal__network-filter">
              <img class="swap-modal__network-icon" src="data:image/svg+xml,%3Csvg fill='none' height='24' viewBox='0 0 500 500' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m250 500c138.071 0 250-111.929 250-250s-111.929-250-250-250-250 111.929-250 250 111.929 250 250 250z' fill='%23627eea'/%3E%3Cg fill='%23fff'%3E%3Cpath d='m254.967 65v253.177l112.947-66.765z' fill-opacity='.8'/%3E%3Cpath d='m254.967 65-112.951 187.412 112.951 66.765v-118.105z'/%3E%3Cpath d='m254.967 340.561v92.436l113.017-159.165z' fill-opacity='.8'/%3E%3Cpath d='m254.967 432.997v-92.436l-112.951-66.729z'/%3E%3C/g%3E%3C/svg%3E" alt="Ethereum" />
              <svg class="swap-modal__network-indicator" width="16" height="16" viewBox="0 0 24 24" fill="none"><path clip-rule="evenodd" d="m6.46967 9.46967c.29289-.29289.76777-.29289 1.06066 0l4.11607 4.11613c.1953.1952.5119.1952.7072 0l4.1161-4.11613c.2929-.29289.7677-.29289 1.0606 0s.2929.76773 0 1.06063l-4.6464 4.6465c-.4882.4881-1.2796.4881-1.7678 0l-4.64643-4.6465c-.29289-.2929-.29289-.76774 0-1.06063z" fill="currentColor" fill-rule="evenodd"/></svg>
            </span>
          </span>
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
                  <svg class="swap-panel__token-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"><path clip-rule="evenodd" d="m6.46967 9.46967c.29289-.29289.76777-.29289 1.06066 0l4.11607 4.11613c.1953.1952.5119.1952.7072 0l4.1161-4.11613c.2929-.29289.7677-.29289 1.0606 0s.2929.76773 0 1.06063l-4.6464 4.6465c-.4882.4881-1.2796.4881-1.7678 0l-4.64643-4.6465c-.29289-.2929-.29289-.76774 0-1.06063z" fill="currentColor" fill-rule="evenodd"/></svg>
                </div>
                <button class="swap-panel__max-btn">Max. 4.2091</button>
              </div>
            </div>

            <!-- Exchange button -->
            <button class="swap-exchange-btn" title="Swap direction">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="m6.53033 13.4697c-.29289-.2929-.76777-.2929-1.06066 0s-.29289.7677 0 1.0606l6.00003 6c.2929.2929.7677.2929 1.0606 0l6-6c.2929-.2929.2929-.7677 0-1.0606s-.7677-.2929-1.0606 0l-3.8661 3.8661c-.315.315-.8536.0919-.8536-.3536v-12.9822c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v12.9822c0 .4455-.5386.6686-.8536.3536z" fill="currentColor"/></svg>
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
                  <svg class="swap-panel__token-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none"><path clip-rule="evenodd" d="m6.46967 9.46967c.29289-.29289.76777-.29289 1.06066 0l4.11607 4.11613c.1953.1952.5119.1952.7072 0l4.1161-4.11613c.2929-.29289.7677-.29289 1.0606 0s.2929.76773 0 1.06063l-4.6464 4.6465c-.4882.4881-1.2796.4881-1.7678 0l-4.64643-4.6465c-.29289-.2929-.29289-.76774 0-1.06063z" fill="currentColor" fill-rule="evenodd"/></svg>
                </div>
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
            <div class="swap-modal__footer-value-row">
              <span class="swap-modal__footer-value">0.5%</span>
              <button class="swap-modal__footer-edit" title="Edit slippage">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path clip-rule="evenodd" d="m16.187 3.24584c1.2612-1.26112 3.3058-1.26112 4.567.00001 1.2611 1.26112 1.2611 3.3058 0 4.56692l-11.75175 11.75173c-.42718.4272-.95618.7384-1.53706.9044l-4.20764 1.2022c-.26236.0749-.54473.0018-.73767-.1912-.19294-.1929-.26611-.4753-.19115-.7376l1.20219-4.2077c.16596-.5809.47723-1.1099.90441-1.5371zm3.5044 1.06253c-.6743-.6743-1.7675-.6743-2.4418 0l-11.75175 11.75173c-.24661.2466-.4263.552-.52211.8873-.36205 1.2672.80948 2.4387 2.07664 2.0767.33534-.0958.64073-.2755.88734-.5222l11.75168-11.75166c.6743-.6743.6743-1.76756 0-2.44187z" fill="currentColor" fill-rule="evenodd"/></svg>
              </button>
            </div>
          </div>
          <div class="swap-modal__footer-right">
            <div class="swap-modal__fees-col">
              <span class="swap-modal__fees-label">Max fees:</span>
              <span class="swap-modal__fees-value">$12.45</span>
            </div>
            <button class="swap-modal__submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><g fill="currentColor"><path d="m4 19.25c-.41421 0-.75.3358-.75.75s.33579.75.75.75h16c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"/><path d="m12.75 4c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v4.52442c0 .30897-.2774.544-.5822.4932l-4.5445-.75742c-.40858-.06809-.795.20792-.8631.6165-.06809.40858.20792.795.6165.8631l4.2021.7003c.3464.0578.5269.4453.3482.7476l-2.32269 3.9308c-.21073.3566-.09246.8165.26414 1.0272.35661.2107.81652.0925 1.02724-.2642l2.17381-3.6788c.1936-.3275.6674-.3275.861 0l2.1738 3.6788c.2107.3567.6706.4749 1.0272.2642.3567-.2107.4749-.6706.2642-1.0272l-2.3227-3.9308c-.1787-.3023.0018-.6898.3482-.7476l4.2021-.7003c.4086-.0681.6846-.45452.6165-.8631s-.4545-.68459-.8631-.6165l-4.5445.75742c-.3048.0508-.5822-.18423-.5822-.4932z"/></g></svg>
              Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  `

  return { nav: null, left: null, center, right: null }
}
