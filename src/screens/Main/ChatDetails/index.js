import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Icon, Text} from '../../../components';
import {images} from '../../../constant';
import {styles} from './index.style';
import BackButton from '../../../components/backButton';
import {call_icon} from '../../../assets/icons';
import {GiftedChat} from 'react-native-gifted-chat';

const ChatsDetails = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: images.person_2,
        },
      },
      {
        _id: 2,
        text: 'How are you',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={images.background}
        imageStyle={{height: '40%'}}
        style={{flex: 1}}>
        <BackButton text={'Chat'} />
        <View style={styles.card}>
          <Image source={images.person_1} />
          <View style={styles.text_view}>
            <Text text={'Dianne Russell'} />
            <Text text={'Online'} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Call')}>
            <Icon name={call_icon} style={styles.call_icon} />
          </TouchableOpacity>
        </View>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          textInputStyle={styles.text_Input}
          isTyping={true}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatsDetails;
