import {SafeAreaView, View, Image, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AttendanceChart from './components/AttendanceChart'
import TextMessage from '../../components/TextMessage'


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-100% w-100% bg-white`}>
      
      <View style={tw`bg-[#3f51b5] h-10% w-full rounded-b-25px `}> 
          <Image 
            source={require('../../assets/logo.png')}
            style={[tw`h-full w-40%`,{resizeMode:'contain'}]}
          ></Image>
        </View>

      <View style={tw`h-full w-full `}>
        <ScrollView style={tw``}>

          {/* functionalities  */}
          <View style={tw`h-400px p-10px flex-row  border w-full  mt-50px`}>
            <View style={tw`h-60% w-100% flex-row gap-10px`}>  
              <View style={tw`bg-gray-300 h-full w-55%  rounded-20px shadow-md`}>

              </View>
              <View style={tw`bg-pink-300 h-70% w-40%  rounded-20px shadow-md`}>

              </View>
            </View>
            <View style={tw`h-40% w-100%`}>
              <ScrollView style={tw``}>

              </ScrollView>
            </View>
            
          </View>

          {/* Attendance */}
          <View style={tw`mt-50px  w-full h-300px p-10px`}>
            <View style={tw`w-full h-30px mb-10px`}>
              <TextMessage text="Attendance" styling="text-20px text-black font-bold "></TextMessage>
            </View>
            <AttendanceChart ></AttendanceChart>
          </View>
          

           <View style={tw`h-60px mt-100px`}></View> 
        </ScrollView>
      </View>
    
    </SafeAreaView>
  )
}

export default HomeScreen