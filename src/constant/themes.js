import {Appearance, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');

export const DefaultTheme = {
  background: '#fff',
  primary: '#53E88B ',
  secondary: '#09051C',
  text_color: '#000',
};
export const COLORS = {
  background: '#0D0D0D',
  primary: '#53E88B',
  secondary: '#09051C',
  text_color: '#FEFEFF',
  white: '#fff',
  dark_blue: '#09051C',
  text_input: '#474747',
  black: '#0D0D0D',
  input_text: '#dbdbdb',
  orange: '#FF8E4C',
  yellow: '#FEAD1D',
};

export const isLightTheme = Appearance.getColorScheme() === 'light';

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h9: 9,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  // Regular
  Regular10: {
    fontFamily: 'BentonSans-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular12: {
    fontFamily: 'BentonSans-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular14: {
    fontFamily: 'BentonSans-Regular',
    fontSize: RFValue(SIZES.h14),
  },
  Regular15: {
    fontFamily: 'BentonSans-Regular',
    fontSize: RFValue(SIZES.h15),
  },

  Regular19: {
    fontFamily: 'BentonSans-Regular',
    fontSize: RFValue(SIZES.h19),
  },

  Regular24: {
    fontFamily: 'BentonSans-Regular',
    fontSize: RFValue(SIZES.h24),
  },

  // Medium
  Medium11: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h11),
  },
  Medium13: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium15: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium17: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h17),
  },
  Medium20: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h20),
  },
  Medium19: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h19),
  },
  Medium24: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h24),
  },
  Medium28: {
    fontFamily: 'BentonSans-Medium',
    fontSize: RFValue(SIZES.h28),
  },

  //SemiBold
  SemiBold10: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h10),
  },

  SemiBold12: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h12),
  },
  SemiBold14: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h14),
  },
  SemiBold15: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h15),
  },
  SemiBold28: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h28),
  },
  SemiBold24: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h24),
  },
  SemiBold20: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h20),
  },
  SemiBold19: {
    fontFamily: 'BentonSans-SemiBold',
    fontSize: RFValue(SIZES.h19),
  },

  //Bold
  Bold12: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h12),
  },
  Bold13: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h13),
  },
  Bold14: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h14),
  },
  Bold15: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h15),
  },
  Bold16: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold20: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h20),
  },
  Bold21: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h21),
  },
  Bold24: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h24),
  },
  Bold25: {
    fontFamily: 'BentonSans-Bold',
    fontSize: RFValue(SIZES.h25),
  },
  // light
  light15: {
    fontFamily: 'BentonSans-Light',
    fontSize: RFValue(SIZES.h15),
  },
  light14: {
    fontFamily: 'BentonSans-Light',
    fontSize: RFValue(SIZES.h14),
  },
  light13: {
    fontFamily: 'BentonSans-Light',
    fontSize: RFValue(SIZES.h13),
  },
  SplashText: {
    fontFamily: 'Viga-Bold',
    fontSize: RFValue(SIZES.h32),
  },
};

const appTheme = {SIZES, FONTS};

export default appTheme;
