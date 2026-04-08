# Builder Rules

## Rule 1: Manual testing before every merge

Every change must be visually reviewed and approved by Alisher before merging to main.
- After completing a task, stop and ask Alisher to test in the browser
- Do NOT push to main until Alisher confirms it looks correct
- If Alisher finds issues, fix them before the merge

## Rule 2: Lessons learned after every approval

After every approved task:
1. Extract lessons → write/update a skill in `docs/skills/`
2. Skills capture: what worked, what broke, gotchas, patterns
3. Update TASKS.md with completion status

## Rule 3: Small reviewable changes

- One screen or one feature per task
- Max ~200 lines diff per change
- Stop for review between tasks — don't batch multiple screens

## Rule 4: Source-first detail work

When fixing details on a screen:
1. Re-read the QML source file for that screen
2. Compare against the current HTML/CSS output
3. Identify every mismatch (spacing, colors, structure, missing elements)
4. Fix systematically — don't approximate

## Rule 5: Test across all themes

Before asking for review, verify the change works with:
- Current Light / Current Dark
- Concept Light / Concept Dark
- Neo Light / Neo Dark
- At minimum, check that token references resolve (no broken colors/backgrounds)
