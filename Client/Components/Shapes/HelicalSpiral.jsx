import { useMemo } from "preact/hooks";
import { quasiPeriodBehaviour } from "../../Functions/getPeriodic.js";
import smart from "../../Functions/smart.js";
import Transform from "../Tools/Transform.jsx";

const HelicalSpiral = ({ r=70, children, reverse, evenOddHorizontalFlip=true, radiusStep = 500000, angleStep = 20,simmetries, ...restProps }) => {
    const numSteps = Math.floor(360 / angleStep);
    const spiral = useMemo(() => {
      const spirals = [];
      for (let j = 0; j < simmetries; j++) {
        const helix = [];
        const offset = j * Math.PI * 2/simmetries;
        for (let i = 0; i < numSteps; i++) {
          const rCurrent = r + i * radiusStep;
          const x = rCurrent * Math.cos(i * angleStep * Math.PI / 180 + offset);
          const y = rCurrent * Math.sin(i * angleStep * Math.PI / 180 + offset);
          const rotate = (i * angleStep) % 360;
          if (reverse) {
            helix.push(
              <Transform fill="gold" x={-x} y={-y}  flipX={quasiPeriodBehaviour(i)} flipY={i % 2 === 1 && evenOddHorizontalFlip} scale={i * 2.5}>
                {children}
              </Transform>
            );
          } else {
            helix.push(
              <Transform fill="gold" x={x} y={y} flipX={quasiPeriodBehaviour(i)} flipY={i % 2 === 1 && evenOddHorizontalFlip} scale={-i * 2.5}>
                {children}
              </Transform>
            );
          }
        }
        spirals.push(helix);
      }
      return spirals;
    }, [children, r, angleStep, radiusStep, reverse, evenOddHorizontalFlip]);
  return smart(spiral, restProps)
  };
  export default HelicalSpiral;
  