import SVGPathCommander from 'svg-path-commander'
import Merge from '../Components/Tools/Merge.jsx'

export default function getSize(of) {
  const lastSetting = globalThis.retroCompatible 
  globalThis.retroCompatible = true
  const paths = Merge({},  of()).props.d
  const size = SVGPathCommander.getPathBBox(paths)
  globalThis.retroCompatible = lastSetting
  return size
}