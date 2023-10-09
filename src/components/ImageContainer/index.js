import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../constant';

const ImageContainer = () => {
  return (
    <ImageBackground
      source={images.background_Pattren2}
      style={{height: '100%', flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({});
