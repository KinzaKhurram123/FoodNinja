import {Dimensions, Platform, StyleSheet} from 'react-native';
import {DarkTheme, FONTS, SIZES} from '../../constant/themes';

export const styles = StyleSheet.create({
  main_view: {
    paddingTop: Platform.OS === 'ios' ? SIZES.padding : SIZES.padding,
    paddingBottom: SIZES.padding * 1.3,
    paddingHorizontal: SIZES.padding,
  },
  sub_view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...FONTS.Bold25,
    color: DarkTheme.white,
    textAlign: 'left',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: SIZES.padding,
  },
});
