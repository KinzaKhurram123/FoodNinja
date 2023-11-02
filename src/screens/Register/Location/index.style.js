import {StyleSheet} from 'react-native';
import {COLORS, RS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  main_view: {
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    flex: 1,
    marginTop: SIZES.padding * 3,
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
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  location_btn: {
    justifyContent: 'flex-start',
    paddingVertical: SIZES.padding,
    backgroundColor: '#4f4f4f',
    width: '100%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    gap: SIZES.padding2,
  },
  text_btn: {
    ...FONTS.Bold12,
    marginVertical: SIZES.padding,
  },
  btn_location: {
    backgroundColor: COLORS.text_input,
    padding: SIZES.padding2,
    alignItems: 'center',
    borderRadius: SIZES.padding2,
  },
});
