import {Image, ImageBackground, SafeAreaView, View} from 'react-native';
import React from 'react';
import {images} from '../../../constant';
import {styles} from './index.style';
import {Button, Text} from '../../../components';

const Congrats = ({navigation, route}) => {
  const text = route.params;
  console.log(text.text, 'sdkjhsdhas');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        style={styles.banner_image}>
        <View style={styles.header_view}>
          <Image source={images.congrats_background} />
          <Text text={'Congrats'} style={styles.heading_Text} />
          <Text text={text.text} style={styles.text} />
        </View>

        <Button
          buttonText={'Congrats'}
          style={styles.btn}
          onPress={() => navigation.navigate('TabNavigation')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Congrats;
