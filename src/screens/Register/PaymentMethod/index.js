import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import {
  back_icon, payoneer_icon, paypal_icon, visa_icon
} from '../../../assets/icons';
import { Button, Icon, Text } from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import { SIZES } from '../../../constant';
import { styles } from './index.style';
const PaymentMethod = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <TouchableOpacity
            style={{alignSelf: 'flex-start'}}
            onPress={() => navigation.goBack()}>
            <Icon name={back_icon} />
          </TouchableOpacity>
          <View style={{paddingRight: SIZES.padding}}>
            <Text text={'Payment Method'} style={styles.heading_Text} />
            <Text
              text={
                'This data will be displayed in your account profile for security'
              }
              style={styles.text}
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.social_btn}>
            <Icon name={paypal_icon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.social_btn}>
            <Icon name={visa_icon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.social_btn}>
            <Icon name={payoneer_icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.btn_view}>
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
