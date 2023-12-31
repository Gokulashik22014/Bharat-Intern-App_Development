import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const LoginSmall = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M15 0C6.72 0 0 6.72 0 15c0 8.28 6.72 15 15 15 8.28 0 15-6.72 15-15 0-8.28-6.72-15-15-15Zm0 4.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5Zm0 21.3a10.8 10.8 0 0 1-9-4.83c.045-2.985 6-4.62 9-4.62 2.985 0 8.955 1.635 9 4.62a10.8 10.8 0 0 1-9 4.83Z"
    />
  </Svg>
)

export const LoginBig = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M40 0C17.92 0 0 17.92 0 40s17.92 40 40 40 40-17.92 40-40S62.08 0 40 0Zm0 12c6.64 0 12 5.36 12 12s-5.36 12-12 12-12-5.36-12-12 5.36-12 12-12Zm0 56.8c-10 0-18.84-5.12-24-12.88.12-7.96 16-12.32 24-12.32 7.96 0 23.88 4.36 24 12.32-5.16 7.76-14 12.88-24 12.88Z"
    />
  </Svg>
)
