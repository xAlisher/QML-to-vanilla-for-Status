# Figma Experiments — Lessons Learned

## Working with Variables and Libraries

### Creating Variables via MCP

**What works:**
- `figma.variables.createVariableCollection("Name")` — creates collection
- `collection.addMode("Dark")` — adds modes, `renameMode()` for defaults
- `figma.variables.createVariable("name/grouped", collection, "COLOR")` — slash in name creates folder grouping automatically
- `setValueForMode(modeId, { r, g, b, a })` — RGB values are 0-1 floats, not 0-255

**Gotcha: Binding fills to variables**
```javascript
// WRONG — doesn't work
box.setBoundVariable("fills", 0, "color", variable.id)

// RIGHT — bind at the paint level
const paint = figma.variables.setBoundVariableForPaint(
  { type: "SOLID", color: { r: 0.5, g: 0.5, b: 0.5 } },
  "color",
  variable
)
box.fills = [paint]
```

**Gotcha: Opacity on variable-bound paints**
Setting `paint.opacity = 0.1` after `setBoundVariableForPaint()` doesn't stick if you assign the paint directly. You must set opacity on the paint object before assigning to fills, OR reassign fills with the modified paint:
```javascript
const fills = variant.fills
const newFills = fills.map(f => ({ ...JSON.parse(JSON.stringify(f)), opacity: 0.1 }))
variant.fills = newFills
```

### Finding Published Library Variables

**The problem:** Our "Colors" library (from "Status Primitives" file) was published and visible in Figma's UI, but `search_design_system` MCP tool couldn't find variables by name searches like "surface text brand".

**What worked:**
- Searching for exact variable names: `surface/0` found it
- Searching for `danger` found `status/danger`
- Generic multi-word searches returned empty or only legacy library results

**The solution:** Get variable keys directly from the source file:
```javascript
// In the Primitives file (oKl1tjwtlsfEgjMSJQOTxV):
const collections = figma.variables.getLocalVariableCollections()
for (const c of collections) {
  for (const id of c.variableIds) {
    const v = figma.variables.getVariableById(id)
    // v.key is what you need for importVariableByKeyAsync()
  }
}
```

Then in the consumer file:
```javascript
const brandPrimary = await figma.variables.importVariableByKeyAsync("bda8124ac18d504a9cc042b7f83351c59a3f56d3")
```

**Save all keys upfront.** Don't rely on search — get keys from the source file once and reference them.

### Variable Keys Reference (Status Primitives)

| Variable | Key |
|----------|-----|
| surface/0 | `d1d94e4b32302b362f2d1671f96cfc5acb34c7a4` |
| surface/1 | `e7db79750c30c50cc31accd724e51a4662a39728` |
| surface/2 | `4461b295aac65d150be5ac2b9c85c96a2be7ab3e` |
| surface/3 | `b8dd5736cd4b1dafbf81f7f81dd7b48e54156f68` |
| surface/4 | `a9b2c47f0370877e515ee72d2811db2d856f5209` |
| text/primary | `5871640e8e1568036f81c1187304954fd5cfcc37` |
| text/secondary | `933f0b7dbfbc2fc6a8647f4260c8caa3edae7cdb` |
| brand/primary | `bda8124ac18d504a9cc042b7f83351c59a3f56d3` |
| brand/subtle | `b0c59cb26dc98592854ad853732fdd8744720484` |
| status/success | `4aa16cb98cf6f0b30b5d6aad36bc0ec4956de1ad` |
| status/danger | `ccb9648539195030813498499028b847292f3c8d` |
| status/warning | `24a4a8365fc42279b0799a3c5bf66e20c3f30de4` |
| status/mention | `d5440a4c085bd938bb13d56de003b0a65134fd44` |
| status/pin | `b04cae86d9783fcb835808c442c9c89e3c6cda13` |
| overlay/backdrop | `744d199cb8ed9e9df2d4d63f4c53ebf7a677ba85` |
| overlay/shadow | `c9aca5f2c1c35384c7bfa2ff15c0d683581e142b` |

### Creating Text Styles with Variable-Bound Sizes

```javascript
const ts = figma.createTextStyle()
ts.name = "Body/Default"  // slash = folder grouping
ts.fontName = { family: "Inter", style: "Medium" }
ts.lineHeight = { value: 22, unit: "PIXELS" }
ts.setBoundVariable("fontSize", sizeVariable)
```

Font style names in Figma: `"Semi Bold"` (with space), not `"SemiBold"`.

### Creating Component Sets

```javascript
// Create individual components first
const variants = []
variants.push(createButton("Type=Primary, Size=Large, Disabled=False", {...}))
variants.push(createButton("Type=Primary, Size=Large, Disabled=True", {...}))

// Combine into component set
const cs = figma.combineAsVariants(variants, figma.currentPage)
cs.name = "StatusButton"
```

Variant names must follow `Property=Value, Property=Value` format exactly.

### Rate Limits

- **Starter plan (Drafts)**: hits MCP rate limit quickly (~10-15 calls)
- **Project-level files**: much higher limits
- Always create files in a project, not drafts
- Project: "DS Experiments with Fergie and Senty"

### Variable Modes for Component States

**Attempted:** Using variable modes (Default/Disabled) with `button/opacity` bound to component opacity. Switching mode on parent frame = disabled state.

**Problem:** Designers must wrap buttons in frames and set mode on the wrapper — not ergonomic.

**Better approach:** Use variant property `Disabled=True/False` with different colors baked into each variant. More variants but much simpler to use.

### JSON Import Format (DTCG)

Figma imports variables via DTCG format:
```json
{
  "group": {
    "name": {
      "$type": "color",
      "$value": "#4360DF",
      "$description": "Brand primary"
    }
  }
}
```

Each JSON file = one mode. Import multiple files together = multiple modes on the same variables.

### Figma Files Created

| File | Key | Purpose |
|------|-----|---------|
| Status Primitives | `oKl1tjwtlsfEgjMSJQOTxV` | Color variables (16) with Light/Dark modes |
| Typography Token Primitives | `f4zfsNNWAzJ0Uu3vj1mfQN` | Typography variables (8) + text styles (10) |
| Components | `ZJ3wZmzzwwOPor8a7pOZMO` | UI components (StatusButton) |
