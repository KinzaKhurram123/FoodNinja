import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/Register/Onboarding';
import Login from '../screens/Register/Login';
import ForgetPasword from '../screens/Register/ForgetPassword';
import Signup from '../screens/Register/Signup';
import CreatAccount from '../screens/Register/CreatAccount';
import PaymentMethod from '../screens/Register/PaymentMethod';
import UploadImage from '../screens/Register/UploadImage';
import Location from '../screens/Register/Location';
import Congrats from '../screens/Register/Congrats';
import ConformationCode from '../screens/Register/ConfirmationCode';
import RessetPaswrod from '../screens/Register/ResetPasword';
import SelectLocation from '../screens/Register/SelectLocation';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPasword" component={ForgetPasword} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="CreatAccount" component={CreatAccount} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="UploadImage" component={UploadImage} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Congrats" component={Congrats} />
      <Stack.Screen name="ConformationCode" component={ConformationCode} />
      <Stack.Screen name="RessetPaswrod" component={RessetPaswrod} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
    </Stack.Navigator>
  );
};

export default AuthStack;
