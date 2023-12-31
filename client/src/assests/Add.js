import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Add = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFF5F5"
      d="M40 20.857a2 2 0 0 1-2 2H24.857a2 2 0 0 0-2 2V38a2 2 0 0 1-2 2h-1.714a2 2 0 0 1-2-2V24.857a2 2 0 0 0-2-2H2a2 2 0 0 1-2-2v-1.714a2 2 0 0 1 2-2h13.143a2 2 0 0 0 2-2V2a2 2 0 0 1 2-2h1.714a2 2 0 0 1 2 2v13.143a2 2 0 0 0 2 2H38a2 2 0 0 1 2 2v1.714Z"
    />
  </Svg>
)
export default Add
