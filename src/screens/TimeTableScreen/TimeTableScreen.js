import { View, Text ,SafeAreaView , ScrollView} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Header from '../../components/Header'
import TabViewComponent from './components/TabViewComponent'
import TabVIew from './components/TabView'

const TimeTableScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-100% w-100% `}>

      {/* normal header */}
      <View style={tw`h-10%`}>
        <Header text="My TimeTable"></Header>
      </View>

      {/* scorll List */}
      {/* <View style={tw`h-10% `}>
        <ScrollView
          style={tw` border `}
          showsHorizontalScrollIndicator={false}
          horizontal
        >

        </ScrollView>
      </View> */}
      
      {/* <TabViewComponent></TabViewComponent> */}
      <TabVIew></TabVIew>

    </SafeAreaView>
  )
}

export default TimeTableScreen;