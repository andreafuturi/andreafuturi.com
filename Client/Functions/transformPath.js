import SVGPathCommander from "svg-path-commander";

SVGPathCommander.options.round = 0;
export default function transformPath(pathString, transformProps) {
  let pathCommander = "";
  try {
    pathCommander = new SVGPathCommander(pathString);
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

    if (flipX) pathCommander.transform({ rotate: [0, 180, 0], origin: origin });
    if (flipY) pathCommander.transform({ rotate: [180, 0, 0], origin: origin });
    if (rotate) pathCommander.transform({ rotate, origin: origin });
    if (scale || scaleX || scaleY)
      pathCommander.transform({
        origin: origin,
        scale: [scaleX || scale || 1, scaleY || scale || 1],
      });
    if (x || y) pathCommander.transform({ translate: [x, y] });

    if (optimize) pathCommander.optimize().optimize();
  } catch (error) {
    console.error("tried to transform an element that was not a path");
  }
  return pathCommander.toString();
}
