## Inventory Audit: discover-communities
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: the inventory covers the visible parent composition in `CommunitiesPortalLayout.qml`, the scroll/grid composition in `CommunitiesGridView.qml`, and the two card delegates `StatusCommunityCard.qml` and `PromotionalCommunityCard.qml`.
- PASS: conditional compact-layout proxies, popup/dialog content, animation transitions, loading states, and empty states are explicitly excluded with source-backed reasons.
- PASS: the include/exclude decisions for token-gated header content, per-card tags, image/banner branches, and loading placeholders are consistent with the stated static mockup scope.

## Code Audit: discover-communities
Status: PASS
Date: 2026-04-07

### Findings:
- PASS: `.discover` now uses `padding: 10px 32px 64px 64px`, which matches `CommunitiesPortalLayout.qml` `layoutBottomMargin: Theme.xlPadding*2` and `CommunitiesGridView.bottomPadding: d.layoutBottomMargin`.
- PASS: `.community-card` now has a default `box-shadow: 0 2px 20px var(--drop-shadow)` and hover `box-shadow: 0 2px 30px var(--backdrop-color)`, matching `StatusCommunityCard.qml` `DropShadow` with `verticalOffset: 2`, `radius: 20/30`, and `color: dropShadow/backdropColor` for normal vs hovered state.
- PASS: no additional regressions were introduced in the touched selectors; the diff stays scoped to the two source-backed mismatches from the inventory/code review loop.
