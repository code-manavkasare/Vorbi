import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default {
  background: {
    primary100: '#1f2232',
    primary200: '#2A2E42',
    primary300: '#414765',
    primaryYellow: '#ffb30f',
    iconUnfocused: '#B2B5C6',
    iconFocused: '#ffffff',
    white: '#ffffff',
    black: '#000000',
  },
  text: {
    primary100: '#ffffff',
    primary200: '',
    primary300: '',
    primary400: '',
    primary500: '',
    Yellow: '#ffb30f',
  },
  width,
  height,
};
