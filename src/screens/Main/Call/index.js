import React from 'react';
import {
  Image, ImageBackground, SafeAreaView, TouchableOpacity, View
} from 'react-native';
import { decline_call, volume_icon } from '../../../assets/icons';
import { Icon, Text } from '../../../components';
import { images, SIZES } from '../../../constant';
import { styles } from './index.style';

const Call = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        imageStyle={{height: '40%'}}
        style={{flex: 1}}>
        <View style={styles.main_view}>
          <Image source={images.person_4} style={{marginTop: SIZES.padding}} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              bottom: SIZES.padding * 2.5,
            }}>
            <Text text={'Courtney Henry'} style={styles.heading_Text} />
            <Text text={'Ringing . . .'} style={styles.light_text} />
          </View>
          <View style={styles.btn_view}>
            <TouchableOpacity >
              <Icon name={volume_icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name={decline_call} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Call;
