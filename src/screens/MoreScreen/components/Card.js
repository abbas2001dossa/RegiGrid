import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
    const navigation=useNavigation();
    return (
    <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}} style={tw`mt-400px h-80px flex-row items-center justify-center rounded-15px bg-white w-full  shadow-lg`}>
      <View style={tw`h-60% w-5%`}></View>
      <View style={tw`h-60% w-15% rounded-100px items-center justify-center bg-[#3f51b5]`}> 
        {/* <Image style={[tw`h-full w-full`,{resizeMode:'contain'}]} source={require('../../../assets/MoreScreen/av4.png')}></Image> */}
        <MaterialCommunityIcons name="logout" size={24} color="white"></MaterialCommunityIcons>
      </View>
      <View style={tw`h-60% w-80% ml-10px  justify-center  rounded-10px bg-white `}> 
        <TextMessage text="Log out" styling="text-18px font-semibold text-black"></TextMessage>
      </View>
    </TouchableOpacity>
  )
}

export default Card