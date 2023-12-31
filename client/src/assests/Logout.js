import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Logout = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m20.25 6.222-1.904 2.194 3.483 4.028H8.1v3.112h13.73l-3.483 4.013 1.903 2.209L27 14l-6.75-7.778ZM2.7 3.112h10.8V0H2.7C1.215 0 0 1.4 0 3.111V24.89C0 26.6 1.215 28 2.7 28h10.8v-3.111H2.7V3.11Z"
    />
  </Svg>
)
export default Logout
