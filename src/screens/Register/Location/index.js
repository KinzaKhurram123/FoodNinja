import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {FONTS, images, SIZES} from '../../../constant';
import {Button, Icon, InputField, Text} from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import { back_icon, location_icon } from '../../../assets/icons';

const Location = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
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
          <View style={styles.location_btn}>
            <View style={{flexDirection: 'row', gap: 7}}>
              <Icon name={location_icon} />
              <Text text={'Your Location'} style={styles.text} />
            </View>
            <TouchableOpacity style={styles.btn_location}>
              <Text text={'Set Location'} style={{...FONTS.light13}} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            flex: 1,
            marginBottom: SIZES.padding,
          }}>
          <Button
            buttonText={'Next'}
            style={styles.btn}
            onPress={() =>
              navigation.navigate('Congrats', {
                text: 'Your Profile Is Ready To Use',
              })
            }
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Location;
