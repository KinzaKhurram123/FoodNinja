import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView, ScrollView, TouchableOpacity, View
} from 'react-native';
import {
  email_icon, pasword_icon, user_icon
} from '../../../assets/icons';
import { Button, CustomCheckBox, InputField, Text } from '../../../components';
import { images, SIZES } from '../../../constant';
import { styles } from './index.style';

const Signup = ({navigation}) => {
  const [isChecked, setisChecked] = useState(false);
  const [isCheckedEmail, setisCheckedEmail] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{height: '40%'}}
        style={{flex: 1}}
        source={images.background}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
            <InputField
              icon={pasword_icon}
              secureText={true}
              placeholder={'Password'}
              righticon={true}
            />
            <View style={{paddingRight: SIZES.padding * 4.5}}>
              <CustomCheckBox
                isChecked={isChecked}
                onPressChecked={() => setisChecked(!isChecked)}
                title="Keep Me Signed In"
              />
              <CustomCheckBox
                isChecked={isCheckedEmail}
                onPressChecked={() => setisCheckedEmail(!isChecked)}
                title="Email Me About Special Pricing"
              />
            </View>
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
