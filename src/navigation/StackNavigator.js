import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator';

const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='BottomTabNavigation'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='BottomTabNavigation' component={TabNavigator} options={{headerShown:false}} ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator