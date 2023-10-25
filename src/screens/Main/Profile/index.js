import {
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {styles} from './index.style';
import {images} from '../../../constant';
import {Icon, Text} from '../../../components';
import {edit_icon, voucher_icon} from '../../../assets/icons';
import {cart_items} from '../../../config';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '35%', width: '100%'}}>
        <Image
          source={images.profile}
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </View>
      <View style={styles.main_view}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.member_btn}>
            <Text text={'Member Gold'} style={styles.member_btn_text} />
          </TouchableOpacity>
          <View style={styles.heading_view}>
            <View>
              <Text text={'Anam Wusono'} style={styles.heading_Text} />
              <Text text={'anamwp66@gmail.com'} style={styles.light_text} />
            </View>
            <Icon name={edit_icon} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Voucher')}
            style={styles.voucher_view}>
            <Icon name={voucher_icon} />
            <Text text={'You Have 3 Voucher'} />
          </TouchableOpacity>
          <Text text={'Favorite'} style={styles.text} />
          <FlatList
            data={cart_items}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.favorite_food_view}>
                  <Image source={item.image} />
                  <View>
                    <Text text={item.name} style={styles.menu_heading} />
                    <Text
                      text={item.restaurant_name}
                      style={styles.menu_light_text}
                    />
                    <Text text={item.price} style={styles.menu_price} />
                  </View>
                  <TouchableOpacity style={styles.btn}>
                    <Text text={'Buy Again'} sty={styles.btn_text} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
