import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import Feather  from 'react-native-vector-icons/Feather';

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
    <View style={tw` h-15% flex-row items-center justify-center w-full border-b border-gray-400`}>
      <View style={tw`h-90% w-5%`}></View>
      <View style={tw`h-90%  w-15% items-center justify-center rounded-100px`}> 
        <Image style={[tw`h-full w-full `,{resizeMode:'contain', borderRadius:50}]} source={userData ? {uri:userData.user?.photo} : require('../../../assets/MoreScreen/av4.png')}></Image>
      </View>
      <View style={tw`h-90% w-70%   justify-center  `}> 
        <TextMessage text={userData ? userData.user?.name :"Abbas "} styling="text-15px ml-20px font-semibold text-black"></TextMessage>
        <TextMessage text={userData ? userData.user?.email:"Abbas "} styling="text-15px ml-20px  text-gray-500"></TextMessage>
      </View>
      <View style={tw`h-90% w-10% items-center justify-center `}>
        <Feather name="edit" size={24} color="#3f51b5" />
      </View>
    </View>
  )
}

export default MoreProfileComp