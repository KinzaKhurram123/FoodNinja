import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import ImageContainer from '../../../components/ImageContainer';
import {styles} from './index.style';
import Headers from '../../../components/Header';
import back_icon from '../../../assets/icons/back_icon';
import {images} from '../../../constant';
import {DarkTheme, FONTS, SIZES} from '../../../constant/themes';
import {Text} from '../../../components';
import {nearest_restaurant, popular_menu} from '../../../config';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <ScrollView>
          <Headers
            filter={true}
            onpressFilters={() => navigation.navigate('Filter')}
            heading_Text={'Find Your Favorite Food'}
            searchbar={true}
          />
          <View style={styles.main_view}>
            {/* <ImageBackground
              source={images.banner_image}
              style={{
                backgroundColor: DarkTheme.primary,
                borderRadius: SIZES.padding2,
              }}
              imageStyle={{height: '100%', width: '100%'}
              }>
              <Text text={"Special Deals For October"}/>

              </ImageBackground> */}

            <View style={styles.text_view}>
              <Text text={'Nearest Restaurant'} style={styles.text} />
              <TouchableOpacity
                onPress={() => navigation.navigate('Restaurant')}>
                <Text text={'View More'} style={styles.view_more_text} />
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
                    <Image source={item.image} />
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
                <Text text={'View More'} style={styles.view_more_text} />
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
    </SafeAreaView>
  );
};

export default Home;
