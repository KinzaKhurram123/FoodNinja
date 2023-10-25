import {StyleSheet, SafeAreaView, View, ImageBackground} from 'react-native';
import React from 'react';
import {Text} from '../../../components';
import {images} from '../../../constant';
import {styles} from './index.style';

const ChatsDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        imageStyle={{height: '40%'}}
        style={{flex: 1}}></ImageBackground>
    </SafeAreaView>
  );
};

export default ChatsDetails;
