import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, images, SIZES} from '../../../constant';
import {Icon, InputField, Text} from '../../../components';
import {styles} from './index.style';
import {location_icon, serachbar_icon} from '../../../assets/icons';

const LocationMap = () => {
  return (
    <ImageBackground source={images.map} style={{flex: 1}}>
      <View style={styles.main_view}>
        <InputField
          style={styles.search_view}
          placeholder="Find Your Location"
          icon={serachbar_icon}
        />
        <View style={{flex: 1}}>
          <View style={styles.sub_view}>
            <View style={styles.location_view}>
              <Text text={'Orther Location'} style={styles.light_text} />
              <View style={styles.btn_view}>
                <View style={styles.location_method_view}>
                  <Icon name={location_icon} />
                  <Text
                    text={'4517 Washington Ave. Manchester, Kentucky 39495'}
                    style={styles.text}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text text={'Set Location'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LocationMap;
