import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Button, Icon, InputField, Text} from '../../../components';
import back_icon from '../../../assets/icons';
import {paypal_icon, visa_icon, payoneer_icon} from '../../../assets/icons';
import ImageContainer from '../../../components/ImageContainer';
import BackButton from '../../../components/backButton';
const EditPaymentMethod = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <BackButton text={'Payment'} />
        <View style={styles.main_view}>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={paypal_icon} />
            <Text text={'2121 6352 8465 ****'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={visa_icon} />
            <Text text={'2121 6352 8465 ****'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={payoneer_icon} />
            <Text text={'2121 6352 8465 ****'} />
          </TouchableOpacity>
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default EditPaymentMethod;
