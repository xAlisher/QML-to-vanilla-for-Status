> save the current themes as iteration #0

Done — all 13 themes tagged as iteration #0 with filter UI. https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/1

> add iteration filter to switch between themes of different iterations

Done — dropdown filter in toolbar, auto-derives from theme registry. https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/2

> let's make our theme names consistent: theme name + [Dark or Light] + # of colors in a theme

Done — all themes renamed to `Name Light/Dark (N)` pattern. https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/3

> add a short statement under each color theme explaining your reasoning behind each theme and how it matches the requirements

Done — 1-2 sentence reasoning per theme with clickable reference links. https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/4

> Let's revise all of the themes by feeding the description of this github ticket featuring all the product requirements

Done — audited all 15 themes against 8 requirements, scored PASS/WEAK/FAIL. 6 themes pass all requirements, 4 revised as iteration 1 (Hacker, Solarized, Current Light, Dracula). https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/5 + https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/10

> let's add a new light and dark theme based on the colors of Status app v1

Done — "Legacy v1" Light (68) + Dark (63), extracted from `status-im/status-legacy` source. Navy-tinted neutrals, teal success, deeper darks. https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/6

> let's add a new light and dark theme based on instructions in the brand strategy document

Done — "Quiet Authority" Light (65) + Dark (54). Near-monochrome editorial with single indigo accent. Second interpretation of the brand strategy (Concept A = warm minimalism, this = editorial restraint). Reference: Ned's proposal doc. https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/7

> the number of colors in a theme should be up to 4-5 colors

Explored and documented — 134 semantic tokens compress to 20 core primitives organized into 4-5 color families. Full analysis: https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/9 + https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/8

> make colors relevant to a privacy app and ensure colors support and make app highly legibility and readable
> the color palette should be comfortable for the eyes

Addressed across all revisions — audit scored every theme against privacy relevance, legibility, accessibility, side-viewer protection, and eye comfort. https://github.com/xAlisher/QML-to-vanilla-for-Status/blob/main/docs/theme-audit-v1.md

**Bonus**: compressed themes now have a live **Customize** button — click it to open a panel with 14 color pickers that re-theme the entire app in real-time. Change 20 primitives, see 134 tokens update instantly via `color-mix()`. No reload needed. Try it: https://xalisher.github.io/QML-to-vanilla-for-Status/ (iteration #1 → any Compressed theme → Customize)

https://github.com/xAlisher/QML-to-vanilla-for-Status/issues/12
