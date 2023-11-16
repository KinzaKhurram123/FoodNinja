import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView, View
} from 'react-native';
import { Text } from '../../../components';
import images from '../../../constant/images';
import { styles } from './index.style';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('AuthStack');
  }, 5000);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        style={{flex: 1, height: '40%'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={images.logo} />
          <Text text={'Food Ninja'} style={styles.heading_Text} />
          <Text text={'Deliever Favorite Food'} style={styles.text} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;
