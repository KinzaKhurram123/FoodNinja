import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  heading_Text: {
    color: COLORS.primary,
    ...FONTS.SplashText,
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
    paddingTop: SIZES.padding,
    flex: 1,
  },
  card: {
    backgroundColor: 'rgba(90, 108, 234, 0.07)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    padding: SIZES.padding,
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.padding,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  call_icon: {
    alignSelf: 'flex-end',
  },
  text_view: {
    paddingRight: SIZES.padding * 2,
  },
  text_Input: {
    flex: 1,
  },
  text_Input_container: {
    backgroundColor: COLORS.text_input,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    marginVertical: SIZES.padding2 * 0.2,
    marginHorizontal: 6,
    padding: SIZES.padding2 * 0.5,
    borderRadius: SIZES.padding2,
    borderTopColor: 'transparent',
  },
});
