import {Dimensions, I18nManager} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const scale = (size: number) => (windowWidth / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (windowHeight / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const WriteDirection = I18nManager.isRTL ? 'rtl' : 'auto';

const isSmallPhone = windowWidth <= 360;
const isBigPhone = windowWidth > 360;

export default {
  scale,
  verticalScale,
  moderateScale,
  windowHeight,
  windowWidth,
  WriteDirection,
  isSmallPhone,
  isBigPhone,
};
