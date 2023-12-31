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
import {paypal_icon, visa_icon} from '../../../assets/icons';
import payaneer_icon from '../../../assets/icons/payaneer_icon';
import ImageContainer from '../../../components/ImageContainer';
const PaymentMethod = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name={back_icon} />
          </TouchableOpacity>
          <View>
            <Text text={'Payment Method'} style={styles.heading_Text} />
            <Text
              text={
                'This data will be displayed in your account profile for security'
              }
              style={styles.text}
            />
          </View>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={paypal_icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={visa_icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={payaneer_icon} />
          </TouchableOpacity>
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
            onPress={() => navigation.navigate('UploadImage')}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default PaymentMethod;
