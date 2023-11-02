import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/themes';

export const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: SIZES.padding2,
  },
  checked_view: {
    borderRadius: SIZES.padding,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 25,
    width: 25,
  },
  unchecked_veiw: {
    borderRadius: SIZES.padding,
    borderColor: COLORS.primary,
    borderWidth: 1,
    height: 25,
    width: 25,
  },
  title: {
    marginLeft: SIZES.padding2,
    color: COLORS.text_input,
    ...FONTS.Regular12,
  },
});
