import {SafeAreaView, ImageBackground, View} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './index.style';
import {InputField} from '../../../components';
import {serachbar_icon} from '../../../assets/icons';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {images} from '../../../constant';

const SelectLocation = ({navigation}) => {
  const map = useRef();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.map} style={styles.main_view}>
        <InputField placeholder={'Search Location'} icon={serachbar_icon} />
        {/* <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SelectLocation;
