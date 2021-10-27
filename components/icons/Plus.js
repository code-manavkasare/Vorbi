import React from 'react';
import Svg, { Line } from 'react-native-svg';

export default function Plus({ color }) {
  return (
    <Svg
      width="12"
      height="12"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Line
        x1="5"
        y1="1"
        x2="5"
        y2="9"
        stroke={color ? color : '#363C5A'}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Line
        x1="9"
        y1="5"
        x2="1"
        y2="5"
        stroke={color ? color : '#363C5A'}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
}
