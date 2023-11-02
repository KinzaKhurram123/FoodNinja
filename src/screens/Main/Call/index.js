import {SafeAreaView, Image, View, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Icon, Text} from '../../../components';
import {cencle_icon, decline_call, volume_icon} from '../../../assets/icons';

const Call = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        imageStyle={{height: '40%'}}
        style={{flex: 1}}>
        <View style={styles.main_view}>
          <Image
            source={images.person_4}
            style={{marginTop: SIZES.padding}}
          />
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
            <Icon name={decline_call} />
            <Icon name={volume_icon} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Call;
