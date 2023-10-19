import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  blogImage: {
    borderRadius: 20,
    width: '100%',
  },
  heading_Text: {
    color: COLORS.white,
    ...FONTS.SplashText,
  },
  text: {
    ...FONTS.Regular12,
  },
});
