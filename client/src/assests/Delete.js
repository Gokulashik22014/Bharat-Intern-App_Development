import * as React from "react"
import Svg, { Path } from "react-native-svg"
const V = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#414141"
      d="M2 32c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V8H2v24Zm4-20h16v20H6V12ZM21 2l-2-2H9L7 2H0v4h28V2h-7Z"
    />
  </Svg>
)
export default V
