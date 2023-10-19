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
    ...FONTS.Regular14,
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
  login_text: {
    ...FONTS.Regular24,
    color: COLORS.dark_blue,
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
    color: COLORS.input_text,
  },
  btn_innerView: {
    flexDirection: 'row',
    gap: SIZES.padding2,
  },
  forget_text: {
    ...FONTS.Regular14,
    color: COLORS.primary,
    textDecorationLine: 'underline',
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
});
