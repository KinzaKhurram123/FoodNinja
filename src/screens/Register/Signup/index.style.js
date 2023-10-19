import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  heading_Text: {
    color: COLORS.primary,
    ...FONTS.SplashText,
  },
  text: {
    ...FONTS.Regular14,
    color: COLORS.white,
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 4,
  },
  main_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 1.5,
  },
  signup_text: {
    ...FONTS.Regular19,
    color: COLORS.white,
  },
  btn_text: {
    ...FONTS.Regular14,
    color: COLORS.black,
  },
  check_box: {
    marginTop: SIZES.padding * 2,
    marginLeft: -SIZES.padding2 * 0.3,
    paddingRight: SIZES.padding2 * 1.5,
    alignItems: 'flex-start',
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
});
