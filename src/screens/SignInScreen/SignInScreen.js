import { View, Text,Image,SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import * as Animatible from "react-native-animatable"
import TextMessage from '../../components/TextMessage'
import SignInButton from '../SignInScreen/components/SignInButton'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {

  const navigation=useNavigation();

  return (
    <SafeAreaView style={tw`h-100% bg-white w-100%`}>
        
        {/* logo */}
        <View style={tw`bg-[#3f51b5] h-10% w-full rounded-b-25px`}> 
          <Image 
            source={require('../../assets/logo.png')}
            style={[tw`h-full w-40%`,{resizeMode:'contain'}]}
          ></Image>
        </View>
        
        {/* <Animatible.Image
            source={require("../../assets/signinScreen/universityGif.gif")}
            animation="slideInUp"
            iterationCount={1}
            style={tw`h-50% w-100% `}
        >
        </Animatible.Image> */}
        
        <View style={tw`h-50% flex-1 w-100% items-center justify-center`}>
          <Image
            source={require('../../assets/signinScreen/universityGif.gif')} // Replace './yourGif.gif' with the correct path to your GIF file
            style={tw`h-90% w-full`} // Adjust width and height as needed
          />
        </View>

        <View style={tw`h-20% w-full items-center`}>
          <TextMessage text="Welcome to RegiGrid"  styling="text-black text-25px font-bold max-w-85%" ></TextMessage>
          <TextMessage text="Welcome to RegiGrid, your comprehensive learning management system ! "  
          styling="text-gray-500 text-15px  max-w-85% text-center " ></TextMessage>
        </View>

        {/* signin Button */}
        <View style={tw`h-20% w-full items-center justify-center `}>
            <SignInButton onPress={()=>navigation.navigate('BottomTabNavigation')}></SignInButton>
        </View>
    </SafeAreaView>
  )
}

export default SignInScreen