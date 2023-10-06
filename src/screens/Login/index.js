import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../constant';
import {styles} from './index.style';
import {InputField, Text} from '../../components';
import {DarkTheme} from '../../constant/themes';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background_Pattren}
        style={{height: '40%'}}>
        <View style={styles.header_view}>
          <Image source={images.logo} />
          <Text text={'Food Ninja'} style={styles.heading_Text} />
          <Text text={'Deliever Favorite Food'} style={styles.text} />
        </View>
      </ImageBackground>
      <View style={styles.main_view}>
        <Text text={'Login To Your Account'} style={styles.login_text} />
        <View style={{height: SIZES.padding * 2}} />
        <InputField placeholder={'Email'} />
        <InputField placeholder={'Password'} />
        <View style={{height: SIZES.padding *1.5}} />
        <Text text={'Or Continue With'} style={styles.text} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
