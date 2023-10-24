import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Button, Icon, InputField, Text} from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import {back_icon, camra_icon, gallary_icon} from '../../../assets/icons';

const UploadImage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <TouchableOpacity
            style={{alignSelf: 'flex-start'}}
            onPress={() => navigation.goBack()}>
            <Icon name={back_icon} />
          </TouchableOpacity>
          <View>
            <Text
              text={'Upload Your Photo Profile'}
              style={styles.heading_Text}
            />
            <Text
              text={
                'This data will be displayed in your account profile for security'
              }
              style={styles.text}
            />
          </View>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={gallary_icon} />
            <Text text={'From Gallary'} style={styles.text_btn} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_btn}>
            <Icon name={camra_icon} />
            <Text text={'Take Photo'} style={styles.text_btn} />
          </TouchableOpacity>
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
            onPress={() => navigation.navigate('Location')}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default UploadImage;
