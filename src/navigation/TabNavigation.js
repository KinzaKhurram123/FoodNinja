import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import DashboardStack from './DashboardStack';
import TabBarComponent from './component/TabBarComponent';
import {FONTS, SIZES} from '../constant';
import {DarkTheme} from '../constant/themes';
import home_icon from '../assets/icons/home_icon';
import profileIcon from '../assets/icons/profile-icon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardStack"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      tabBar={props => <TabBarComponent {...props} />}>
      <Tab.Screen name="DashboardStack" component={DashboardStack} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
