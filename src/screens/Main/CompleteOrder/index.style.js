import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  heading_Text: {
    color: COLORS.input_text,
    ...FONTS.Bold21,
    marginTop: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding2,
  },

  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.Medium13,
    marginTop: SIZES.padding2,
  },
  btn_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skip_btn: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.padding2,
    backgroundColor: COLORS.text_input,
    padding: SIZES.padding,
    marginTop: SIZES.padding,
    marginLeft: SIZES.padding,
  },
  btn_text: {
    color: COLORS.primary,
  },
});
