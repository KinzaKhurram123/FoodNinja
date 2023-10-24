import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../../constant';
import {COLORS, DarkTheme} from '../../constant/themes';

const ImageContainer = ({children}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <ImageBackground
        source={images.pattren_image}
        imageStyle={{height: '30%'}}
        style={{
          flex: 1,
        }}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.1,
  },
});
