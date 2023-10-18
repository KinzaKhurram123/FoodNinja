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
import user_icon from '../../../assets/icons/user_icon';
import email_icon from '../../../assets/icons/email_icon';
import pasword_icon from '../../../assets/icons/pasword_icon';

const Signup = ({navigation}) => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background_Pattren}
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
          {/* <Checkbox
            isChecked={isCheck}
            style={styles.check_box}
            rightTextView={
              <View style={styles.privacy_view}>
                <Text style={styles.privacy_text} text={'Keep Me Signed In'} />
              </View>
            }
            onClick={() => setIsCheck(!isCheck)}
            checkedCheckBoxColor={DarkTheme.secondary}
            uncheckedCheckBoxColor={DarkTheme.primary}
          /> */}
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
