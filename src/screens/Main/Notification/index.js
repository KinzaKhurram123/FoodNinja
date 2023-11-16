import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from '../../../components';
import BackButton from '../../../components/backButton';
import ImageContainer from '../../../components/ImageContainer';
import { notifications } from '../../../config';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

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
