## Inventory Audit: discover-communities
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the inventory covers the visible parent composition in `CommunitiesPortalLayout.qml`, the scroll/grid composition in `CommunitiesGridView.qml`, and the two card delegates `StatusCommunityCard.qml` and `PromotionalCommunityCard.qml`.
- PASS: conditional compact-layout proxies, popup/dialog content, animation transitions, loading states, and empty states are explicitly excluded with source-backed reasons.
- PASS: the include/exclude decisions for token-gated header content, per-card tags, image/banner branches, and loading placeholders are consistent with the stated static mockup scope.
