import {
  FlatList,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ImageContainer from '../../../components/ImageContainer';
import {styles} from './index.style';
import BackButton from '../../../components/backButton';
import {cart_items} from '../../../config';
import {SIZES} from '../../../constant';
import {Text} from '../../../components';
import {OrderDetails} from './component';

const Cart = ({navigation}) => {
  const [amount, setAmount] = useState(1);
  console.log(amount, 'sjkdjksadj');
  return (
    <SafeAreaView style={styles.container}>
      <ImageContainer>
        <ScrollView>
          <View style={styles.main_view}>
            <BackButton
              text={'Order Details'}
              onpress={() => navigation.goBack()}
            />
            <FlatList
              data={cart_items}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.popular_menu_view}>
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
                      onpress={() => setAmount(amount - 1)}
                      style={styles.plus_btn_light}>
                      <Text text={'-'} />
                    </TouchableOpacity>
                    <Text text={amount} />
                    <TouchableOpacity
                      onpress={() => setAmount(amount + 1)}
                      style={styles.plus_btn}>
                      <Text text={'+'} />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <OrderDetails onPress={() => navigation.navigate('ConfirmOrder')} />
          </View>
        </ScrollView>
      </ImageContainer>
    </SafeAreaView>
  );
};

export default Cart;
