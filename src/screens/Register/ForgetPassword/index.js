import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Button, Icon, InputField, Text} from '../../../components';
import back_icon from '../../../assets/icons/back_icon';
import IconInputField from '../../../components/InputField.js/index.js';
import ImageContainer from '../../../components/ImageContainer';
import massageIcon from '../../../assets/icons/massage-icon';
import {mail_icon} from '../../../assets/icons';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={back_icon} />
          </TouchableOpacity>
          <View>
            <Text
              text={'Forgot password?'}
              style={styles.heading_Text}
            />
            <Text
              text={
                'Select which contact details should we use to reset your password'
              }
              style={styles.text}
            />
            <IconInputField
              icon={massageIcon}
              placeholder={'Via Sms'}
              style={{padding: SIZES.padding2, paddingLeft: SIZES.padding}}
            />
            <IconInputField
              icon={mail_icon}
              placeholder={'Via Email'}
              style={{padding: SIZES.padding2, paddingLeft: SIZES.padding}}
            />
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
            onPress={() => navigation.navigate('ConformationCode')}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default ForgetPassword;
