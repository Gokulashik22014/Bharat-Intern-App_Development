import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Calendar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M27 2.727h-1.5V0h-3v2.727h-15V0h-3v2.727H3c-1.65 0-3 1.228-3 2.728v21.818C0 28.773 1.35 30 3 30h24c1.65 0 3-1.227 3-2.727V5.455c0-1.5-1.35-2.728-3-2.728Zm0 24.546H3V9.545h24v17.728Z"
    />
  </Svg>
)
export default Calendar
