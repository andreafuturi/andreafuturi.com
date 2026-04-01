# svg-path-commander import (Vite + Preact)

If the UI **stops rendering** and there is **no obvious error** in the console, check imports of `svg-path-commander`.

Importing it from **`node_modules`** (e.g. `import ... from "svg-path-commander"`) has caused silent failures with this stack; the app uses a **pinned esm.sh URL** in `client/lib/svgPathCommander.js` (currently `svg-path-commander@2.1.11`). The default export is a **subclass** that restores **v1-style constructor pivots** (bbox center); use it like upstream: `new SVGPathCommander(d)` or `new SVGPathCommander(d, { origin, round })`.

```js
import SVGPathCommander from "../lib/svgPathCommander.js";
```

`getChildrenBBox.js` uses this pattern. Prefer the same if you add new code paths that depend on this library.
