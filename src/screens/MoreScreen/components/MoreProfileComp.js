import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const MoreProfileComp = () => {
  
  const [userData,setUserData]=useState(null);
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
    // setState({ currentUser });
  };

  return (
    <View style={tw` h-85px flex-row items-center justify-center rounded-15px bg-[#3f51b5] w-full  shadow-md`}>
      <View style={tw`h-60% w-5%`}></View>
      <View style={tw`h-60%  w-15% items-center justify-center `}> 
        <Image style={[tw`h-full rounded-100px w-full`,{resizeMode:'contain'}]} source={userData ? {uri:userData.user?.photo} : require('../../../assets/MoreScreen/av4.png')}></Image>
      </View>
      <View style={tw`h-60% w-80%   justify-center  rounded-10px  `}> 
        <TextMessage text={userData ? userData.user?.name :"Abbas "} styling="text-18px ml-20px font-bold text-white"></TextMessage>
      </View>
    </View>
  )
}

export default MoreProfileComp