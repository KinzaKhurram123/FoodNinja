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
    </Stack.Navigator>
  );
};

export default DashboardStack;

const styles = StyleSheet.create({});
