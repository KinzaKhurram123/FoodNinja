import React from 'react';
import {
  FlatList,
  Image, SafeAreaView, TouchableOpacity, View
} from 'react-native';
import { Text } from '../../../components';
import Headers from '../../../components/Header';
import ImageContainer from '../../../components/ImageContainer';
import { my_order_list } from '../../../config';
import { SIZES } from '../../../constant';
import { styles } from './index.style';

const MyOrders = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <Headers
          filter={true}
          onpressFilters={() => navigation.navigate('Filter')}
          heading_Text={'Find Your Favorite Food'}
          searchbar={true}
          isEdit={true}
        />
        <View style={styles.main_view}>
          <FlatList
            data={my_order_list}
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
                    <Text text={item.price} style={styles.menu_price} />
                  </View>
                  <TouchableOpacity
                    style={
                      item.status === 'Reorder'
                        ? styles.btn
                        : styles.unactive_status
                    }>
                    <Text
                      text={item.status}
                      style={
                        item.status === 'Reorder'
                          ? styles.active
                          : styles.inactive
                      }
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default MyOrders;
