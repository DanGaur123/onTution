import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;



export const COLORS = {
  primary: '#24205C',
  title: '#072F4A',
  white: '#FFFFFF',
  lightGrey: '#D3D6D6',
  grey: '#C1C0C9',
  blue: '#087BB6',
  yellow: '#EDA63D',
  red:'#E23D33'
}

export const SIZES = {
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  
  height,
  width,
}
export { horizontalScale, verticalScale, moderateScale };