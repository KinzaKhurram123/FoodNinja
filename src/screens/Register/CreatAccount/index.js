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
import back_icon from '../../../assets/icons';
import IconInputField from '../../../components/InputField.js/index.js';
import ImageContainer from '../../../components/ImageContainer';

const CreatAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
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
            onPress={() => navigation.navigate('PaymentMethod')}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default CreatAccount;
