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
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 1.5,
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
});
