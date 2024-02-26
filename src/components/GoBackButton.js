import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc'


const GoBackButton = () => {
    const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={tw`absolute top-15px left-15px h-40px w-40px rounded-20px shadow-lg bg-[#3f51b5] items-center justify-center`}>
        <MaterialCommunityIcons name={'arrow-left-bold'}  size={30} color={"white"}></MaterialCommunityIcons>
    </TouchableOpacity>
  )
}

export default GoBackButton