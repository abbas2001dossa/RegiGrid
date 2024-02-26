import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'



const Slot = (props) => {
  return (
    <TouchableOpacity style={tw`h-100px flex-row w-full bg-${props.color} w-100% mb-10px rounded-10px shadow-lg`}>
        <View style={tw`w-20% h-full border-white border-r items-center justify-center `}>
            <TextMessage text={props.startTime} styling="text-black font-bold text-13px"></TextMessage>
            <TextMessage text="to" styling="text-black font-bold mt-5px text-13px"></TextMessage>
            <TextMessage text={props.endTime} styling="text-black font-bold mt-5px text-13px"></TextMessage>
        </View>

        <View style={tw`w-60% h-full border-white border-r items-center justify-center `}>
            <TextMessage text={props.class} styling="text-black font-bold text-15px"></TextMessage>
            <TextMessage text={props.teacherName} styling="text-black font-bold text-15px"></TextMessage>
        </View>

        <View style={tw`w-20% h-full border-white border-r items-center justify-center `}>
            <TextMessage text={props.venue} styling="text-black font-bold text-13px"></TextMessage>
        </View>


    </TouchableOpacity>
  )
}

export default Slot