# Theme Audit vs Product Requirements

Requirements from status-im/status-app#20329. Scale: PASS / WEAK / FAIL.

## Scoring Criteria

| # | Requirement | How to assess |
|---|------------|---------------|
| 1 | Simple (4-5 colors) | Count color families (tracked in #8/#9) |
| 2 | Privacy app inspiration | Subjective — dark/muted palettes score higher |
| 3 | High legibility/readability | Text-on-bg contrast ratio (WCAG AA = 4.5:1) |
| 4 | Plain/simple but not boring | Subjective — accent variety without excess |
| 5 | Sovereignty/trust/freedom | Subjective — calm, confident, not playful |
| 6 | Side-viewer protection | Darker bg = better. Pure black best, light worst |
| 7 | Accessible (color blindness) | Avoid red-green only. Check danger vs success distinction |
| 8 | Eye comfort (no glare) | Avoid pure white bg, avoid neon/saturated accents |

## Audit Results

| Theme | #1 Simple | #2 Privacy | #3 Legible | #4 Not boring | #5 Trust | #6 Side-view | #7 Accessible | #8 Comfort | Issues |
|-------|-----------|-----------|------------|---------------|----------|-------------|---------------|-----------|--------|
| Current Light (70) | WEAK | WEAK | PASS | PASS | PASS | FAIL | PASS | WEAK | Pure white bg (#FFF) glares. Not privacy-coded. |
| Current Dark (67) | WEAK | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Neutral gray — functional but generic. |
| Concept A Light (65) | PASS | PASS | PASS | PASS | PASS | FAIL | PASS | PASS | Warm off-white (#FAFAF8) reduces glare. Still light. |
| Concept A Dark (69) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Strong all-around. Warm darks feel humane. |
| Nord Dark (52) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Excellent balance. Muted, professional, comfortable. |
| Dracula Dark (55) | PASS | PASS | PASS | PASS | WEAK | PASS | WEAK | PASS | Purple accent is playful, not sovereign. Red-purple confusion risk. |
| Monokai Dark (53) | WEAK | WEAK | PASS | PASS | WEAK | PASS | PASS | PASS | Dev-oriented — not privacy-coded. Warm and comfortable. |
| Logos Light (75) | WEAK | PASS | PASS | PASS | PASS | FAIL | PASS | WEAK | Too many colors (75). Light bg. |
| Solarized Dark (46) | PASS | PASS | WEAK | PASS | PASS | PASS | PASS | PASS | Secondary text (#586E75 on #002B36) is low contrast. |
| Hacker Dark (47) | PASS | PASS | WEAK | FAIL | WEAK | PASS | FAIL | FAIL | Green-on-black is illegible at length. Mono-hue = accessibility fail. |
| Basecamp Dark (60) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Strong. Neutral, professional, comfortable. |
| Neo Dark (56) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Deep navy is strong for privacy. Good contrast. |
| Neo Light (57) | PASS | PASS | PASS | PASS | PASS | FAIL | PASS | PASS | Light bg hurts side-view. Otherwise clean. |
| Legacy v1 Light (68) | WEAK | WEAK | PASS | PASS | PASS | FAIL | PASS | PASS | Navy tint adds character. Light bg = weak side-view. |
| Legacy v1 Dark (63) | PASS | PASS | PASS | PASS | PASS | PASS | PASS | PASS | Deep navy darks are distinctive and private-feeling. |

## Themes Needing Revision

### Critical fixes

**Hacker Dark** — FAIL on #4 (boring/illegible), #7 (accessibility), #8 (eye strain)
- Problem: green-on-black is a cliché, illegible for extended use, fails color blindness
- Fix: keep the monochrome ethos but shift to a neutral monochrome (gray/white on near-black) with a subtle accent for interactive elements
- Alternative: remove from the set — it doesn't serve the privacy app goals

**Solarized Dark** — WEAK on #3 (legibility)
- Problem: secondary text (#586E75) on bg (#002B36) = ~3.7:1 contrast (fails WCAG AA)
- Fix: lighten secondary text to at least #7B8F97 for 4.5:1

### Moderate improvements

**Current Light** — WEAK on #1, #2, #8
- Problem: pure white (#FFFFFF) bg causes glare, doesn't feel privacy-oriented
- Fix: shift bg to off-white (#FAFBFC or #F8F9FA) to reduce glare

**Dracula Dark** — WEAK on #5, #7
- Problem: purple accent feels playful not sovereign. Red (#FF5555) and purple can confuse some color blindness types
- Fix: shift accent toward blue-purple, ensure danger vs accent is clearly distinguishable

**Logos Light** — WEAK on #1, #8
- Problem: 75 unique colors (most complex). Light bg.
- Fix: reduce palette complexity (tracked in #8)

**Monokai Dark** — WEAK on #2, #5
- Problem: amber/green accent palette reads "developer IDE" not "privacy app"
- Fix: minor — adjust accent toward cooler tones for privacy feel

### No changes needed

These themes pass all requirements well:
- Concept A Dark, Nord Dark, Basecamp Dark, Neo Dark, Legacy v1 Dark, Current Dark

### Light themes inherently weaker on #6

All light themes fail side-viewer protection (#6). This is expected — the requirement says "as much as possible/reasonable." Light themes exist for user preference, not side-view protection.

## Proposed Changes

| Theme | Change | Severity |
|-------|--------|----------|
| Hacker Dark | Shift green to neutral gray/white text, add subtle blue accent | Critical |
| Solarized Dark | Lighten secondary text #586E75 → #7B8F97 | Moderate |
| Current Light | Shift bg #FFFFFF → #FAFBFC | Minor |
| Dracula Dark | Shift accent more blue, check danger distinction | Minor |
