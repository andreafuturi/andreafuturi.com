import useChildrenAsPaths from "./useChildrenAsPaths.js"
import useChildrenBBox from "./useChildrenBBox.js"

export default function rendering(children, id) {
    //we should have our own render function
    const paths = useChildrenAsPaths(children)
    const bbox = useChildrenBBox(paths)
    return `<svg id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}">` + constructHtmlFromPaths(paths) + `</svg>` 
}
function constructHtmlFromPaths(paths) {
    const pathStrings = paths.map((path) => {
      const propertiesString = Object.entries(path.props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");
      return `<path ${propertiesString} />`;
    });
    return pathStrings.join("");
  }