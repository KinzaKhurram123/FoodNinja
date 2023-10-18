import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {COLORS, images, SIZES} from '../../../constant';
import {Button, Text} from '../../../components';
import {DarkTheme} from '../../../constant/themes';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main_view}>
        <Image source={images.background_2} />
        <View style={styles.sub_view}>
          <Text
            text={'Find your Comfort Food here'}
            style={styles.heading_Text}
          />
          <Text
            text={
              'Here You Can find a chef or dish for every taste and color. Enjoy!'
            }
            style={styles.text}
          />
          <Button
            buttonText={'Next'}
            style={styles.btn}
            onPress={() => navigation.navigate('Start')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
