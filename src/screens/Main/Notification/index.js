import {FlatList, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import BackButton from '../../../components/backButton';
import {styles} from './index.style';
import {notifications} from '../../../config';
import {Icon, Text} from '../../../components';
import {SIZES} from '../../../constant';

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <BackButton
            text={'Notification'}
            onpress={() => navigation.goBack()}
          />
          <FlatList
            data={notifications}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.notification_view}>
                  <Icon name={item.icon} />
                  <View style={{paddingHorizontal: SIZES.padding2}}>
                    <Text
                      text={item.massage}
                      style={styles.notification_heading}
                    />
                    <Text
                      text={item.time}
                      style={styles.notification_light_text}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Notification;
