import { hydrate, render } from "preact";
import Home from "./Pages/Views/Home.jsx";
// import Atom from "./Components/Atom.jsx"
// import Circle from "./Components/Tools/Circle.jsx"
// import Grid from "./Components/Tools/Grid.jsx"
// import Merge from "./Components/Tools/Merge.jsx"

//vite hmr for development
globalThis.isBrowser = typeof document !== "undefined";

//disable rendering on server (ssr)
globalThis.ssr = false;

globalThis.prod = false;
globalThis.isMobile = "ontouchstart" in globalThis;
// globalThis.Atom = Atom
// globalThis.Circle = Circle
// globalThis.Merge = Merge
// globalThis.Grid = Grid

const renderFn = globalThis.ssr ? hydrate : render;
if (globalThis.isBrowser) {
  renderFn(<Home />, document.querySelector("#app"));
}
export default Home;
