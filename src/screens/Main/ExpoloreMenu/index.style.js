import {StyleSheet} from 'react-native';
import {DarkTheme, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.background,
  },
  heading_Text: {
    color: DarkTheme.white,
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
    color: DarkTheme.input_text,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  popular_menu_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: DarkTheme.text_input,
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
    color: DarkTheme.input_text,
  },
  menu_price: {
    color: DarkTheme.yellow,
    ...FONTS.Bold20,
    paddingRight: SIZES.padding2,
  },
});
