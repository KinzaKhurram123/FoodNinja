import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import TabBarComponent from './component/TabBarComponent';

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
