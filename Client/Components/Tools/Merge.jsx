import { useEffect, useMemo, useState } from 'https://esm.sh/preact/hooks';
import useChildrenAsPaths from '../../Functions/useChildrenAsPaths.js';
import { animated } from "https://cdn.skypack.dev/react-spring"
import getMorph from '../../Functions/getMorph.js';
import miniSvgDataUri from 'https://cdn.skypack.dev/mini-svg-data-uri'
import rendering from '../../Functions/rendering.js';
//newProps se non specificate dovrebbero essere prese in automatcio mergando le props dei figli

const Merge = ({ children,dataURI, ...rest }) => {
  useEffect(() => {
    setChildrenPaths(children)
  }, [children])

  const [childrenPaths, setChildrenPaths] = useState(children)
  const paths = useChildrenAsPaths(childrenPaths)
  if (dataURI) {
    const render = rendering(childrenPaths,"c")
    return <use href={miniSvgDataUri(render)+"#c"} {...rest}/>
  }
    const before = useMemo(() => paths.map(path =>{
return path.props.originalD || path.props.d
    }).join(""),[paths])
    return <path d={before} {...rest} >
          {paths.map((child, index) => (
           child.props.children
        ))}
        </path>
// if (window.isBrowser) {
//   const after = useMemo(() => paths.map(path =>{
//     return path.props.transformeD || path.props.d
//         }).join(" "),[paths])

//     return <animated.path {...getMorph(before,after)} {...rest}>
//     {paths.map((child, index) => (
//        child.props.children
//     ))}
//   </animated.path>;
//   } else {
//     return <path d={before} {...rest} >
//       {paths.map((child, index) => (
//        child.props.children
//     ))}
//     </path>;
//   }
  }

 //AI import cildren from react
//  function Merge({ ...newProps }, children) {
//     const mergedPoints = Children.toArray(children)
//       .map(child => child.props.d)
//       .flat()
//       .join(' ');
//     return <path {...newProps} d={mergedPoints} />
//   }
// const componentID = JSON.stringify(children)//objectHash({...children, ...newProps})
    // if (Merge[componentID]) return Merge[componentID]
  // Merge[componentID] =
export default Merge