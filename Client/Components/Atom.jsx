import SVGPathCommander from 'svg-path-commander'
import getMagicRatio from '../Functions/getMagicRatio.js'
import Grid from './Tools/Grid.jsx'
import {Transform} from './Tools/Transform.jsx'
const logoWidth = 1607.6, logoHeight = getMagicRatio(logoWidth)
const s = logoWidth / 10
function Atom({ width,atoms, fill, x, y, cx, cy,filled,spacing = 1, ...props } = {}, ...children) {
   const logoX = x!==undefined ? x + logoWidth : logoWidth / 2 + (cx || 0) 
   const logoY = y ?? logoHeight / 2 + (cy || 0)
   const logoPoints = new SVGPathCommander(`M${logoX} ${logoY}h-347.6l-456.2 -627.8l-135.6 186.5l320.6 441.3h-347.6l-146.8 -202l-146.8 202h-347.6l803.8 -${logoHeight}l803.8 ${logoHeight}zm-331.9 -30.9h271.1l-743 -1022.8l-743.1 1022.8h271.1l162.6 -223.7l162.6 223.7h271.1l-298.1 -410.4l173.8 -239.2l471.9 649.6z`)
   const logoPointsfilled = new SVGPathCommander(`M${4944/2 + (x || 0)},${8776/2 + (y || 0)}l1547,2128h3094l-3094,-4258l1547,-2128l4641,6387h3094l-7735,-10646l-7734,10645h3094l1546,-2128z`)
   
   const path = children.length > 0 ? Transform({ x: -logoWidth*0.2*2,y: -logoHeight*0.2*2}, Grid({ width: 9, height: 5, hSpacing: logoWidth*0.1*spacing, vSpacing: logoHeight*0.2*spacing, only: [5,9,10,13,14,17,18,19,20,21,22,25,27,28,33,34,39,40,45]}, Transform({size: 0.2, mirrorHor:true}, children))) 
                      : <path fill={fill} d={filled ? logoPointsfilled : logoPoints} /> 
   return Object.keys(props).length !== 0 ? Transform(props, path) : path
}
export default Atom

//with stroke
   //const logoPoints = new SVGPathCommander(`M${4944/2 + (x || 0)},${8776/2 + (y || 0)}l1547,2128h3094l-3094,-4258l1547,-2128l4641,6387h3094l-7735,-10646l-7734,10645h3094l1546,-2128z`)
   //const logoPoints = `${(x || 0)} ${(y || 0)}l${s} ${h-getMagicRatio(s*8)}h${s*2}l${-s*2} ${-(h-getMagicRatio(s*6))}l${s} ${-(h-getMagicRatio(s*8))}l${s*3} ${h-getMagicRatio(s*4)}h${s*2}l${-s*5} ${-h}l${-s*5} ${h}h${s*2}`  
   //4,12,13,14,20,21,23,24,28,29,30,33,34,36,37,39,40,43,44