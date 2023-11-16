import React from 'react';
import {
  FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View
} from 'react-native';
import {
  green_location_icon,
  location_icon_green,
  love_icon,
  rating_icon
} from '../../../assets/icons';
import { Icon, Text } from '../../../components';
import { restaurant_items, testimonials } from '../../../config';
import { images, SIZES } from '../../../constant';
import { styles } from './index.style';

const OrderDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '35%', width: '100%'}}>
        <Image
          source={images.restaurant}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={styles.main_view}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.heading_view}>
            <TouchableOpacity style={styles.popular_btn}>
              <Text text={'popular'} style={styles.member_btn_text} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', gap: SIZES.padding2}}>
              <View>
                <Icon name={green_location_icon} />
              </View>
              <View>
                <Icon name={love_icon} />
              </View>
            </View>
          </View>
          <Text text={' Wijie Bar and Resto'} style={styles.heading_Text} />
          <Text text={'anamwp66@gmail.com'} style={styles.light_text} />
          <View style={styles.ranking_view}>
            <View style={styles.ranking_btn}>
              <Icon name={location_icon_green} />
              <Text text={'19 Km'} style={styles.light_text} />
            </View>
            <View style={styles.ranking_btn}>
              <Icon name={rating_icon} />
              <Text text={'4.8 Rating'} style={styles.light_text} />
            </View>
          </View>
          <Text
            style={styles.light_text}
            text={
              'Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .'
            }
          />
          <View style={styles.text_view}>
            <Text text={'Popular Menu'} style={styles.text} />
            <TouchableOpacity>
              <Text text={'View More'} style={styles.more_text} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={restaurant_items}
            keyExtractor={item => item.id}
            horizontal
            style={{marginBottom: SIZES.padding}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.restaurant_view}>
                  <Image
                    source={item.image}
                    style={{marginTop: SIZES.padding}}
                  />
                  <Text text={item.name} style={styles.restaurant_heading} />
                  <Text text={item.price} style={styles.light_text} />
                </TouchableOpacity>
              );
            }}
          />
          <Text text={'Testimonials'} style={styles.text} />
          <FlatList
            data={testimonials}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.testimonials_view}>
                  <Image source={item.image} />
                  <View
                    style={{
                      paddingRight: SIZES.padding,
                      paddingRight: SIZES.padding * 3,
                    }}>
                    <Text text={item.name} style={styles.menu_heading} />
                    <Text text={'12 April 2020'} style={styles.light_text} />
                    {/* <View
                      style={{
                        backgroundColor: COLORS.primary,
                        alignSelf: 'flex-end',
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        marginRight: SIZES.padding,
                        borderRadius: SIZES.padding,
                        opacity: 0.4,
                        flexDirection: 'row',
                      }}>
                      <Icon name={star_icon} />
                      <Text text={item.ranking} />
                    </View> */}
                    <Text text={item.remark} style={styles.menu_light_text} />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;
