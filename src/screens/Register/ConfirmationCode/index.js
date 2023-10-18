import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Button, Icon, InputField, Text} from '../../../components';
import back_icon from '../../../assets/icons/back_icon';
import IconInputField from '../../../components/InputField.js/index.js';
import ImageContainer from '../../../components/ImageContainer';
import massageIcon from '../../../assets/icons/massage-icon';
import {mail_icon} from '../../../assets/icons';
import {CodeField} from 'react-native-confirmation-code-field';
import {useBlurOnFulfill} from 'react-native-confirmation-code-field/esm/useBlurOnFulfill';
import {useClearByFocusCell} from 'react-native-confirmation-code-field/esm/useClearByFocusCell';
import {DarkTheme} from '../../../constant/themes';

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <IconInputField
              style={{padding: SIZES.padding2, paddingLeft: SIZES.padding}}
            />
            {/* <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              placeholder="1234"
              textContentType="oneTimeCode"
              autoComplete="sms-otp"
              underlineColorAndroid={DarkTheme.transparent}
              placeholderTextColor={DarkTheme.primary}
              renderCell={({index}) => (
                <View style={styles.cell}>
                  <Text
                    key={index}
                    style={styles.text}
                    onLayout={getCellOnLayoutHandler(index)}
                  />
                </View>
              )}
            /> */}
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: SIZES.padding,
          }}>
          <Button
            buttonText={'Next'}
            style={styles.btn}
            onPress={() => navigation.navigate('RessetPaswrod')}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default ConfirmationCode;
