import {StyleSheet} from 'react-native';
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
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  social_btn: {
    justifyContent: 'flex-start',
    paddingVertical: SIZES.padding,
    alignItems: 'center',
    backgroundColor: DarkTheme.dark_blue,
    width: '100%',
    borderRadius: SIZES.padding2,
    flexDirection: 'row',
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding, 
    gap: SIZES.padding2
  },
  text_btn: {
    ...FONTS.Bold12,
    marginVertical: SIZES.padding,
  },
});
