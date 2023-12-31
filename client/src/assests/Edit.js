import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Edit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      fill="#414141"
      d="M0 26.126V33h6.874l20.274-20.274-6.874-6.874L0 26.126ZM32.464 7.41a1.825 1.825 0 0 0 0-2.584l-4.29-4.29a1.825 1.825 0 0 0-2.584 0l-3.355 3.355 6.874 6.874 3.355-3.355Z"
    />
  </Svg>
)
export default Edit
