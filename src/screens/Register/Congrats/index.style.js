import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constant/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  header_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading_Text: {
    color: COLORS.primary,
    ...FONTS.Bold24,
    marginTop: SIZES.padding,
    fontWeight: '700',
  },
  banner_image: {height: '40%', flex: 1, justifyContent: 'center'},
  text: {
    ...FONTS.Bold16,
    marginVertical: SIZES.padding,
  },
  btn: {
    width: 150,
    alignSelf: 'center',
    marginBottom: SIZES.padding * 2,
  },
});
