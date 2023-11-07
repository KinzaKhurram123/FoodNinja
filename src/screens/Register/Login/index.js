import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../constant';
import {styles} from './index.style';
import {Button, InputField, Text} from '../../../components';
import IconComponent from '../../../components/Icon';
import {
  eye_icon,
  facebook_icon,
  google_icon,
  pasword_icon,
  unactiveEye_icon,
} from '../../../assets/icons';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{height: '40%'}}
        source={images.background}
        style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header_view}>
            <Image source={images.logo} />
            <Text text={'Food Ninja'} style={styles.heading_Text} />
            <Text text={'Deliever Favorite Food'} style={styles.text} />
          </View>
          <View style={styles.main_view}>
            <Text text={'Login To Your Account'} style={styles.login_text} />
            <View style={{height: SIZES.padding}} />
            <InputField placeholder={'Email'} />
            <InputField
              placeholder={'Password'}
              righticon={true}
              secureText={true}
            />
            <View style={{height: SIZES.padding}} />
            <Text text={'Or Continue With'} style={styles.text} />
            <View style={styles.btn_row}>
              <TouchableOpacity style={styles.social_btn}>
                <View style={styles.btn_innerView}>
                  <IconComponent name={facebook_icon} />
                  <Text text={'Facebook'} style={styles.btn_text} />
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
              <Text
                text={'Forget Your Password ?'}
                style={styles.forget_text}
              />
            </TouchableOpacity>
            <Button
              buttonText={'Login'}
              style={styles.btn}
              onPress={() => navigation.navigate('TabNavigation')}
            />
            <View style={{flexDirection: 'row', gap: 4, marginTop: 10}}>
              <Text text={"Don't Have an Account"} style={styles.text} />
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text text={'Signup'} style={styles.signup_btn} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
