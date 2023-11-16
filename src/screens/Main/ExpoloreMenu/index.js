import React from 'react';
import {
  FlatList,
  Image, SafeAreaView, TouchableOpacity, View
} from 'react-native';
import { Text } from '../../../components';
import Headers from '../../../components/Header';
import ImageContainer from '../../../components/ImageContainer';
import { popular_menu } from '../../../config';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

const ExploreMenu = ({navigation}) => {
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
          <Text text={'Popular Menu'} style={styles.text} />
          <FlatList
            data={popular_menu}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('MenuDetails')}
                  style={styles.popular_menu_view}>
                  <Image source={item.image} />
                  <View style={{paddingRight: SIZES.padding}}>
                    <Text text={item.name} style={styles.menu_heading} />
                    <Text
                      text={item.restaurant_name}
                      style={styles.menu_light_text}
                    />
                  </View>
                  <Text text={item.price} style={styles.menu_price} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default ExploreMenu;
