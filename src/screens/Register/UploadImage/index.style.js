import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold24,
    marginTop: SIZES.padding,
    fontWeight: '700',
  },
  text: {
    ...FONTS.Regular14,
    marginVertical: SIZES.padding,
  },
  text_btn: {
    ...FONTS.Bold12,
    // marginVertical: SIZES.padding2,
    paddingVertical: SIZES.padding2,
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 4,
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    flex: 1,
    marginTop: SIZES.padding * 2,
  },
  social_btn: {
    justifyContent: 'center',
    paddingVertical: SIZES.padding,
    alignItems: 'center',
    backgroundColor: COLORS.text_input,
    width: '90%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
});
