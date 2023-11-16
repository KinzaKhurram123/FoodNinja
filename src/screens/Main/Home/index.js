import React from 'react';
import {
  FlatList, Image, ImageBackground, ScrollView, TouchableOpacity, View
} from 'react-native';
import { Text } from '../../../components';
import Headers from '../../../components/Header';
import ImageContainer from '../../../components/ImageContainer';
import { nearest_restaurant, popular_menu } from '../../../config';
import { images } from '../../../constant';
import { SIZES } from '../../../constant/themes';
import { styles } from './index.style';

const Home = ({navigation}) => {
  return (
    <ImageContainer>
      <Headers
        filter={true}
        onPressIcon={() => navigation.navigate('Notification')}
        onpressFilters={() => navigation.navigate('Filter')}
        heading_Text={'Find Your Favorite Food'}
        searchbar={true}
        isEdit={false}
        onpressSearch={() => navigation.navigate('MyOrders')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <ImageBackground
            source={images.banner_image}
            style={styles.banner}
            imageStyle={{height: '100%', width: '100%'}}>
            <View style={styles.banner_view}>
              <Text
                text={'Special Deals For October'}
                style={styles.banner_text}
              />
              <TouchableOpacity style={styles.buy_now_btn}>
                <Text text={'Buy Now'} style={styles.buy_now_text} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.text_view}>
            <Text text={'Nearest Restaurant'} style={styles.text} />
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
              <Text text={'View More'} style={styles.more_text} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={nearest_restaurant}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Restaurant')}
                  style={styles.restaurant_view}>
                  <Image
                    source={item.image}
                    style={{marginTop: SIZES.padding}}
                  />
                  <Text text={item.name} style={styles.restaurant_heading} />
                  <Text text={item.mins} style={styles.light_text} />
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.text_view}>
            <Text text={'Popular Menu'} style={styles.text} />
            <TouchableOpacity
              onPress={() => navigation.navigate('ExploreMenu')}>
              <Text text={'View More'} style={styles.more_text} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={popular_menu}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ExploreMenu')}
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
      </ScrollView>
    </ImageContainer>
  );
};

export default Home;
