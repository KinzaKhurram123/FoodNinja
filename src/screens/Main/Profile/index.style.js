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
    backgroundColor: COLORS.black,
    borderTopStartRadius: SIZES.padding * 2,
    borderTopEndRadius: SIZES.padding * 2,
    marginTop: -SIZES.padding * 2,
  },
  member_btn: {
    backgroundColor: COLORS.yellow,
    width: '45%',
    alignItems: 'center',
    padding: SIZES.padding2,
    borderRadius: SIZES.padding,
    opacity: 0.5,
  },
  member_btn_text: {
    ...FONTS.Medium13,
    color: COLORS.yellow,
  },
  heading_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
  },
  voucher_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: SIZES.padding,
    alignItems: 'center',
    backgroundColor: COLORS.text_input,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding2,
    marginBottom: SIZES.padding,
  },
  favorite_food_view: {
    backgroundColor: COLORS.text_input,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.padding,
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
    borderRadius: SIZES.padding2,
    padding: 8,
  },
  btn_text: {
    ...FONTS.light14,
  },
});
