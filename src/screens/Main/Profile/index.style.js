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
    backgroundColor: COLORS.black,
    flex: 1,
    borderTopStartRadius: SIZES.padding,
    borderTopEndRadius: SIZES.padding,
  },
});
