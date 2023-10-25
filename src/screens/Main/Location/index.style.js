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
    marginTop: SIZES.padding2,
  },
  light_text: {
    textAlign: 'left',
    ...FONTS.light14,
    color: COLORS.input_text,
  },
  main_view: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    flex: 1,
  },
  btn_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding2,
  },
  search_view: {
    opacity: 0.7,
  },
  location_method_view: {
    flexDirection: 'row',
    gap: SIZES.padding2,
    marginTop: SIZES.padding2,
  },
  btn: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding,
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  location_view: {
    backgroundColor: COLORS.black,
    opacity: 0.8,
    width: '100%',
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.padding2,
  },
  sub_view: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    flex: 1,
    width: '100%',
  },
});
