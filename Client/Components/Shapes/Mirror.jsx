import { toChildArray } from "https://esm.sh/preact";
import { useMemo } from "https://esm.sh/preact/hooks";
import { quasiPeriodBehaviour } from "../../Functions/getPeriodic.js";
import smart from "../../Functions/smart.js";
import useChildrenAsPaths from "../../Functions/useChildrenAsPaths.js";
import useChildrenBBox from "../../Functions/useChildrenBBox.js";
import Transform from "../Tools/Transform.jsx";

const Mirror = ({ children, axis = "y", spacing = 2000, iterations = 4, alternate = true, ...restProps }) => {


const mirror = useMemo(() => {

    //preparing a var to store the previous level
    let previousLevel = children;
    const result = [previousLevel]

    for (let i = 1; i < iterations; i++) {

        //on every other iteration we will calucate dimensions of previous level and therefore how much its flipped copy has to be moved would be cool to that automatically without calculating size
        const levelPaths = useChildrenAsPaths(previousLevel);
        const levelBBox = useChildrenBBox(levelPaths);

        const x = axis === "x" ? levelBBox.width + spacing : 0;
        const y = axis === "y" ? levelBBox.height + spacing : 0;
        
        //determine flip axis 
        if (alternate) {
            if (i % 2 === 0) {
                axis = "x"
            } else {
                axis = "y"
            }
        }
        
        //determine where to flip the child
        const flipX = axis === "x" 
        const flipY = axis === "y"

        //we create the new level and push it to the result
        let newLevel = <Transform x={x} y={y}  flipX={flipX || quasiPeriodBehaviour(i-1)} flipY={flipY}>{levelPaths}</Transform>
        result.push(newLevel)
        //we set the previous level equal to the new one
        previousLevel = [previousLevel, newLevel]
      }
    
    return result
}, [children, axis, spacing, iterations, alternate]);

    return smart(mirror, restProps);
};
  export default Mirror