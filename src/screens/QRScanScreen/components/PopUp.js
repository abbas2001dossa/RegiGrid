import {Image, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import TextMessage from '../../../components/TextMessage';
import { useNavigation } from '@react-navigation/native';
import * as Animatible from "react-native-animatable"

const PopUp = (props) => {
  const navigation=useNavigation();
  const [loading,setLoading]=useState(true);
  
  useEffect(() => {
    const timeout= setTimeout(()=>{
        setLoading(false);
    },4000);
  
  }, []);


  return (
    <View style={tw`absolute h-200px w-full  items-center top-30%`}>
      <View style={[tw`h-full rounded-10px shadow-lg  w-45% bg-white z-50`,{opacity:1}]}>
       
       {loading ?(
        <Image
            source={require('../../../assets/loading2.gif')}
            style={[tw`w-full h-80%`,{resizeMode:'contain'}]}
        ></Image>
       ):(
        <Image
            source={require('../../../assets/checked.gif')}
            style={[tw`w-full h-80%`,{resizeMode:'contain'}]}
        ></Image>
       )}
       
        {loading?(
            <></>
        ):(
            <View style={tw`h-20% w-full items-center justify-center  `}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home');setLoading(true);props.onClose()}} style={tw`h-80% rounded-20px shadow-md bg-green-400 w-50% items-center justify-center`}>
                    <TextMessage text='Ok' styling="text-black text-15px font-bold"></TextMessage>
                </TouchableOpacity>
            </View>
        )}

      </View>
    </View>
    ) 
}

export default PopUp;