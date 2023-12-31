import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Bell = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      fill="#000000"
      d="M16 39c2.2 0 4-1.8 4-4h-8c0 2.2 1.8 4 4 4Zm12-12V17c0-6.14-3.26-11.28-9-12.64V3c0-1.66-1.34-3-3-3s-3 1.34-3 3v1.36C7.28 5.72 4 10.84 4 17v10l-4 4v2h32v-2l-4-4Zm-4 2H8V17c0-4.96 3.02-9 8-9s8 4.04 8 9v12Z"
    />
  </Svg>
)
export default Bell
