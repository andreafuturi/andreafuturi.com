import { useMemo } from "https://esm.sh/preact/hooks";
import SVGPathCommander from "https://cdn.jsdelivr.net/npm/svg-path-commander/dist/svg-path-commander.esm.min.js";

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
