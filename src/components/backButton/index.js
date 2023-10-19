import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon, Text} from '..';
import {FONTS, SIZES} from '../../constant';
import {back_icon} from '../../assets/icons';

const BackButton = ({text,onpress}) => {
  return (
    <TouchableOpacity
    onPress={onpress}
      style={{alignItems: 'flex-start', marginTop: SIZES.padding * 2}}>
      <Icon name={back_icon} />
      <Text text={text} style={{...FONTS.Bold24, marginTop: SIZES.padding}} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
