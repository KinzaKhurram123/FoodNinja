import {TouchableOpacity, SafeAreaView, View} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import ImageContainer from '../../../components/ImageContainer';
import Headers from '../../../components/Header';
import {Text} from '../../../components';

const Filter = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <Headers
          heading_Text={'Find Your Favorite Food'}
          searchbar={true}
          searchbar_style={{width: '100%'}}
        />
        <View style={styles.main_view}>
          <Text text={'Type'} style={styles.text} />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Filter;
