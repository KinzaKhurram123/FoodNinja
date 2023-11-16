import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { paypal_icon } from '../../../assets/icons';
import locationIcon from '../../../assets/icons/location-icon';
import { Icon, Text } from '../../../components';
import BackButton from '../../../components/backButton';
import ImageContainer from '../../../components/ImageContainer';
import { COLORS } from '../../../constant';
import { OrderDetails } from './component';
import { styles } from './index.style';
const ConfirmOrder = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <BackButton
          text={'Confirm Order'}
          onpress={() => navigation.goBack()}
        />
        <View style={styles.main_view}>
          <View style={styles.btn_view}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text text={'Deliver To'} style={styles.heading_Text} />
              <TouchableOpacity
                onPress={() => navigation.navigate('ConfirmLocation')}>
                <Text text={'Edit'} style={{color: COLORS.primary}} />
              </TouchableOpacity>
            </View>
            <View style={styles.location_method_view}>
              <Icon name={locationIcon} />

              <Text
                text={'4517 Washington Ave. Manchester, Kentucky 39495'}
                style={styles.text}
              />
            </View>
          </View>
          <View style={styles.btn_view}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text text={'Payment Method'} style={styles.heading_Text} />
              <TouchableOpacity
                onPress={() => navigation.navigate('EditPaymentMethod')}>
                <Text text={'Edit'} style={{color: COLORS.primary}} />
              </TouchableOpacity>
            </View>
            <View style={styles.payment_method}>
              <Icon name={paypal_icon} />
              <Text text={'2121 6352 8465 ****'} style={styles.text} />
            </View>
          </View>
          <OrderDetails onPress={() => navigation.navigate('CompleteOrder')} />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default ConfirmOrder;
