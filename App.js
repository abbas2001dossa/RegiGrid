import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import messaging from '@react-native-firebase/messaging';



const App = () => {

  useEffect(() => {
    getDeviceToken();
  }, []);

  const getDeviceToken= async ()=>{
    let token = await messaging().getToken();
    console.log(token); //rcvd successfully
  }
  
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}

export default App