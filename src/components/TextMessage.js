import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const TextMessage = (props) => {
  return (
    <Text style={tw`${props.styling}`} >{props.text}</Text>
  )
}

export default TextMessage