import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BackButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Icon name={back_icon} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
