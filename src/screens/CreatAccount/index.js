import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../constant';
import {Button, Icon, InputField, Text} from '../../components';
import back_icon from '../../assets/icons/back_icon';
import IconInputField from '../../components/InputField.js';

const CreatAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background_Pattren2}
        style={{height: '100%', flex: 1}}>
        <View style={styles.main_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={back_icon} />
          </TouchableOpacity>
          <View>
            <Text
              text={'Fill in your bio to get started'}
              style={styles.heading_Text}
            />
            <Text
              text={
                'This data will be displayed in your account profile for security'
              }
              style={styles.text}
            />
            <IconInputField placeholder={'First Name'} />
            <IconInputField placeholder={'Last Name'} />
            <IconInputField placeholder={'Mobile Number'} />
          </View>
          <View style={{height: SIZES.padding * 12}} />
          <Button
            buttonText={'Next'}
            style={styles.btn}
            onPress={() => navigation.navigate('PaymentMethod')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CreatAccount;
