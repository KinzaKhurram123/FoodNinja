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
    flex: 1,
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
});
