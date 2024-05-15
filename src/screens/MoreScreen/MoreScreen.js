import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoreProfileComp from './components/MoreProfileComp';
import Card from './components/Card';
import TextMessage from '../../components/TextMessage';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Feather  from 'react-native-vector-icons/Feather';
import  AntDesign  from 'react-native-vector-icons/AntDesign';


const MoreScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-100% pl-15px pr-15px `}>
      <View style={tw`h-5% w-full`}></View>
      {/* profile */}
      <MoreProfileComp></MoreProfileComp>


      <TouchableOpacity style={tw`h-10%  flex-row items-center justify-center `}>
        <View style={tw`w-20% h-90%  items-center justify-center `}>
          <FontAwesome name="bar-chart-o" size={24} color="gray" />
        </View>
        <View style={tw`w-80% h-90%  justify-center `}>
          <TextMessage text="Profile Activity " styling="text-gray-500 text-17px font-bold "></TextMessage>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={tw`h-10%  flex-row items-center justify-center `}>
        <View style={tw`w-20% h-90%  items-center justify-center `}>
        <FontAwesome name="files-o" size={24} color="black" />
        </View>
        <View style={tw`w-80% h-90%  justify-center `}>
          <TextMessage text="Manage Exams" styling="text-gray-500 text-17px font-bold "></TextMessage>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={tw`h-10%  flex-row items-center justify-center `}>
        <View style={tw`w-20% h-90%  items-center justify-center `}>
          <Feather name="settings" size={24} color="black" />
        </View>
        <View style={tw`w-80% h-90%  justify-center `}>
          <TextMessage text="Settings" styling="text-gray-500 text-17px font-bold "></TextMessage>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={tw`h-10%  flex-row items-center justify-center `}>
        <View style={tw`w-20% h-90%  items-center justify-center `}>
          <AntDesign name="questioncircleo" size={24} color="black" />
        </View>
        <View style={tw`w-80% h-90%  justify-center `}>
          <TextMessage text="Help Center" styling="text-gray-500 text-17px font-bold "></TextMessage>
        </View>
      </TouchableOpacity>
      





      {/* //logout  */}
      <Card></Card>

    </SafeAreaView>
  )
}

export default MoreScreen