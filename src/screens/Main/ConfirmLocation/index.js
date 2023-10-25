import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import BackButton from '../../../components/backButton';
import {Icon, Text} from '../../../components';
import {COLORS, SIZES} from '../../../constant';
import {styles} from './index.style';
import {location_icon} from '../../../assets/icons';

const ConfirmLocation = ({navigation}) => {
  return (
    <ImageContainer>
      <BackButton text={'Shipping'} />
      <View style={styles.main_view}>
        <View style={styles.btn_view}>
          <Text text={'Orther Location'} style={styles.heading_Text} />
          <View style={styles.location_method_view}>
            <Icon name={location_icon} />
            <Text
              text={'4517 Washington Ave. Manchester, Kentucky 39495'}
              style={styles.text}
            />
          </View>
        </View>
        <View style={styles.btn_view}>
          <Text text={'Deliver To'} style={styles.heading_Text} />
          <View style={styles.location_method_view}>
            <Icon name={location_icon} />
            <Text
              text={'4517 Washington Ave. Manchester, Kentucky 39495'}
              style={styles.text}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('LocationMap')}
            style={{
              paddingHorizontal: SIZES.padding * 2,
              marginTop: SIZES.padding2,
            }}>
            <Text text={'Set Location'} style={{color: COLORS.primary}} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageContainer>
  );
};

export default ConfirmLocation;
