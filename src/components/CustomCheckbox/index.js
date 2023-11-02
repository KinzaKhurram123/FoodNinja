import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import {Icon, Text} from '../index';
import {checked_icon, check_icon} from '../../assets/icons';
import {styles} from './index.style';

const CustomCheckBox = ({title, isChecked, onPressChecked}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressChecked}
      style={styles.main_view}>
      <View style={isChecked ? styles.checked_view : styles.unchecked_veiw}>
        {isChecked && <Icon name={check_icon} fill={'transparent'} />}
      </View>
      <Text text={title} style={styles.title} />
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
