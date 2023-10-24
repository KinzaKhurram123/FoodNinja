import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';
import IconComponent from '../Icon';
import {Icons} from '../index';
import {Text} from '../index';

const InputField = ({
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
  righticon,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const onHidePress = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <>
      <View style={[styles.main_view, style]}>
        {icon && (
          <IconComponent
            name={icon ? icon : null}
            style={[styles.icon, iconStyle]}
          />
        )}
        <TextInput
          multiline={multiline}
          ref={forwardRef}
          cursorColor={COLORS.white}
          autoCapitalize={autoCapitalize}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          secureTextEntry={secureText && hidePassword}
          style={[styles.input, inputStyle]}
          placeholderTextColor={COLORS.input_text}
          defaultValue={defaultValue}
          value={value}
          autoFocus={autoFocus}
          onFocus={onFocus}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          editable={isEdit}
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
        />
        {righticon && (
          <IconComponent name={righticon} style={[styles.icon, iconStyle]} />
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  errorInput: {
    borderWidth: 0.5,
  },
  main_view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.padding2,
    backgroundColor: COLORS.text_input,
    marginTop: SIZES.padding,
    gap: 10,
  },
  icon: {
    width: '7%',
  },
  input: {
    flex: 1,
    ...FONTS.Regular12,
    color: COLORS.text_color,
    ...FONTS.Medium13,
    height: 55,
    textAlignVertical: 'center',
    opacity: 0.3,
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

export default InputField;
