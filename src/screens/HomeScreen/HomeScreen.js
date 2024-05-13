import {SafeAreaView, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import AttendanceChart from './components/AttendanceChart'
import TextMessage from '../../components/TextMessage'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`h-100% w-100% bg-white`}>
      
      <View style={tw`bg-[#3f51b5] h-10% w-full rounded-b-25px `}> 
          <Image 
            source={require('../../assets/logo.png')}
            style={[tw`h-full w-40%`,{resizeMode:'contain'}]}
          ></Image>
      </View>

      <View style={tw`h-full w-full `}>
        {/* <ScrollView style={tw``}> */}

          <View style={tw`h-40%  mt-50px  w-full p-13px`}>
            <View style={tw`bg-white h-full w-full rounded-20px shadow-lg flex-row gap-10px `}>
              <View style={tw`h-full w-40% border `}>
                
              </View>
              <View style={tw`h-full w-50% border `}>

              </View>
            </View>
          </View>



          {/* functionalities  */}
          <View style={tw`h-35% p-10px w-full gap-10px  mt-20px`}>
            <View style={tw`h-100% w-100% flex-row gap-10px`}>  
              <TouchableOpacity onPress={()=>navigation.navigate("CourseRegistration")} style={tw`bg-white h-full w-55%  rounded-20px shadow-lg`}>
                <Image style={[tw`h-50% w-50% absolute top-10px right-10px`,{resizeMode:'contain'}]} source={require('../../assets/HomeScreen/courseRegistration.jpeg')}></Image>
                <View style={[tw`absolute bottom-10px max-w-100px left-10px`, { alignItems: 'center' }]}>
                  <TextMessage text="Course Registration" styling={"text-black font-bold  text-18px"} />
                </View>
                <Image  style={tw`absolute h-25% w-25% bottom-6px  right-5px`} source={require('../../assets/HomeScreen/click.gif')}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("CourseExchange")} style={tw`bg-white h-70% w-40%  rounded-20px shadow-lg`}>
                <Image style={[tw`h-60% w-60% absolute top-10px right-10px`,{resizeMode:'contain'}]} source={require('../../assets/HomeScreen/courseExchange.jpg')}></Image>
                <View style={[tw`absolute bottom-10px max-w-100px left-10px`, { alignItems: 'center' }]}>
                  <TextMessage text="Course Exchange" styling={"text-black font-bold  text-18px"} />
                </View>
              </TouchableOpacity>
            </View>
            
            
          </View>

          {/* Attendance */}
          {/* <View style={tw` w-full h-300px p-10px`}>
            <View style={tw`w-full h-30px mb-10px`}>
              <TextMessage text="Attendance" styling="text-20px text-black font-bold "></TextMessage>
            </View>
            <AttendanceChart ></AttendanceChart>
          </View> */}

          {/* Gpa */}
          {/* <View style={tw`mt-50px  w-full h-300px p-10px`}>
            <View style={tw`w-full h-30px `}>
              <TextMessage text="GPA" styling="text-20px text-black font-bold "></TextMessage>
            </View>
            <GpaChart></GpaChart>
          </View> */}

          <View style={tw`h-60px mt-100px`}></View> 
        {/* </ScrollView> */}
      </View>
    
    </SafeAreaView>
  )
}

export default HomeScreen