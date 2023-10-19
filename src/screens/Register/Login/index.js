import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../../constant';
import {styles} from './index.style';
import {Button, InputField, Text} from '../../../components';
import IconComponent from '../../../components/Icon';
import {facebook_icon, google_icon} from '../../../assets/icons';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        style={{height: '60%'}}>
        <View style={styles.header_view}>
          <Image source={images.logo} />
          <Text text={'Food Ninja'} style={styles.heading_Text} />
          <Text text={'Deliever Favorite Food'} style={styles.text} />
        </View>
        <View style={styles.main_view}>
          <Text text={'Login To Your Account'} style={styles.login_text} />
          <View style={{height: SIZES.padding}} />
          <InputField placeholder={'Email'} />
          <InputField placeholder={'Password'} />
          <View style={{height: SIZES.padding}} />
          <Text text={'Or Continue With'} style={styles.text} />
          <View style={styles.btn_row}>
            <TouchableOpacity style={styles.social_btn}>
              <View style={styles.btn_innerView}>
                <IconComponent name={facebook_icon} />
                <Text text={'FaceBook'} style={styles.btn_text} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.social_btn}>
              <View style={styles.btn_innerView}>
                <IconComponent name={google_icon} />
                <Text text={'Google'} style={styles.btn_text} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: SIZES.padding}} />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPasword')}>
            <Text text={'Forget Password'} style={styles.forget_text} />
          </TouchableOpacity>
          <Button
            buttonText={'Login'}
            style={styles.btn}
            onPress={() => navigation.navigate('TabNavigation')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
