import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images, SIZES} from '../../../constant';
import {Button, Icon, InputField, Text} from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import {back_icon, camra_icon, gallary_icon} from '../../../assets/icons';
import ImageCropPicker from 'react-native-image-crop-picker';

const UploadImage = ({navigation}) => {
  const SelectFormGalary = () => {
    ImageCropPicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(async image => {
      console.log(image, 'sdbjsadasd');
    });
  };

  const TakePhotofromCamra = () => {
    ImageCropPicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      console.log(image, 'sdhgajsgd');
    });
  };

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
          <TouchableOpacity
            style={styles.social_btn}
            onPress={SelectFormGalary}>
            <Icon name={gallary_icon} />
            <Text text={'From Gallary'} style={styles.text_btn} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.social_btn}
            onPress={TakePhotofromCamra}>
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
