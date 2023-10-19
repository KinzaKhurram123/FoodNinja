import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS, SIZES} from '../../constant';
import {COLORS} from '../../constant/themes';
import {Icons, Loader} from '../index';

const CustomButton = ({
  style,
  onPress,
  buttonText,
  textStyle,
  icon_view,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        {backgroundColor: disabled ? COLORS.secondary : COLORS.primary},
      ]}
      disabled={disabled}>
      {loading ? (
        <Loader />
      ) : (
        <View style={[styles.row, icon_view]}>
          <Text style={[styles.defaultText, textStyle]}>{buttonText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: SIZES.padding2,
    marginTop: SIZES.padding,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  defaultText: {
    ...FONTS.Medium15,
    color: COLORS.white,
  },
  icon: {
    width: '12%',
    paddingRight: 30,
  },
});

export default CustomButton;
