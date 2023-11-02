import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './index.style';
import {COLORS, SIZES} from '../../../constant';
import {Button, Icon, MaskInput, Text} from '../../../components';
import IconInputField from '../../../components/InputField.js/index.js';
import ImageContainer from '../../../components/ImageContainer';
import {back_icon, mail_icon, message_icon} from '../../../assets/icons';

const ForgetPassword = ({navigation}) => {
  const [number, setNumber] = useState(null);
  return (
    <ImageContainer>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <View>
            <TouchableOpacity
              style={{alignItems: 'flex-start'}}
              onPress={() => navigation.goBack()}>
              <Icon name={back_icon} />
            </TouchableOpacity>

            <Text text={'Forgot password?'} style={styles.heading_Text} />
            <Text
              text={
                'Select which contact details should we use to reset your password'
              }
              style={styles.text}
            />
            <MaskInput
              value={number}
              iconname={message_icon}
              mask={'[0000] [0000] [0000]'}
              placeholder={'0000 0000 0000'}
              onChangeText={val => setNumber(val)}
              style={{width: '85%'}}
            />
            <IconInputField
              icon={mail_icon}
              secureText={true}
              placeholder={'Via Email'}
              style={{padding: SIZES.padding2, paddingLeft: SIZES.padding}}
            />
          </View>
          <View style={styles.btn_view}>
            <Button
              buttonText={'Next'}
              style={styles.btn}
              onPress={() => navigation.navigate('ConformationCode')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageContainer>
  );
};

export default ForgetPassword;
