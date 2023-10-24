import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import BackButton from '../../../components/backButton';

const ConfirmLocation = ({navigation}) => {
  return (
      <ImageContainer>
        <BackButton text={"Shipping"}/>

      </ImageContainer>
  );
};

export default ConfirmLocation;

const styles = StyleSheet.create({});
