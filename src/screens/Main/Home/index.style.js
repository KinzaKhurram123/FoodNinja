import {StyleSheet} from 'react-native';
import {DarkTheme, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkTheme.background,
  },
  blogImage: {
    borderRadius: 20,
    width: '100%',
  },
  heading_Text: {
    color: DarkTheme.white,
    ...FONTS.Bold25,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    ...FONTS.Bold14,
    textAlign: 'center',
  },
  light_text: {
    textAlign: 'center',
    ...FONTS.light14,
    color: DarkTheme.input_text,
  },
  view_more_text: {
    ...FONTS.Bold14,
    textAlign: 'center',
    color: DarkTheme.orange,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  sub_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.padding * 2.5,
    paddingHorizontal: SIZES.padding * 2.5,
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding,
  },
  restaurant_view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkTheme.text_input,
    paddingVertical: SIZES.padding,
    width: 150,
    marginRight: SIZES.padding2,
    marginTop: SIZES.padding,
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
    paddingRight:SIZES.padding2
  },
});
