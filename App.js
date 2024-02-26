import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}

export default App