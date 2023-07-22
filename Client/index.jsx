import { hydrate, render} from "preact"
import Home from './Pages/Views/Home.jsx'
// import Atom from "./Components/Atom.jsx"
// import Circle from "./Components/Tools/Circle.jsx"
// import Grid from "./Components/Tools/Grid.jsx"
// import Merge from "./Components/Tools/Merge.jsx"


//vite hmr for development
window.isBrowser = typeof document !== "undefined"

//disable rendering on server (ssr)
window.ssr = false

window.prod = true
window.isMobile = 'ontouchstart' in window
// window.Atom = Atom
// window.Circle = Circle
// window.Merge = Merge
// window.Grid = Grid


const renderFn = window.ssr ? hydrate : render
if (window.isBrowser) {
  renderFn(<Home />, document.querySelector("#app"))
}
export default Home
