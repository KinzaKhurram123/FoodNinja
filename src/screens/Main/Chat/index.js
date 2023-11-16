import React from 'react';
import {
  FlatList, Image, SafeAreaView, TouchableOpacity, View
} from 'react-native';
import { Text } from '../../../components';
import BackButton from '../../../components/backButton';
import ImageContainer from '../../../components/ImageContainer';
import { chat } from '../../../config';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

const Chats = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <View style={styles.main_view}>
          <BackButton text={'Chat'} onpress={() => navigation.goBack()} />
          <FlatList
            data={chat}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ChatsDetails');
                  }}
                  style={styles.chat_view}>
                  <Image source={item.image} />
                  <View style={{paddingHorizontal: SIZES.padding2}}>
                    <Text text={item.name} style={styles.chat_heading} />
                    <Text text={item.massage} style={styles.chat_light_text} />
                  </View>
                  <Text text={item.time} style={styles.time} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Chats;
