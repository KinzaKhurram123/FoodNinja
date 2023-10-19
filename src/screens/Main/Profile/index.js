import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.profile}
        style={{
          height: '40%',
          width: '100%',
          paddingBottom: SIZES.padding,
        }}
      />
      <View style={styles.main_view}></View>
    </SafeAreaView>
  );
};

export default Profile;
