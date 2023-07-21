import useChildrenAsPaths from "../../Functions/useChildrenAsPaths.js";
import useChildrenBBox from "../../Functions/useChildrenBBox.js";
import getAutoBBox from "../../Functions/getAutoBBox.js";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "preact/hooks";
import { useMousePosition } from "../../Functions/useMousePosition.js";
//in the future the script tag should be a component that does some compiling optimization to the funcion (and also caching?)
// implement pan and zoom and automatically filter out paths that are not visible (checking the bounding box of the path with the new modified viewBox)
function Layout({children, width, height, m, cover, noimage, frontend, ...attrs}) {
  const ref = useRef();
  const [autoWidth, autoHeight] = useDimensions(ref);
  let childrenBBox = { x: 0, y: 0, width: 0, height: 0 };
  if (!window.isBrowser) {
    const childrenPaths = useChildrenAsPaths(children);
    childrenBBox = useChildrenBBox(childrenPaths);
  }
  const image = (
    <g
      filter="url(#HighRelief)"
      transform={`translate(${-childrenBBox.x}, ${-childrenBBox.y})`}
    >
      {children}
    </g>
  );

  return (
    <>
      <Browser script={getAutoBBox} />
      <svg
        ref={ref}
        viewBox={`0 0 ${autoWidth || childrenBBox.width} ${
          autoHeight || childrenBBox.height
        }`}
        style={"margin:" + m + "px"}
        width={noimage ? undefined : width || "100%"}
        height={noimage ? undefined : height || "100%"}
        xmlns={noimage ? undefined : "http://www.w3.org/2000/svg"}
        preserveAspectRatio={cover ? "xMidYMid slice" : undefined}

        {...attrs}
      ><rect height={"100%"} width="100%" fill="#323232"          filter="url(#LowRelief)" />
        <Light
          width={autoWidth|| childrenBBox.width}
          height={autoHeight || childrenBBox.height}
        
        />
        {image}
      </svg>
    </>
  );
}

const Light = (props) => {
  const [mouseX, setMouseX] = useState(props.width/2);
  const [mouseY, setMouseY] = useState(props.height/2);
  const [z, setZ] = useState(10000);
  if (window.isBrowser) {
   useMousePosition({
      onChange: ({ value }) => {
        setMouseX((value.x / window.innerWidth) * props.width);
        setMouseY((value.y / window.innerHeight) * props.height);
      },
    }, [window.innerWidth, window.innerHeight, props.width, props.height]);
    useEventListener("wheel", (event) => {
        if (event.deltaY < 0) {
          setZ((prevZ) => prevZ + 2000);
        } else {
          setZ((prevZ) => prevZ - 2000);
        }
      });
  }

  return (
    <>
      <filter id="HighRelief">
        <feGaussianBlur in="SourceAlpha" stdDeviation="10000" result="blur" />
        <feDiffuseLighting in="blur" surfaceScale="0.5">
          <fePointLight  x={mouseX} y={mouseY} z={z}  />
        </feDiffuseLighting>

        <feComposite
          in="SourceGraphic"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
        />
      </filter>
      <filter id="LowRelief">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.08" result="blur" />
        <feDiffuseLighting in="blur" surfaceScale="-25">
          <fePointLight z="20" />
        </feDiffuseLighting>
        <feComposite
          in="SourceGraphic"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
        />
      </filter>
    </>
  );
};
function Browser({ script }) {
    //should check if the script is already loaded in the browser or just make sure has unique name
    return window.isBrowser ? (
      <script>
        {script.toString()}
        {`${script.name}()`}
      </script>
    ) : null;
  }

  function useDimensions(ref) {
    const [autoWidth, setWidth] = useState();
    const [autoHeight, setHeight] = useState();
    useLayoutEffect(() => {
      const box = ref.current.getBBox();
      setWidth(Math.round(box.width));
      setHeight(Math.round(box.height));
    });
    return [autoWidth, autoHeight];
  }
export default Layout;

//const [visiblePaths, setVisiblePaths] = useState(image);
//const onload = globalThis.isBrowser ? {} : {onload: 'getAutoBBox(evt)'}

// Hook
function useEventListener(eventName, handler, element = window) {
    // Create a ref that stores handler
    const savedHandler = useRef();
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
    useEffect(
      () => {
        // Make sure element supports addEventListener
        // On
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;
        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => savedHandler.current(event);
        // Add event listener
        element.addEventListener(eventName, eventListener);
        // Remove event listener on cleanup
        return () => {
          element.removeEventListener(eventName, eventListener);
        };
      },
      [eventName, element] // Re-run if eventName or element changes
    );
  }