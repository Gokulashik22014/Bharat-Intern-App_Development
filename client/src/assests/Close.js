import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
const Close = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={22}
    height={25}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h22v25H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.01042 0 0 .00917 0 .06)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABwUlEQVR4nO2cQW7CMBQF/5nyFuFmdNcue9lWuYG7SSSEgBIK/f/ZM2sW8YytBDtKBAAAAAAAAAAAAAAAANjyFhFz+DOvY7HiIyJaRCwRcQhfFBHf61g+w0x+M4+gE/nNJcK5fNcIuiC/fIRr8t0i6Ib8shHefrng0wiVb8zzeo33jKXUjXmKiK8dEQ6mM79VnkjOEeQu3zmCepHvGEG9yXeKoF7lO0RQ7/IrR9Ao8itG0GjyK0XQqPIrRNDo8jMjCPl5EYT8vAhCfl4EIT8vgpCfF0HIz4sg5OdFEPLzIgj5eeeyy87fdvsPN3MlNOTXjrAw8/MiLMjPWwkL8vMiLMh/LtrxqLln2wJeIJ8IBeQ3VkK+/EaEfPmNCPuZ2YrIQw9srFV45aUL9IddTSIkyt8gwoPoifv5REiUv0GEO9ELT7KIkCh/gwhX+M8z3IlH1Dz5G0RYyXx7YRp9JVR4dWQaNUIF+cNGqCR/uAgV5Q8TobL87iM4yO82gpP87iI4yu8mgrP8LiLwybICHE1n/iMr4T2KcjSXf0+EsvKvRXCTfytCefnnEVzlX4pgI3+Dj3cDAAAAAAAAAAAAAABApPMDku+sSq/QIeEAAAAASUVORK5CYII="
        id="b"
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
)
export default Close
