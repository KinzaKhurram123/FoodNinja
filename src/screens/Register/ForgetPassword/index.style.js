import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.Bold24,
    marginTop: SIZES.padding,
    fontWeight: '700',
  },
  text: {
    ...FONTS.Bold16,
    marginVertical: SIZES.padding,
  },
  header_view: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  main_view: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 2,
    flex: 1, 
  },
  btn_view: {
    justifyContent: 'flex-end',
    marginBottom: SIZES.padding,
    alignSelf: 'center',
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginTop: SIZES.padding * 2,
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
  text_input: {padding: SIZES.padding, paddingLeft: SIZES.padding},
});
