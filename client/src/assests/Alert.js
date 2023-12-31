import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Alert = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={33}
    height={37}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h33v37H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.01042 0 0 .0093 0 .054)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
)
export default Alert
