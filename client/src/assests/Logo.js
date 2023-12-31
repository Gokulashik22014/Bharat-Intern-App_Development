import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.958 0C1.775 0 0 1.894 0 4.222v29.556C0 36.106 1.775 38 3.958 38h27.706c2.183 0 3.958-1.894 3.958-4.222v-20.6L31.664 17.4l.004 16.378H3.958V4.222h23.269L31.184 0H3.959Zm32.244.618-20.37 21.73-6.517-6.952-2.798 2.985 9.315 9.938L39 3.604 36.202.618Z"
    />
  </Svg>
)
export default Logo
