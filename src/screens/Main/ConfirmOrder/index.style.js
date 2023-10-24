import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading_Text: {
    color: COLORS.input_text,
    ...FONTS.Bold13,
    fontWeight: '700',
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
  text: {
    color: COLORS.white,
    ...FONTS.light13,
    width: '80%',
  },
  plus_btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 2,
    paddingHorizontal: SIZES.padding2,
    borderRadius: 8,
  },
  plus_btn_light: {
    backgroundColor: COLORS.primary,
    paddingVertical: 2,
    paddingHorizontal: SIZES.padding2,
    borderRadius: 8,
    opacity: 0.6,
  },
  btn_view: {
    backgroundColor: COLORS.text_input,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding,
    marginTop: SIZES.padding,
  },
  payment_method: {
    flexDirection: 'row',
    gap: SIZES.padding2,
    marginTop: SIZES.padding2,
    gap: SIZES.padding * 3,
  },
  location_method_view: {
    flexDirection: 'row',
    gap: SIZES.padding2,
    marginTop: SIZES.padding2,
  },
});
