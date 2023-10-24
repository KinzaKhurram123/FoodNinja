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
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  btn_view: {
    justifyContent: 'flex-end',
    marginBottom: SIZES.padding,
    alignSelf: 'center',
  },
});
