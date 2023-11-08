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
import {COLORS, images, SIZES} from '../../../constant';
import {styles} from './index.style';
import BackButton from '../../../components/backButton';
import {call_icon, send_icon} from '../../../assets/icons';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';

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
        <View style={styles.text_Input}>
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            placeholder={'New Message'}
            renderInputToolbar={prpos => {
              return (
                <InputToolbar
                  {...prpos}
                  containerStyle={styles.text_Input_container}
                />
              );
            }}
            renderSend={props => {
              return (
                <Send {...props}>
                  <Icon name={send_icon} />
                </Send>
              );
            }}
            renderBubble={prpos => (
              <Bubble
                {...prpos}
                wrapperStyle={{
                  right: {
                    backgroundColor: COLORS.primary,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    marginBottom: SIZES.padding2 * 0.7,
                  },
                  left: {
                    backgroundColor: COLORS.text_input,
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 0,
                    marginBottom: SIZES.padding2 * 0.8,
                  },
                }}
              />
            )}
            isTyping={true}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ChatsDetails;
