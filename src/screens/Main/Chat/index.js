import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import ImageContainer from '../../../components/ImageContainer';
import {Icon} from '../../../components';
import back_icon from '../../../assets/icons/back_icon';
import BackButton from '../../../components/backButton';

const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <BackButton/>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Chats;
