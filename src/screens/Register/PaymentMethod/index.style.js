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
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.padding * 4,
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    flex: 1,
    marginTop: SIZES.padding * 2,
  },
  social_btn: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.text_input,
    width: '100%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding,
  },
  btn_view: {
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: SIZES.padding,
  },
});
