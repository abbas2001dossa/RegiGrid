import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'

const MoreProfileComp = () => {
  return (
    <TouchableOpacity style={tw` h-85px flex-row items-center justify-center rounded-15px bg-[#3f51b5] w-full  shadow-md`}>
      <View style={tw`h-60% w-5%`}></View>
      <View style={tw`h-60% rounded-100px w-15% bg-white items-center justify-center `}> 
        <Image style={[tw`h-full w-full`,{resizeMode:'contain'}]} source={require('../../../assets/MoreScreen/av4.png')}></Image>
      </View>
      <View style={tw`h-60% w-80%   justify-center  rounded-10px  `}> 
        <TextMessage text="Abbas Dossa" styling="text-18px ml-10px font-bold text-white"></TextMessage>
      </View>
    </TouchableOpacity>
  )
}

export default MoreProfileComp