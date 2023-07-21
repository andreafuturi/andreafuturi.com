import { useMemo } from "preact/hooks";
import SVGPathCommander from "svg-path-commander";

export default function useChildrenBBox(childrenPaths) {
  return useMemo(
    () =>
      SVGPathCommander.getPathBBox(
        childrenPaths
          .map((path) => path.props.originalD || path.props.d)
          .join(" ")
      ),
    [childrenPaths]
  );
}
