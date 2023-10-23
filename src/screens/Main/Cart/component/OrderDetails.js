import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../../../constant';
import {Button} from '../../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const OrderDetails = ({onPress}) => {
  return (
    <View style={styles.main_view}>
      <View style={styles.sub_view}>
        <Text style={styles.text}>Sub Total</Text>
        <Text style={styles.text}>120 $</Text>
      </View>
      <View style={styles.sub_view}>
        <Text style={styles.text}>Delivery Charge</Text>
        <Text style={styles.text}>10 $</Text>
      </View>
      <View style={styles.sub_view}>
        <Text style={styles.text}>Dicount</Text>
        <Text style={styles.text}>20 $</Text>
      </View>
      <View style={styles.sub_view}>
        <Text style={styles.total_text}>Total</Text>
        <Text style={styles.total_text}>150 $</Text>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.btn_text}>Placed Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    marginTop: SIZES.padding * 2,
    borderRadius: SIZES.padding,
  },
  sub_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...FONTS.Medium15,
  },
  total_text: {
    ...FONTS.Bold21,
  },
  btn: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding2,
    marginTop: SIZES.padding,
    width: '90%',
    alignSelf: 'center',
    borderRadius: SIZES.padding2,
  },
  btn_text: {
    ...FONTS.Medium15,
    color: COLORS.primary,
    textAlign: 'center',
  },
});
