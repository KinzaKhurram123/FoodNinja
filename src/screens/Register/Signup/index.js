import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, images, SIZES} from '../../../constant';
import {styles} from './index.style';
import {Button, CustomCheckBox, InputField, Text} from '../../../components';
import {user_icon} from '../../../assets/icons';
import email_icon from '../../../assets/icons';
import pasword_icon from '../../../assets/icons';

const Signup = ({navigation}) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        style={{height: '55%'}}>
        <View style={styles.header_view}>
          <Image source={images.logo} />
          <Text text={'Food Ninja'} style={styles.heading_Text} />
          <Text text={'Deliever Favorite Food'} style={styles.text} />
        </View>

        <View style={styles.main_view}>
          <Text text={'SignUp For Free'} style={styles.signup_text} />
          <View style={{height: SIZES.padding}} />
          <InputField icon={user_icon} placeholder={'Anamwp..'} />
          <InputField icon={email_icon} placeholder={'Email'} />
          <InputField icon={pasword_icon} placeholder={'Password'} />
          <View style={{height: SIZES.padding}} />
          <Button
            buttonText={'Creat Account'}
            style={styles.btn}
            onPress={() => navigation.navigate('CreatAccount')}
          />
          <View style={{height: SIZES.padding}} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              text={'already have an account?'}
              style={styles.forget_text}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
