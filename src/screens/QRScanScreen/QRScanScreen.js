import { View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import QRCodeScanner from './components/QRCodeScan'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextMessage from '../../components/TextMessage';
import { useNavigation } from '@react-navigation/native';
import GoBackButton from '../../components/GoBackButton';

const QRScanScreen = () => {
    const [flash,setFlash]=useState(false);
    const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`h-100% w-100% bg-white `}>
        {/* <View style={tw`h-10% w-100% bg-white items-center justify-center `}>
            <TextMessage text="Mark Attendance" styling="text-30px text-black font-bold "></TextMessage>
        </View> */}
        <QRCodeScanner flash={flash}></QRCodeScanner>

        {/* absolute torch  */}
        <TouchableOpacity onPress={()=>setFlash(!flash)} style={tw`absolute top-15px right-15px h-40px w-40px rounded-20px shadow-lg bg-[#3f51b5] items-center justify-center`}>
            <MaterialCommunityIcons name={flash ? 'flash' :'flash-off'}  size={30} color={"white"}></MaterialCommunityIcons>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default QRScanScreen