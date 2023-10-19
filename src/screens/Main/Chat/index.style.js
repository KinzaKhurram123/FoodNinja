import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold25,
    textAlign: 'center',
    fontWeight: '700',
  },

  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1,
  },
  chat_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.text_input,
    marginTop: SIZES.padding,
    padding: SIZES.padding2,
    borderRadius: SIZES.padding2 * 1.5,
  },
  chat_heading: {
    ...FONTS.Bold16,
    textAlign: 'left',
  },
  chat_light_text: {
    textAlign: 'left',
    ...FONTS.light13,
    color: COLORS.input_text,
  },
  chat_price: {
    color: COLORS.yellow,
    ...FONTS.Bold20,
    paddingRight: SIZES.padding2,
  },
  time: {
    marginBottom: SIZES.padding * 2,
    marginLeft: SIZES.padding,
    color: COLORS.input_text,
  },
});
