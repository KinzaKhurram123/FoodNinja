import {StyleSheet} from 'react-native';
import {COLORS, RS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.SemiBold19,
  },
  text: {
    ...FONTS.Bold12,
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 2.5,
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 5,
    flex: 1,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  light_text: {
    ...FONTS.Bold13,
    marginTop: SIZES.padding,
  },
  btn_view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: SIZES.padding,
    marginBottom: SIZES.padding,
  },
});
