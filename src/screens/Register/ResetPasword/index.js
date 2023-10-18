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
import eyeIcon from '../../../assets/icons/eye-icon';

const RessetPaswrod = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={back_icon} />
          </TouchableOpacity>
          <View>
            <Text
              text={'Reset your password here'}
              style={styles.heading_Text}
            />
            <Text
              text={
                'Select which contact details should we use to reset your password'
              }
              style={styles.text}
            />
            <IconInputField
              placeholder={'New Password'}
              style={{paddingLeft: SIZES.padding}}
              rightIcon={true}
              righticon={eyeIcon}
            />
            <IconInputField
              placeholder={'Confirm Password'}
              style={{papaddingLeft: SIZES.padding}}
              rightIcon={true}
              righticon={eyeIcon}
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
            onPress={() =>
              navigation.navigate('Congrats', {
                text: 'Password reset succesful',
              })
            }
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default RessetPaswrod;
