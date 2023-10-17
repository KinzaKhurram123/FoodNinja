import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../constant';
import { DarkTheme } from '../../constant/themes';

const ImageContainer = ({children}) => {
  return (
      <ImageBackground
        source={images.background_Pattren2}
        style={{height: '100%', flex: 1, backgroundColor:DarkTheme.black}}>
        {children}
      </ImageBackground>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
