import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import TabNavigator from './TabNavigator';
import CourseRegistration from '../screens/CourseRegistration/CourseRegistration';
import CourseExhange from '../screens/CourseExchange/CourseExhange';

const StackNavigator = () => {
    const Stack=createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='BottomTabNavigation' component={TabNavigator} options={{headerShown:false}} ></Stack.Screen>
        <Stack.Screen name='CourseRegistration' component={CourseRegistration} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='CourseExchange' component={CourseExhange} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator