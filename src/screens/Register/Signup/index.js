import {
  Image,
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, images, SIZES} from '../../../constant';
import {styles} from './index.style';
import {Button, CustomCheckBox, InputField, Text} from '../../../components';
import {
  email_icon,
  eye_icon,
  pasword_icon,
  user_icon,
} from '../../../assets/icons';

const Signup = ({navigation}) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{height: '40%'}}
        style={{flex: 1}}
        source={images.background}>
        <View style={styles.header_view}>
          <Image source={images.logo} />
          <Text text={'Food Ninja'} style={styles.heading_Text} />
          <Text text={'Deliever Favorite Food'} style={styles.text} />
        </View>
        <ScrollView>
          <View style={styles.main_view}>
            <Text text={'SignUp For Free'} style={styles.signup_text} />
            <View style={{height: SIZES.padding}} />
            <InputField icon={user_icon} placeholder={'Anamwp..'} />
            <InputField icon={email_icon} placeholder={'Email'} />
            <InputField
              icon={pasword_icon}
              secureText={true}
              placeholder={'Password'}
              rightIcon={eye_icon}
            />
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
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
