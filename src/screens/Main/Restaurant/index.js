import React from 'react';
import {
  FlatList,
  Image, SafeAreaView, TouchableOpacity, View
} from 'react-native';
import { Text } from '../../../components';
import Headers from '../../../components/Header';
import ImageContainer from '../../../components/ImageContainer';
import { nearest_restaurant } from '../../../config';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

const Restaurant = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <Headers
          filter={true}
          onpressFilters={() => navigation.navigate('Filter')}
          heading_Text={'Find Your Favorite Food'}
          searchbar={true}
        />
        <View style={styles.main_view}>
          <Text text={'Popular Restaurant'} style={styles.text} />
          <FlatList
            data={nearest_restaurant}
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{height: SIZES.padding}} />}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('OrderDetail')}
                  style={styles.restaurant_view}>
                  <Image source={item.image} />
                  <Text text={item.name} style={styles.restaurant_heading} />
                  <Text text={item.mins} style={styles.light_text} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Restaurant;
