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
    ...FONTS.Bold16,
    textAlign: 'left',
  },
  light_text: {
    textAlign: 'center',
    ...FONTS.light14,
    color: COLORS.input_text,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1,
  },
  popular_menu_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.text_input,
    marginTop: SIZES.padding2,
    padding: SIZES.padding2,
    borderRadius: SIZES.padding2,
  },
  menu_heading: {
    ...FONTS.Bold16,
    textAlign: 'left',
  },
  menu_light_text: {
    textAlign: 'left',
    ...FONTS.light14,
    color: COLORS.input_text,
  },
  menu_price: {
    color: COLORS.primary,
    ...FONTS.Bold20,
    paddingRight: SIZES.padding2,
  },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: SIZES.padding2,
  },
  unactive_status: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: SIZES.padding2,
  },
  active: {
    color: COLORS.white,
  },
  inactive: {
    color: COLORS.black,
  },
});
