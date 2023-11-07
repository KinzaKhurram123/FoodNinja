import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {Text} from '../../../components';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from '../../../config';

const Onboarding = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.main_view}>
        <Image source={item.image} />
        <View style={styles.sub_view}>
          <Text text={item.title} style={styles.heading_Text} />
          <Text text={item.text} style={styles.text} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={() => navigation.navigate('Login')}
        activeDotStyle={styles.activedotStyle}
        dotStyle={styles.dotStyle}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
