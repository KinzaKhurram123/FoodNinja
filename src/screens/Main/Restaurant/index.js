import {
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import {styles} from './index.style';
import Headers from '../../../components/Header';
import {Text} from '../../../components';
import {nearest_restaurant, popular_menu} from '../../../config';
import {SIZES} from '../../../constant';

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
            ListFooterComponent={<View style={{height: SIZES.padding}} />}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.restaurant_view}>
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
