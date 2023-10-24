import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constant';
import TextInputMask from 'react-native-text-input-mask';
import {Icon} from '..';

const MaskInput = ({
  mask,
  value,
  iconname,
  onChangeText,
  placeholder,
  style,
}) => {
  return (
    <View style={styles.main_view}>
      <Icon name={iconname} />
      <TextInputMask
        onChangeText={(formatted) => onChangeText(formatted)}
        style={[styles.maskedInput, style]}
        mask={mask}
        textAlign={'left'}
        placeholder={placeholder}
        cursorColor={COLORS.white}
        value={value}
        keyboardType="numeric"
        placeholderTextColor={COLORS.white}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default MaskInput;

const styles = StyleSheet.create({
  maskedInput: {
    borderRadius: SIZES.padding,
    width: '80%',
    color: COLORS.white,
    ...FONTS.Regular14,
    opacity: 0.3,
  },
  main_view: {
    backgroundColor: COLORS.text_input,
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.padding2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
