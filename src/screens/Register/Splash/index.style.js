import {StyleSheet} from 'react-native';
import {DarkTheme, FONTS} from '../../../constant/themes';

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
    color: DarkTheme.white,
    ...FONTS.SplashText,
  },
  text: {
    ...FONTS.Regular12,
  },
});
