import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import ImageContainer from '../../../components/ImageContainer';
import BackButton from '../../../components/backButton';
import {chat} from '../../../config';
import {Text} from '../../../components';
import {SIZES} from '../../../constant';

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
                <TouchableOpacity style={styles.chat_view}>
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
