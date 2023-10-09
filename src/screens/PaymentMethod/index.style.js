import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant';
import {DarkTheme, FONTS, SIZES} from '../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  heading_Text: {
    color: DarkTheme.white,
    ...FONTS.Bold24,
    marginTop: SIZES.padding,
    fontWeight: '700',
  },
  text: {
    ...FONTS.Regular14,
    marginVertical: SIZES.padding,
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 4,
  },
  main_view: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 1.5,
  },
  social_btn: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DarkTheme.dark_blue,
    width: '100%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
});
