import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainNavigator"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainNavigation" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
