import { useEffect, useLayoutEffect, useRef, useState } from "preact/hooks";
import { inlineImport } from "../../../lib/framework-utils.jsx";
import getAutoBBox from "../../Functions/getAutoBBox.js";
import getChildrenBBox from "../../Functions/getChildrenBBox.js";
import useChildrenAsPaths from "../../Functions/useChildrenAsPaths.js";
import { useMousePosition } from "../../Functions/useMousePosition.js";
//in the future the script tag should be a component that does some compiling optimization to the funcion (and also caching?)
// implement pan and zoom and automatically filter out paths that are not visible (checking the bounding box of the path with the new modified viewBox)
function Layout({ children, width, height, m, cover, noimage, frontend, withLight = true, ...attrs }) {
  const ref = useRef();
  const [autoWidth, autoHeight] = useDimensions(ref);
  let childrenBBox = { x: 0, y: 0, width: 0, height: 0 };
  if (!globalThis.isBrowser) {
    const childrenPaths = useChildrenAsPaths(children);
    childrenBBox = getChildrenBBox(childrenPaths);
  }
  const image = (
    <g filter={withLight ? "url(#HighRelief)" : undefined} transform={`translate(${-childrenBBox.x}, ${-childrenBBox.y})`}>
      {children}
    </g>
  );

  return (
    <>
      <svg
        ref={ref}
        viewBox={`0 0 ${autoWidth || childrenBBox.width} ${autoHeight || childrenBBox.height}`}
        style={"margin:" + m + "px"}
        width={noimage ? undefined : width || "100%"}
        height={noimage ? undefined : height || "100%"}
        xmlns={noimage ? undefined : "http://www.w3.org/2000/svg"}
        preserveAspectRatio={cover ? "xMidYMid slice" : undefined}
        {...attrs}>
        <rect height={"100%"} width="100%" fill="#323232" filter="url(#LowRelief)" />
        <Light width={autoWidth || childrenBBox.width} height={autoHeight || childrenBBox.height} />
        {image}
      </svg>
      {inlineImport({ src: getAutoBBox, selfExecute: true })}
    </>
  );
}

const Light = props => {
  const pos = useMousePosition();
  const [z, setZ] = useState(10000);
  const isDesktopRef = useRef(true);

  const isDesktop =
    globalThis.isBrowser &&
    globalThis.matchMedia("(min-device-width: 960px)").matches;
  isDesktopRef.current = isDesktop;

  useEffect(() => {
    if (!globalThis.isBrowser) return;
    const mq = globalThis.matchMedia("(min-device-width: 960px)");
    const syncZ = () => setZ(mq.matches ? 10000 : 15000);
    syncZ();
    mq.addEventListener("change", syncZ);
    return () => mq.removeEventListener("change", syncZ);
  }, []);

  useEventListener("wheel", event => {
    if (!isDesktopRef.current) return;
    if (event.deltaY < 0) {
      setZ(prevZ => prevZ + 2000);
    } else {
      setZ(prevZ => prevZ - 2000);
    }
  });

  const iw = globalThis.innerWidth || 1;
  const ih = globalThis.innerHeight || 1;
  const w = props.width ?? 0;
  const h = props.height ?? 0;
  const mouseX = isDesktop ? (pos.x / iw) * w : w / 2;
  const mouseY = isDesktop ? (pos.y / ih) * h : h / 2;

  return (
    <>
      <filter id="HighRelief">
        <feGaussianBlur in="SourceAlpha" stdDeviation="10000" result="blur" />
        <feDiffuseLighting in="blur" surfaceScale="0.5">
          <fePointLight x={mouseX} y={mouseY} z={z} />
        </feDiffuseLighting>

        <feComposite in="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
      </filter>
      <filter id="LowRelief">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.08" result="blur" />
        <feDiffuseLighting in="blur" surfaceScale="-25">
          <fePointLight z="20" />
        </feDiffuseLighting>
        <feComposite in="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
      </filter>
    </>
  );
};

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
/** No `= window` default — that runs during SSR (Deno) where `window` is undefined. */
function useEventListener(eventName, handler, element) {
  const savedHandler = useRef();
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(
    () => {
      const target = element ?? (typeof window !== "undefined" ? window : undefined);
      if (!target?.addEventListener) return;
      const eventListener = event => savedHandler.current(event);
      target.addEventListener(eventName, eventListener);
      return () => {
        target.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element],
  );
}
