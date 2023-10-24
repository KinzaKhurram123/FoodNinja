import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {COLORS, SIZES} from '../../../constant';
import {Button, Icon, Text} from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import {back_icon} from '../../../assets/icons';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
  useBlurOnFulfill,
} from 'react-native-confirmation-code-field';

const ConfirmationCode = ({navigation}) => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <View>
            <TouchableOpacity
              style={{alignItems: 'flex-start'}}
              onPress={() => navigation.goBack()}>
              <Icon name={back_icon} />
            </TouchableOpacity>
            <View>
              <Text
                text={'Enter 4-digit Verification code'}
                style={styles.heading_Text}
              />
              <Text
                text={
                  'Code send to +6282045**** . This code will expired in 01:30'
                }
                style={styles.text}
              />
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                cursorColor={COLORS.white}
                placeholder="1234"
                textContentType="oneTimeCode"
                autoComplete="sms-otp"
                underlineColorAndroid={COLORS.transparent}
                placeholderTextColor={COLORS.white}
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                    text={symbol || (isFocused ? <Cursor /> : null)}
                  />
                )}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              marginBottom: SIZES.padding,
              alignSelf: 'center',
            }}>
            <Button
              buttonText={'Next'}
              style={styles.btn}
              onPress={() => navigation.navigate('RessetPaswrod')}
            />
          </View>
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default ConfirmationCode;
