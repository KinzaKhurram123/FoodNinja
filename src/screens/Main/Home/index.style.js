import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    ...FONTS.Bold14,
    textAlign: 'center',
  },
  light_text: {
    textAlign: 'center',
    ...FONTS.light14,
    color: COLORS.input_text,
    paddingBottom: SIZES.padding,
  },
  more_text: {
    ...FONTS.Bold14,
    textAlign: 'center',
    color: COLORS.orange,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1,
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding2,
  },
  restaurant_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.text_input,
    marginHorizontal: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.padding2,
  },
  restaurant_heading: {
    ...FONTS.Bold16,
    textAlign: 'center',
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
  menu_price: {
    color: COLORS.yellow,
    ...FONTS.Bold20,
    paddingRight: SIZES.padding2,
  },
});
