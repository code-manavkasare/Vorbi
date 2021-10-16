import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

export default function YellowCross() {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="9"
        cy="9"
        r="5"
        fill="#FFB30F"
        stroke="#FFB30F"
        stroke-width="8"
      />
      <Line
        x1="6.87857"
        y1="6.87854"
        x2="11.1212"
        y2="11.1212"
        stroke="#1F2232"
        stroke-width="2"
        stroke-linecap="round"
      />
      <Line
        x1="11.0999"
        y1="6.87853"
        x2="6.79358"
        y2="11.0576"
        stroke="#1F2232"
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
}
