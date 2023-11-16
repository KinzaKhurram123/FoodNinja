import React from 'react';
import {
  Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity,
  View
} from 'react-native';
import { edit_icon, star_icon } from '../../../assets/icons';
import { Button, Icon, InputField, Text } from '../../../components';
import { images, SIZES } from '../../../constant';
import { styles } from './index.style';

const CompleteOrder = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        style={{flex: 1}}
        imageStyle={{height: '40%'}}>
        <ScrollView>
          <View style={styles.main_view}>
            <Image source={images.person_4} style={styles.image} />
            <View style={styles.text_view}>
              <Text
                text={'Thank You! Order Completed'}
                style={styles.heading_Text}
              />
              <Text text={'Please rate your last Driver'} style={styles.text} />
            </View>
            <Icon name={star_icon} />
            <View style={{height: SIZES.padding * 4.5}} />
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
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CompleteOrder;
