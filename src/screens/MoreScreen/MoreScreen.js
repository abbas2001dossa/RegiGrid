import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoreProfileComp from './components/MoreProfileComp';
import Card from './components/Card';


const MoreScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-100% p-10px`}>

      {/* profile */}
      <MoreProfileComp></MoreProfileComp>

      {/* differernt cards */}
      <Card></Card>

    </SafeAreaView>
  )
}

export default MoreScreen