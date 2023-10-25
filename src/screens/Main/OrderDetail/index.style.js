import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold25,
    textAlign: 'left',
    fontWeight: '700',
  },
  text: {
    ...FONTS.Bold16,
    textAlign: 'left',
  },
  light_text: {
    ...FONTS.light14,
    color: COLORS.input_text,
    opacity: 0.4,
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
  popular_btn: {
    backgroundColor: COLORS.primary,
    width: '30%',
    alignItems: 'center',
    padding: SIZES.padding2,
    borderRadius: SIZES.padding,
    opacity: 0.5,
  },
  member_btn_text: {
    ...FONTS.Medium13,
    color: COLORS.primary,
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
    ...FONTS.light13,
    color: COLORS.input_text,
    marginTop: 8,
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
  ranking_btn: {flexDirection: 'row', gap: 4},
  ranking_view: {
    flexDirection: 'row',
    marginVertical: SIZES.padding2,
    gap: SIZES.padding,
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
  },
  more_text: {
    ...FONTS.Bold13,
    color: COLORS.orange,
  },
  restaurant_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.text_input,
    marginRight: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding2,
    borderRadius: SIZES.padding2,
  },
  restaurant_heading: {
    ...FONTS.Bold16,
    textAlign: 'center',
  },
  testimonials_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.text_input,
    marginBottom: SIZES.padding,
    gap: SIZES.padding,
    padding: SIZES.padding2,
    borderRadius: SIZES.padding2,
  },
});
