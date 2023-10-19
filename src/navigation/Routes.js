import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Register/Splash';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
