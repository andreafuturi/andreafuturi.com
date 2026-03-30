import { useEffect, useMemo } from "preact/hooks";
import { useSpring } from "react-spring";
export const useMousePosition = (springProps, springDeps) => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0, ...springProps }), springDeps);

  useEffect(() => {
    const handleMove = event => {
      // Check if touch events are supported
      const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;

      // Get the correct client coordinates based on touch or mouse event
      const clientX = isTouchDevice ? event.touches[0].clientX : event.clientX;
      const clientY = isTouchDevice ? event.touches[0].clientY : event.clientY;

      // Update the animation spring
      api.start({ x: clientX, y: clientY });
    };

    // Add both mousemove and touchmove event listeners
    globalThis.addEventListener("mousemove", handleMove);
    globalThis.addEventListener("touchstart", handleMove);
    globalThis.addEventListener("touchmove", handleMove);

    return () => {
      // Clean up event listeners
      globalThis.removeEventListener("mousemove", handleMove);
      globalThis.removeEventListener("touchstart", handleMove);
      globalThis.removeEventListener("touchmove", handleMove);
    };
  }, [api]);

  return useMemo(() => ({ x, y }), [x, y]);
};
