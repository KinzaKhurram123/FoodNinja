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
  text: {
    ...FONTS.Bold16,
    textAlign: 'left',
  },
  light_text: {
    textAlign: 'center',
    ...FONTS.light14,
    color: COLORS.input_text,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  notification_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.text_input,
    marginTop: SIZES.padding,
    padding: SIZES.padding2,
    height: 90,
    borderRadius: SIZES.padding2 * 1.5,
  },
  notification_heading: {
    ...FONTS.Bold15,
    textAlign: 'left',
  },
  notification_light_text: {
    textAlign: 'left',
    ...FONTS.light13,
    color: COLORS.input_text,
  },
});
