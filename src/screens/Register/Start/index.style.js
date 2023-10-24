import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold24,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    ...FONTS.Regular12,
    textAlign: 'center',
    marginTop: SIZES.padding,
  },
  main_view: {
    marginVertical: SIZES.padding * 2,
    alignItems: 'center',
  },
  sub_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding *1.5,
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
});
