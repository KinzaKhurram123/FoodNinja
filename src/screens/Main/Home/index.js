import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import {styles} from './index.style';
import Headers from '../../../components/Header';
import back_icon from '../../../assets/icons/back_icon';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <Headers heading_Text={'Find Your Favorite Food'} />
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Home;
