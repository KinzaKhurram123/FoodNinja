import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold24,
    marginTop: SIZES.padding,
    fontWeight: '700',
  },
  text: {
    ...FONTS.Bold16,
    marginVertical: SIZES.padding,
    color: COLORS.white,
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 2,
    flex: 1,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding * 2,
  },
  text_btn: {
    ...FONTS.Bold12,
    marginVertical: SIZES.padding,
  },
  cell: {
    width: 60,
    height: 55,
    lineHeight: 55,
    backgroundColor: COLORS.text_input,
    color: COLORS.white,
    borderRadius: SIZES.padding,
    textAlign: 'center',
    ...FONTS.Bold16,
  },
  codefield_view: {
    backgroundColor: COLORS.text_input,
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
});
