import {StyleSheet} from 'react-native';
import {COLORS, RS, FONTS, SIZES} from '../../../constant/themes';

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
    ...FONTS.Bold14,
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 2.5,
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    flex: 1,
  },
  login_text: {
    ...FONTS.Bold20,
    color: COLORS.white,
    marginTop: SIZES.padding2,
  },
  btn_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  social_btn: {
    backgroundColor: COLORS.text_input,
    height: 60,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.padding2,
  },
  btn_text: {
    ...FONTS.Regular14,
    color: COLORS.white,
    opacity: 0.4,
    marginLeft: SIZES.padding2,
  },
  btn_innerView: {
    flexDirection: 'row',
  },
  forget_text: {
    ...FONTS.Regular12,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  signup_btn: {
    color: COLORS.primary,
    ...FONTS.Bold12,
    marginBottom: SIZES.padding,
  },
});
