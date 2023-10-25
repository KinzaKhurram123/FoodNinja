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
    ...FONTS.Medium13,
    textAlign: 'left',
    paddingLeft: SIZES.padding,
    opacity: 0.7,
  },
  heading: {
    ...FONTS.Bold16,
    marginVertical: SIZES.padding,
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
  member_btn: {
    backgroundColor: COLORS.yellow,
    width: '45%',
    alignItems: 'center',
    padding: SIZES.padding2,
    borderRadius: SIZES.padding,
    opacity: 0.5,
  },
  ranking_btn: {flexDirection: 'row', gap: 4},
  ranking_view: {
    flexDirection: 'row',
    marginVertical: SIZES.padding2,
    gap: SIZES.padding,
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
  popular_btn: {
    backgroundColor: COLORS.primary,
    width: '30%',
    alignItems: 'center',
    padding: SIZES.padding2,
    borderRadius: SIZES.padding,
    opacity: 0.5,
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
    alignSelf: 'center',
    width: '100%',
  },
  btn_text: {
    ...FONTS.light14,
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
