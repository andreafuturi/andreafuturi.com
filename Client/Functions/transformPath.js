import SVGPathCommander from "../lib/svgPathCommander.js";

SVGPathCommander.options.round = 0;
export default function transformPath(pathString, transformProps) {
  let pathCommander = "";
  try {
    const {
      flipX,
      flipY,
      rotate,
      scale,
      scaleX,
      scaleY,
      x = 0,
      y = 0,
      origin,
      optimize,
      reverse,
    } = transformProps;

    pathCommander = new SVGPathCommander(
      pathString,
      Array.isArray(origin) && origin.length >= 2 ? { origin } : {},
    );

    if (flipX) pathCommander.transform({ rotate: [0, 180, 0], origin });
    if (flipY) pathCommander.transform({ rotate: [180, 0, 0], origin });
    if (rotate) pathCommander.transform({ rotate, origin });
    if (scale || scaleX || scaleY)
      pathCommander.transform({
        origin,
        scale: [scaleX || scale || 1, scaleY || scale || 1],
      });
    if (x || y) pathCommander.transform({ translate: [x, y] });

    if (optimize) pathCommander.optimize().optimize();
  } catch (error) {
    console.error("tried to transform an element that was not a path");
  }
  return pathCommander.toString();
}
