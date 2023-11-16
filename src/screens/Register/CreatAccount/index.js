import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { back_icon } from '../../../assets/icons';
import { Button, Icon, Text } from '../../../components';
import ImageContainer from '../../../components/ImageContainer';
import IconInputField from '../../../components/InputField.js/index.js';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

const CreatAccount = ({navigation}) => {
  return (
    <ImageContainer>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <View>
            <TouchableOpacity
              style={{alignItems: 'flex-start'}}
              onPress={() => navigation.goBack()}>
              <Icon name={back_icon} />
            </TouchableOpacity>
            <View>
              <Text
                text={'Fill in your bio to get started'}
                style={styles.heading_Text}
              />
              <Text
                text={
                  'This data will be displayed in your account profile for security'
                }
                style={styles.text}
              />
              <IconInputField placeholder={'First Name'} />
              <IconInputField placeholder={'Last Name'} />
              <IconInputField placeholder={'Mobile Number'} />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              alignSelf: 'center',
              marginTop: SIZES.padding,
            }}>
            <Button
              buttonText={'Next'}
              style={styles.btn}
              onPress={() => navigation.navigate('PaymentMethod')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageContainer>
  );
};

export default CreatAccount;
