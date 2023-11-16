import React, { useState } from 'react';
import {
  SafeAreaView, TouchableOpacity,
  View
} from 'react-native';
import { back_icon, eye_icon } from '../../../assets/icons';
import { Button, Icon, Text } from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import IconInputField from '../../../components/InputField.js/index.js';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

const RessetPaswrod = ({navigation}) => {
  const [isPaswordHide, setIspaswordHide] = useState(false);
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
                secureText={true}
                rightIcon={true}
                righticon={eye_icon}
                // onPressRightIcon
              />
              <IconInputField
                placeholder={'Confirm Password'}
                style={{papaddingLeft: SIZES.padding}}
                rightIcon={true}
                righticon={eye_icon}
                secureText={true}
              />
            </View>
          </View>
          <View style={styles.btn_view}>
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
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default RessetPaswrod;
