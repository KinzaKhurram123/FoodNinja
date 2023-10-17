import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import {DarkTheme, DefaultTheme, isLightTheme} from '../constant/themes';
import Onboarding from '../screens/Onboarding';
import Start from '../screens/Start';
import Login from '../screens/Login';
import ForgetPasword from '../screens/ForgetPassword';
import Signup from '../screens/Signup';
import CreatAccount from '../screens/CreatAccount';
import PaymentMethod from '../screens/PaymentMethod';
import UploadImage from '../screens/UploadImage';
import Location from '../screens/Location';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPasword" component={ForgetPasword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="CreatAccount" component={CreatAccount} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
