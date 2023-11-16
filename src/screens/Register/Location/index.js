import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {back_icon, location_icon} from '../../../assets/icons';
import {Button, Icon, Text} from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import {FONTS, SIZES} from '../../../constant';
import {styles} from './index.style';

const Location = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{alignItems: 'flex-start'}}>
            <Icon name={back_icon} style={{alignSelf: 'left'}} />
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
            <TouchableOpacity
              style={styles.btn_location}
              onPress={() => navigation.navigate('SelectLocation')}>
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
