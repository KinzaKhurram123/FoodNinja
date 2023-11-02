import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Main/Home';
import Profile from '../screens/Main/Profile';
import Restaurant from '../screens/Main/Restaurant';
import ExploreMenu from '../screens/Main/ExpoloreMenu';
import Filter from '../screens/Main/Filter';
import Chats from '../screens/Main/Chat';
import Notification from '../screens/Main/Notification';
import Cart from '../screens/Main/Cart';
import ConfirmOrder from '../screens/Main/ConfirmOrder';
import EditPaymentMethod from '../screens/Main/EditPaymentMethod';
import ConfirmLocation from '../screens/Main/ConfirmLocation';
import Voucher from '../screens/Main/Voucher';
import OrderDetail from '../screens/Main/OrderDetail';
import MenuDetails from '../screens/Main/MenuDetail';
import MyOrders from '../screens/Main/MyOrders';
import Location from '../screens/Register/Location';
import LocationMap from '../screens/Main/Location';
import ChatsDetails from '../screens/Main/ChatDetails';
import Call from '../screens/Main/Call';
import CompleteOrder from '../screens/Main/CompleteOrder';

const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="ExploreMenu" component={ExploreMenu} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="EditPaymentMethod" component={EditPaymentMethod} />
      <Stack.Screen name="ConfirmLocation" component={ConfirmLocation} />
      <Stack.Screen name="Voucher" component={Voucher} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="MenuDetails" component={MenuDetails} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="LocationMap" component={LocationMap} />
      <Stack.Screen name="ChatsDetails" component={ChatsDetails} />
      <Stack.Screen name="Call" component={Call} />
      <Stack.Screen name="CompleteOrder" component={CompleteOrder} />
    </Stack.Navigator>
  );
};

export default DashboardStack;

const styles = StyleSheet.create({});
