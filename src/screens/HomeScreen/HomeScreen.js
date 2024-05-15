import {SafeAreaView, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import TextMessage from '../../components/TextMessage'

const HomeScreen = () => {
  const navigation=useNavigation();
  const [userData,setUserData]=useState(null);
  const [name,setName]=useState("");
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'957043024199-dtf0gphid6avhn6lo8oedv51ui9fjinf.apps.googleusercontent.com'
    });
    getCurrentUser();
  },[]);

  const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log(currentUser);
    setUserData(currentUser);
    // setName(await userData.user?.name);
    // setState({ currentUser });
  };
  return (
    <SafeAreaView style={tw`h-100% w-100% bg-white`}>
      
      <View style={tw`bg-[#3f51b5] h-10% w-full rounded-b-25px `}> 
          <Image 
            source={require('../../assets/logo.png')}
            style={[tw`h-full w-40%`,{resizeMode:'contain'}]}
          ></Image>
      </View>

      <View style={tw`h-90% w-full `}>
        
        {/* profile */}
        <View style={tw`h-40%  flex-col`}>
          <View style={tw`h-50%  items-center justify-center `}>
            {userData ? (
              <View style={[tw`w-28% h-80%  items-center justify-center`, { borderRadius: 50 }]}>
                <Image
                  source={{ uri: userData.user?.photo }}
                  style={[tw`h-full w-full`, { borderRadius: 50, resizeMode: 'cover' }]}
                />
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={tw`h-10% items-center justify-center `}>
            <TextMessage text={"Hello, " + (userData ? userData.user?.name : "")} styling="text-gray-500"></TextMessage>
          </View>
          <View style={tw`h-40%  flex-row items-center justify-center `}>

            <View style={tw`h-90%  w-33% flex-col `}>
              <View style={tw`h-80% w-full items-center justify-center `}>
                <TextMessage text="9" styling="text-black font-semibold text-45px"></TextMessage>
              </View>
              <View style={tw`h-20% w-full items-center justify-center `}>
                <TextMessage text="COURSES" styling="text-gray-500 "></TextMessage>
              </View> 
            </View>
            
            <View style={tw`h-90%  w-33% flex-col `}>
              <View style={tw`h-80% w-full items-center justify-center `}>
                <TextMessage text="3.23" styling="text-black font-semibold text-45px"></TextMessage>
              </View>
              <View style={tw`h-20% w-full items-center justify-center `}>
                <TextMessage text="CGPA" styling="text-gray-500 "></TextMessage>
              </View> 
            </View>
            
            <View style={tw`h-90%  w-33% flex-col `}>
              <View style={tw`h-80% w-full items-center justify-center `}>
                <TextMessage text="8" styling="text-black font-semibold text-45px"></TextMessage>
              </View>
              <View style={tw`h-20% w-full items-center justify-center `}>
                <TextMessage text="SEMESTER" styling="text-gray-500 "></TextMessage>
              </View> 
            </View>
          </View>
        </View>

        <View style={tw`h-60% w-full `}>
            <View style={tw`h-14%  justify-center pl-10px`}>
              <TextMessage text="News And Events" styling="text-black font-semibold text-20px"></TextMessage>
            </View>

            <View style={tw`h-86%  w-full `}>
              <ScrollView  style={tw``}>
                
                <View style={tw`h-150px w-full border-b  flex-row `}>
                  <View style={tw`h-full w-50%  items-center justify-center `}>
                    <View style={tw`h-80% w-80% items-center justify-center `}>
                      <Image source={require('../../assets/idcard.jpg')} style={[tw`h-full w-full rounded-20px`,{resizeMode:'cover'}]}></Image>
                    </View>
                  </View>
                  <View style={tw`h-full w-50%  items-center justify-center `}>
                    <TextMessage text="All students should be informed that from June 4th of 2021, their student ID card  should ... " styling="text-black font-semibold text-15px max-w-150px"></TextMessage>
                  </View>
                </View>
                <View style={tw`h-150px w-full border-b  flex-row `}>
                  <View style={tw`h-full w-50%  items-center justify-center `}>
                    <TextMessage text="All students should be informed that from June 4th of 2021, their student ID card  should ... " styling="text-black font-semibold text-15px max-w-150px"></TextMessage>
                  </View>
                  <View style={tw`h-full w-50%  items-center justify-center `}>
                    <View style={tw`h-80% w-80% items-center justify-center `}>
                      <Image source={{uri:"https://rsilpak.org/wp-content/uploads/2020/05/c0481846-wuhan_novel_coronavirus_illustration-spl-768x512.jpg"}} style={[tw`h-full w-full rounded-20px`,{resizeMode:'cover'}]}></Image>
                    </View>
                  </View>
                </View>
                <View style={tw`h-150px w-full  border-b flex-row `}>
                  <View style={tw`h-full w-50%  items-center justify-center `}>
                    <View style={tw`h-80% w-80% items-center justify-center `}>
                      <Image source={{uri:'https://academiamag.com/wp-content/uploads/2022/05/shutterstock_1664708983.jpg'}} style={[tw`h-full w-full rounded-20px`,{resizeMode:'cover'}]}></Image>
                    </View>
                  </View>
                  <View style={tw`h-full w-50%  items-center justify-center `}>
                    <TextMessage text="Students who require any Special arrangements e.g. extra time, separate location, etc.  Kindly fill out the following form" styling="text-black font-semibold text-15px max-w-150px"></TextMessage>
                  </View>
                </View>

              </ScrollView>
            </View>
        </View>


      </View>
    
    </SafeAreaView>
  )
}

export default HomeScreen