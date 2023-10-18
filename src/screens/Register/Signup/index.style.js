import {StyleSheet} from 'react-native';
import {DarkTheme, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.black,
  },
  blogImage: {
    borderRadius: 20,
    width: '100%',
  },
  heading_Text: {
    color: DarkTheme.primary,
    ...FONTS.SplashText,
  },
  text: {
    ...FONTS.Regular14,
    color: DarkTheme.white,
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
    color: DarkTheme.white,
  },
  btn_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  social_btn: {
    backgroundColor: DarkTheme.text_input,
    height: 60,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.padding2,
  },
  btn_text: {
    ...FONTS.Regular14,
    color: DarkTheme.black,
  },
  check_box: {
    marginTop: SIZES.padding * 2,
    marginLeft: -SIZES.padding2 * 0.3,
    paddingRight: SIZES.padding2 * 1.5,
    alignItems: 'flex-start',
  },
  btn_innerView: {
    flexDirection: 'row',
    gap: SIZES.padding2,
  },
  forget_text: {
    ...FONTS.Regular14,
    color: DarkTheme.primary,
    textDecorationLine: 'underline',
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  privacy_view: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: SIZES.padding,
    marginLeft: SIZES.padding2,
  },
  privacy_text: { ...FONTS.Regular12 },
  privacy_link_text: {
    ...FONTS.Regular12,
    color: DarkTheme.secondary,
    textDecorationLine: "underline",
  },
  errors: {
    ...FONTS.Medium13,
    color: "red",
    marginTop: 5,
    textAlign: "left",
    // backgroundColor: "red",
  },
});
