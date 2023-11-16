import React from 'react';
import {
  FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity,
  View
} from 'react-native';
import {
  bag_icon,
  green_location_icon,
  love_icon,
  rating_icon
} from '../../../assets/icons';
import { Button, Icon, Text } from '../../../components';
import { testimonials } from '../../../config';
import { images, SIZES } from '../../../constant';
import { styles } from './index.style';

const MenuDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '45%', width: '100%'}}>
        <Image
          source={images.menu_item}
          style={{
            height: '100%',
            width: '100%',
          }}
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
          <Text
            text={' Rainbow Sandwich Sugarless'}
            style={styles.heading_Text}
          />
          <View style={styles.ranking_view}>
            <View style={styles.ranking_btn}>
              <Icon name={rating_icon} />
              <Text text={'4.0 Rating'} style={styles.light_text} />
            </View>
            <View style={styles.ranking_btn}>
              <Icon name={bag_icon} />
              <Text text={'2000+ order '} style={styles.light_text} />
            </View>
          </View>
          <Text
            style={styles.text}
            text={
              'Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.'
            }
          />
          <View style={{marginVertical: SIZES.padding2}}>
            <Text text={'. Strowberry'} style={styles.text} />
            <Text text={'. Cream'} style={styles.text} />
            <Text text={'. Wheat'} style={styles.text} />
          </View>
          <Text
            style={styles.text}
            text={
              'Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.'
            }
          />
          <Text text={'Testimonials'} style={styles.heading} />
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
          <Button
            buttonText={'Add to Cart'}
            style={styles.btn}
            onPress={() => navigation.navigate('Cart')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MenuDetails;
