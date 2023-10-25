import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/themes';

export const styles = StyleSheet.create({
  main_view: {
    paddingTop: Platform.OS === 'ios' ? SIZES.padding : SIZES.padding,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  sub_view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    ...FONTS.SemiBold28,
    color: COLORS.white,
    textAlign: 'left',
  },
  filter_btn: {
    backgroundColor: COLORS.text_input,
    padding: SIZES.padding2,
    borderRadius: SIZES.padding2,
    opacity: 0.5,
    alignItems: 'center',
  },
  search: {width: '90%', marginTop: 0},
});
