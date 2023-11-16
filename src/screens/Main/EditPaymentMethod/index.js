import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { payoneer_icon, paypal_icon, visa_icon } from '../../../assets/icons';
import { Icon, Text } from '../../../components';
import BackButton from '../../../components/backButton';
import ImageContainer from '../../../components/ImageContainer';
import { styles } from './index.style';
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
