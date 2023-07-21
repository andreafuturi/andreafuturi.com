// Utility function to convert children into paths
import { toChildArray } from "preact";

export default function useChildrenAsPaths(children) {
  let paths = [];
  let childArray = toChildArray(children);
  while (childArray.length > 0) {
    const child = childArray.shift();
    if (child.type === "path") {
      paths.push(child);
    } else if (child.type === "use") {
      paths.push(child);
    } else if (child.type === "g") {
      childArray = childArray.concat(toChildArray(child.props.children));
    } else if (
      typeof child.type === "function" &&
      child.type.call &&
      child.props
    ) {
      if (child.props.d?.animation) paths.push(child);
      else
        childArray = childArray.concat(
          toChildArray(child.type.call(undefined, child.props))
        );
    }
  }
  return paths;
}
