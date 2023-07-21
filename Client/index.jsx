import { hydrate} from "preact"
import Home from './Pages/Views/Home.jsx'
// import Atom from "./Components/Atom.jsx"
// import Circle from "./Components/Tools/Circle.jsx"
// import Grid from "./Components/Tools/Grid.jsx"
// import Merge from "./Components/Tools/Merge.jsx"


//vite hmr for development
window.isBrowser = typeof document !== "undefined"
// window.Atom = Atom
// window.Circle = Circle
// window.Merge = Merge
// window.Grid = Grid

if (window.isBrowser) {
  hydrate(<Home />, document.querySelector("#app"))
}
export default Home