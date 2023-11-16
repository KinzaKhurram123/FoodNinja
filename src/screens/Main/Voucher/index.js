import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components';
import BackButton from '../../../components/backButton';
import ImageContainer from '../../../components/ImageContainer';
import { images, SIZES } from '../../../constant';
import { styles } from './index.style';

const Voucher = ({navigation}) => {
  return (
    <ImageContainer>
      <BackButton text={'Voucher Promo'} onpress={() => navigation.goBack()} />
      <View style={styles.main_view}>
        <ImageBackground
          source={images.banner_image2}
          style={styles.banner}
          imageStyle={{
            height: '100%',
            width: '100%',
            borderRadius: SIZES.padding,
          }}>
          <View style={styles.banner_view}>
            <Text
              text={'Special Deals For October'}
              style={styles.banner_text}
            />
            <TouchableOpacity style={styles.buy_now_btn}>
              <Text text={'Buy Now'} style={styles.buy_now_text} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          source={images.banner_image3}
          style={styles.banner}
          imageStyle={{
            height: '100%',
            width: '100%',
            borderRadius: SIZES.padding,
          }}>
          <View style={styles.banner_view}>
            <Text
              text={'Special Deals For October'}
              style={styles.banner_text}
            />
            <TouchableOpacity style={styles.buy_now_btn}>
              <Text text={'Buy Now'} style={styles.buy_now_text} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ImageContainer>
  );
};

export default Voucher;
