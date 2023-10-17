import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../constant';
import {Button, Icon, InputField, Text} from '../../components';
import back_icon from '../../assets/icons/back_icon';
import IconInputField from '../../components/InputField.js';
import ImageContainer from '../../components/ImageContainer';
import camraIcon from '../../assets/icons/camra-icon';
import locationIcon from '../../assets/icons/location-icon';

const Location = ({navigation}) => {
  return (
    <ImageContainer>
      <View style={styles.main_view}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={back_icon} />
        </TouchableOpacity>
        <View>
          <Text text={'Set Your Location'} style={styles.heading_Text} />
          <Text
            text={
              'This data will be displayed in your account profile for security'
            }
            style={styles.text}
          />
        </View>
        <View style={styles.social_btn}>
          <Icon name={locationIcon} />
          <Text text={'Your Location'} style={styles.text} />
        </View>
      </View>
    </ImageContainer>
  );
};

export default Location;
