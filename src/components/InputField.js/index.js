import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
import {DarkTheme} from '../../constant/themes';
import {Icons} from '../index';
import {Text} from '../index';

const IconInputField = ({
  style,
  placeholder,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  forwardRef,
  isEdit,
  icon,
  inputStyle,
  iconStyle,
  maxLength,
  value,
  onSubmitEditing,
  autoCapitalize = 'none',
  multiline,
  returnKeyType,
  onChangeText,
  autoFocus,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const onHidePress = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <>
      <View style={[styles.main_view, style]}>
        {icon && (
          <Icons name={icon ? icon : null} style={[styles.icon, iconStyle]} />
        )}
        <TextInput
          multiline={multiline}
          ref={forwardRef}
          cursorColor={DarkTheme.text_input}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureText && hidePassword}
          style={[styles.input, inputStyle]}
          placeholderTextColor={DarkTheme.black}
          defaultValue={defaultValue}
          value={value}
          autoFocus={autoFocus}
          onFocus={onFocus}
          //   onBlur={() => {
          //     setFieldTouched(name);
          //     onBlur(name);
          //   }}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          editable={isEdit}
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  errorInput: {
    // borderColor: COLORS.error,
    borderWidth: 0.5,
  },
  main_view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    borderRadius: 10,
    backgroundColor: DarkTheme.white,
    marginTop: SIZES.padding2,
    shadowColor: DarkTheme.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    width: '7%',
  },
  input: {
    flex: 1,
    ...FONTS.Regular12,
    color: DarkTheme.black,
    height: 45,
    textAlignVertical: 'center',
  },
  errorText: {
    ...FONTS.Regular10,
    paddingLeft: SIZES.base / 1,
    paddingTop: SIZES.base / 2,
  },
  rightIcon: {
    padding: SIZES.padding2,
  },
});

export default IconInputField;
