import {StyleSheet} from 'react-native';
import {COLORS, RS, FONTS, SIZES} from '../../../constant/themes';

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
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  restaurant_view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.text_input,
    paddingVertical: SIZES.padding,
    width: '45%',
    marginRight: SIZES.padding2,
    marginTop: SIZES.padding,
    borderRadius: SIZES.padding2,
  },
  restaurant_heading: {
    ...FONTS.Bold16,
    textAlign: 'center',
  },
});
