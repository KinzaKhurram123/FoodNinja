import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS} from '../../constant';
import {DarkTheme} from '../../constant/themes';

const CustomText = ({style, text, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    ...FONTS.Regular14,
    color: DarkTheme.text_color,
  },
});

export default CustomText;
