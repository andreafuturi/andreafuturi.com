import SVGPathCommander from "../lib/svgPathCommander.js";

export default function getChildrenBBox(childrenPaths) {
  return SVGPathCommander.getPathBBox(
    childrenPaths
      .map((path) => path.props.originalD || path.props.d)
      .join(" ")
  );
}
