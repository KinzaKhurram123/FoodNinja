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
    marginVertical: SIZES.padding * 2.5,
    paddingHorizontal: SIZES.padding * 2.5,
  },
  btn: {
    width: 200,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
});
