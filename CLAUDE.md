# Status Redesign — CLAUDE.md

## Rule 0: Never rely on session memory

Every session starts cold. All knowledge must be recoverable from files in this repo.
- **Plans** live in `docs/plans/` — read before starting work
- **Skills** live in `docs/skills/` — reusable techniques, decisions, patterns
- **Tasks** live in `TASKS.md` — current state of all work items
- **This file** has project rules and context — read it first every session

## Rule 1: Skills-driven workflow

After every task:
1. Extract any reusable insight → write/update a skill in `docs/skills/`
2. Skills capture: techniques that worked, decisions and why, gotchas to avoid, patterns for future reuse
3. Before starting a task, check `docs/skills/` for relevant prior knowledge

Skill categories:
- `css-*` — token systems, layout, responsive patterns
- `vite-*` — build tooling, dev server config
- `qml-*` — reading QML source for HTML/CSS translation
- `design-*` — brand decisions, color rationale, typography choices
- `workflow-*` — process patterns (review flow, iteration, presentation)

## Rule 2: Tasks stay small and reviewable

- Each task = one reviewable change (max ~200 lines diff)
- Task names are specific: "Extract light tokens from tokens.json" not "Do tokens"
- Mark tasks with status: `[ ]` todo, `[x]` done, `[~]` in progress, `[!]` blocked
- After completing a task: update TASKS.md, extract skills, then stop for review

## Rule 3: Always read before writing

- Read CLAUDE.md + TASKS.md at session start
- Read relevant `docs/skills/` before starting a task category
- Read relevant `docs/plans/` for context on what we're building and why
- Read source files (QML, tokens.json) before generating CSS/HTML

## Rule 4: Always refer to source files, never your own summaries

When building screens, extracting tokens, or translating layouts:
- Re-read the actual source (QML, tokens.json, PDF) every time — don't work from prior summaries, plan descriptions, or memory
- Summaries lose detail, drift from reality, and compound errors
- The source file is the truth; your summary of it is not

## Rule 5: Ask Alisher before approval-triggering commands

Commands like `pnpm create`, `pnpm install`, `pnpm add` need user approval. Ask Alisher first. (Senty is not involved in this project.)

---

## What this is

Brand and design strategy project for the Status App & Network redesign. The source-of-truth strategy document is `Brand Strategy_ ᛋ Status .pdf`.

## Key concepts
- **Status**: Everyday app for private chat, self-custody wallet, and communities — built on Logos
- **Logos**: Privacy-first network layer (cryptography, protocols, no personal identifiers)
- **Brand essence**: Autonomy. Discretion. Culture.
- **Tagline**: "Privacy for everyday life"

## Design direction
- Warm minimalism, humane dark mode, honest materials
- Monochrome / low-chroma palette, high contrast, typographic hierarchy
- Modern grotesk UI (Inter) with monospace accents (Roboto Mono)
- Tone: calm, competent, hopeful — no hacker clichés

## Language guardrails
- Use: "private by default", "reduced trace", "no personal identifiers required"
- Avoid: "anonymous" (as absolute), outlaw/pirate/illegal framing

## Current active plan
`docs/plans/styling-concepts-v1.md` — 4 screens restyled for stakeholder sign-off

## Key source files
- Design tokens: `/home/alisher/designer/status-app/tokens.json`
- Brand strategy PDF: `/home/alisher/status-redesign/Brand Strategy_ ᛋ Status .pdf`
- QML sources: `/home/alisher/status-desktop/ui/` (layout, community, chat, wallet, swap)

## Tech stack
- Vite + vanilla HTML/CSS/JS
- CSS custom properties for design tokens
- Google Fonts: Inter, Roboto Mono
- No frameworks — static HTML partials, flexbox layout
