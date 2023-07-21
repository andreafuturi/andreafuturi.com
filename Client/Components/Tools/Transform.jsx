import { animated } from "react-spring"
import getMorph from "../../Functions/getMorph.js"
import transformPath from "../../Functions/transformPath.js"
import useChildrenAsPaths from "../../Functions/useChildrenAsPaths.js"
import useChildrenBBox from "../../Functions/useChildrenBBox.js"


export function Morph({from, to, mass,tension,friction}) {
 
  if (window.isBrowser) {
    const froms = useChildrenAsPaths(from)
    const toes = useChildrenAsPaths(to)

    return froms.map((from, i) =>
    <animated.path {...getMorph(from.props.d, toes[i].props.d, false, { mass, tension, friction })} />
    ) 
  } else {
    return from
  }
}


const Transform = ({children, animated, merged = true, ...props }) => {
  if (children?.type === "use") return children
  const paths = useChildrenAsPaths(children)
  const bbox = useChildrenBBox(paths) //this should be executed only if merged is true
  const origin = merged ? [ bbox.cx, bbox.cy] : undefined
  if (animated) return <AnimatedTransform origin={origin} {...props}>{paths}</AnimatedTransform>
  return <NormalTransform origin={origin} {...props}>{paths}</NormalTransform>
}

const NormalTransform = ({children,fill,...restProps }) => {
  return children.map((path) => {
    //we get path's data
    const { transformeD, originalD, d, ...pathProps } = path.props;
    const after = transformPath(transformeD || d, { ...restProps });
    //if child is an animaed path and has already been transformed we apply the transform also to original path (before)
    if (transformeD) {
      const before = transformPath(originalD || d, { ...restProps });
      return <animated.path {...getMorph(before, after, false)} />;
    }
    return <path {...pathProps} d={after} />;
  })
}
const AnimatedTransform = ({children,style,reverse, morph, loop, ...restProps }) => {
  if (window.isBrowser) {
    return children.map(path => {
      const { transformeD, originalD, d, ...pathProps } = path.props;
      const after = transformPath(transformeD|| d, {...restProps})
      const before = originalD || d
      return <animated.path {...pathProps} {...getMorph(before, after, morph, {}, loop)} />
    })
  }
  return reverse ? <NormalTransform {...restProps}>{children}</NormalTransform> : children
}



export default Transform


/* global transform utile sia per il group che per gli use restituti dalla cache 
if (globalThis.retroCompatible === false) { 
    const transforms = []
    let scaleX = size, scaleY = size
    if (mirrorHor) scaleX = -scaleX
    if (mirrorVer) scaleY = -scaleY
    if (x || y) transforms.push(`translate(${x},${y})`)
    if (rotate) transforms.push(`rotate(${rotate} ${rotateFrom[0]} ${rotateFrom[1]})`)
    if (scaleX !=1 || scaleY !=1) {
      const scaling = scaleX != scaleY ? `scale(${scaleX}, ${scaleY})` : `scale(${scaleX})`
      if (origin) transforms.push(`translate(${origin[0]}, ${origin[1]})`)
      transforms.push(scaling)
      if (origin) transforms.push(`translate(${-origin[0]}, ${-origin[1]})`)
    }
    return transforms.length>0 || attrs ? <g {...attrs} style={(!origin && !rotateFrom) || fromcenter ? {'transform-origin': 'center', 'transform-box': 'fill-box'}: undefined} transform={transforms.join('')} {...props}>{children}</g> : children
  }
  if (globalThis.retroCompatible === false) { 
    const transforms = []
    let scaleX = size, scaleY = size
    if (mirrorHor) scaleX = -scaleX
    if (mirrorVer) scaleY = -scaleY
    if (x || y) transforms.push(`translate(${x},${y})`)
    if (rotate) transforms.push(`rotate(${rotate} ${rotateFrom[0]} ${rotateFrom[1]})`)
    if (scaleX !=1 || scaleY !=1) {
      const scaling = scaleX != scaleY ? `scale(${scaleX}, ${scaleY})` : `scale(${scaleX})`
      if (origin) transforms.push(`translate(${origin[0]}, ${origin[1]})`)
      transforms.push(scaling)
      if (origin) transforms.push(`translate(${-origin[0]}, ${-origin[1]})`)
    }
    return transforms.length>0 || attrs ? <g {...attrs} style={(!origin && !rotateFrom) || fromcenter ? {'transform-origin': 'center', 'transform-box': 'fill-box'}: undefined} transform={transforms.join('')} {...props}>{children}</g> : children
  } else {


const result = []
    //path direct transform
    for (let i = 0 i < children.length i++) {
      const group = Array.isArray(children[i]) ? Merge(children[i].props,  children[i]) : children[i]
    const childprops = group.props
    const path = new SVGPathCommander(childprops.d.toString())
        .transform({scale: [size * mirrorHor ? -1 : 1,size * mirrorVer ? -1 : 1], origin})
        .transform({translate: [x,y]})
        if (rotate) {
          path.transform({rotate: rotate, origin: rotateFrom})
        }
        result.push(<Path {...childprops} {...attrs} d={path.optimize().toString()} />)
    }
    return result
    */