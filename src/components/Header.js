import { View, Text } from 'react-native'
import React from 'react'
import tw  from 'twrnc'
import TextMessage from '../components/TextMessage'

const Header = (props) => {
  return (
    <View style={tw`h-full w-full bg-[#3f51b5] pl-4 justify-center`}>
      <TextMessage text={props.text} styling="text-white text-20px font-bold "></TextMessage>
    </View>
  )
}

export default Header