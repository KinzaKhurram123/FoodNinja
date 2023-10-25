import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold25,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    ...FONTS.Bold20,
    textAlign: 'left',
    paddingLeft: SIZES.padding,
  },
  light_text: {
    ...FONTS.light14,
    color: COLORS.input_text,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1,
  },
  banner: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2,
    height: '30%',
    marginTop: SIZES.padding,
  },
  banner_view: {padding: SIZES.padding, alignItems: 'flex-end'},
  banner_text: {
    ...FONTS.Medium19,
    width: 150,
    paddingLeft: SIZES.padding,
  },
  buy_now_btn: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding2,
    marginTop: SIZES.padding2,
    marginRight: SIZES.padding * 2.5,
  },
  buy_now_text: {color: COLORS.primary, ...FONTS.light13},
});
