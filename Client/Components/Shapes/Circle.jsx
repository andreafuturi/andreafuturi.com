import { quasiPeriodBehaviour } from "../../functions/getPeriodic.js";
import smart from "../../functions/smart.js";
import Transform from "../tools/Transform.jsx";

const Circle = ({ r, repetition, children,reverse, evenOddHorizontalFlip,  sizeIncreaser = 1, ...restProps }) => {
  const angle = 360 / repetition;
  const circle = Array.from({ length: repetition }, (_, i) => {
      let x = r * Math.cos(i * angle * Math.PI / 180) *  sizeIncreaser
      let y = r * Math.sin(i * angle * Math.PI / 180) *  sizeIncreaser
      if (reverse) {x = -x; y = -y}
      return <Transform x={x} y={y} rotate={angle * i} flipY={quasiPeriodBehaviour(i)} flipX={i % 2 === 1 && evenOddHorizontalFlip}>{children}</Transform>
  })
  return smart(circle, restProps)
}
const CircleOfCircles = ({ children,iterations, sizeIncreaser, ...circleProps }) => {
  if (iterations === 0) {
    return <Circle {...circleProps } >{children}</Circle>;
  } else {
    return (
      <Circle {...circleProps} sizeIncreaser={sizeIncreaser*iterations}>
        <CircleOfCircles iterations={iterations - 1} {...circleProps} sizeIncreaser={sizeIncreaser*iterations}>{children}</CircleOfCircles>
      </Circle>
    );
  }
};
const CircleFractal = ({ r, repetition, children, iterations, spacing = 1, repetitionIncreaser = 0, spacingIncreaser=1, scaleIncreaser=1,...restProps }) => {
  const fractal = Array.from({ length: iterations }, (_, i) => {
    return (
      <Circle
        r={r * (i*spacingIncreaser*spacing +1)}
        repetition={repetition + i*repetitionIncreaser}
        reverse={i % 2 === 1}
        evenOddHorizontalFlip
      >
      <Transform scale={(i+1) * scaleIncreaser} flipX={quasiPeriodBehaviour(i)} flipY={i % 2 === 1} 
        >
          
      {children}
      </Transform>
      </Circle>
    );
  });
  return smart(fractal, restProps)
};


export {CircleFractal, Circle,CircleOfCircles}