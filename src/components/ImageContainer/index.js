import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../constant';
import {DarkTheme} from '../../constant/themes';

const ImageContainer = ({children}) => {
  return (
      <ImageBackground
        source={images.pattren_image}
        style={{
          height: '30%',
          flex: 1,
        }}>
        {children}
      </ImageBackground>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.1
  },
});
