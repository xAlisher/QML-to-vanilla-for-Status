# Pause State — Unresolved Items

Captured at: 2026-04-06, mid-session. Resume from here.

## Screen 1: Community Channel — Outstanding Fixes

### Critical (broken/incomplete)

1. **Chat header missing avatar**
   - StatusChatInfoButton.qml has StatusSmartIdenticon (36×36) before channel icon + title
   - Our HTML shows only: icon + title + description
   - Need: identicon → icon → title row, then subtitle row below

2. **Chat header missing pin count**
   - QML subtitle row: description + 1px vertical separator + pin icon (14×14) + "N pinned" text (clickable)
   - Our HTML: only description text
   - Need: full subtitle row with separator + pin indicator

3. **Message header incomplete (3 of 11 elements)**
   - Present: display name, timestamp, delivery status
   - Missing in HTML (CSS classes exist but unused):
     - Secondary name in parens (ENS name) — `.message__secondary-name`
     - Separator dots — `.message__header-dot`
     - Tertiary detail (compressed sender ID)
   - Missing entirely (no CSS or HTML):
     - Message origin info
     - Verification icons (trusted/untrusted/blocked/contact)
     - Resend button (expired messages)

4. **Reply connector path wrong**
   - QML: Shape with PathLine → PathArc (radiusX/Y: 13), 3px stroke
   - Ours: CSS border with border-bottom-left-radius: 8px (sharp L, not curved arc)
   - Need: SVG path or corrected CSS radius (13px) and proper positioning

### Medium

5. **Reply connector top margin**
   - QML: Layout.topMargin: profileImage.height/2 = 18px
   - Ours: top: 50% (relative to container, not fixed 18px)

6. **Display name color confirmed correct** — primaryColor1 (blue) ✓

7. **Chat header muted icon** — only visible when channel muted, low priority for mockup

### Low (deferred for static mockup)

8. Resend button (expired messages only)
9. Message origin info (bridge messages only)
10. Verification icons (need contact state data)

## Screens 2-4: Pending Same-Level Audit

Discover Communities, Swap Modal, Wallet Account were rebuilt from QML specs but have NOT been through the Layer 0 complexity audit + component inventory process. They likely have similar gaps to what we found in Screen 1 across 5 passes.

## Process Issue: No Enforcement Gate

The root cause of all misses: rules are advisory, nothing prevents building code without completing the audit. Solution in progress: auditor agent that reviews component inventory and code before merge.

## Infrastructure Needed

- [ ] smux (tmux-based multi-agent communication)
- [ ] Auditor agent instructions (`docs/audit/AUDITOR.md`)
- [ ] Builder workflow doc (`docs/audit/BUILDER.md`)
- [ ] Git branch workflow for audit trail
