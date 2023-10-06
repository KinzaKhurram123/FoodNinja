import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {COLORS, images, SIZES} from '../../constant';
import {Button, Text} from '../../components';
import {DarkTheme} from '../../constant/themes';

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_view}>
        <Image source={images.background_3} />
        <View style={styles.sub_view}>
          <Text
            text={'Food Ninja is Where Your Comfort Food Lives'}
            style={styles.heading_Text}
          />
          <Text
            text={'Enjoy a fast and smooth food delivery at your doorstep'}
            style={styles.text}
          />
          <Button
            buttonText={'Next'}
            style={styles.btn}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
