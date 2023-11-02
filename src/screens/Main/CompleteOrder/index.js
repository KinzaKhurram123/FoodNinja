import {
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Button, InputField, Text} from '../../../components';
import {edit_icon} from '../../../assets/icons';

const CompleteOrder = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        style={{flex: 1}}
        imageStyle={{height: '40%'}}>
        <View style={styles.main_view}>
          <Image
            source={images.person_4}
            style={{marginTop: SIZES.padding * 4}}
          />
          <View style={{alignItems: 'center', bottom: SIZES.padding * 2.5}}>
            <Text
              text={'Thank You! Order Completed'}
              style={styles.heading_Text}
            />
            <Text text={'Please rate your last Driver'} style={styles.text} />
          </View>
          <View style={{height: SIZES.padding * 4}} />
          <InputField
            icon={edit_icon}
            style={{width: '100%'}}
            placeholder="Leave FeedBack"
          />
          <View style={styles.btn_view}>
            <Button buttonText={'Submit'} style={{width: '60%'}} />
            <TouchableOpacity style={styles.skip_btn}>
              <Text text={'Skip'} style={styles.btn_text} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CompleteOrder;
