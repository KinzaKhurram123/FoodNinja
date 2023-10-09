import {StyleSheet, View} from 'react-native';
import React from 'react';
import CheckBox from 'react-native-check-box';
import {Button, InputField, Text} from '../../components';

const CustomCheckBox = ({
  style,
  checkedColor,
  roundStyle,
  checkedBorderColor,
  right_text_view,
  textStyle,
  right_text,
  setIsChecked,
  isChecked,
}) => {
  return (
    <CheckBox
      style={style}
      rightTextView={
        right_text_view ? (
          right_text_view
        ) : (
          <Text style={[styles.text, textStyle]} text={right_text} />
        )
      }
      uncheckedImage={
        <View
          style={[
            styles.checkbox,
            {backgroundColor: checkedColor, borderColor: checkedBorderColor},
            roundStyle,
          ]}>
          <View></View>
        </View>
      }
      onclick={setIsChecked}
      isChecked={isChecked}
    />
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({});
