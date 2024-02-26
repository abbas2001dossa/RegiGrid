import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import tw from 'twrnc';
import TextMessage from '../../../components/TextMessage';


const SignInButton = (props) => {
  return (
    <TouchableOpacity onPress={()=>{props.onPress()}} style={tw`w-70% h-50px shadow-lg flex-row bg-[#3f51b5] rounded-5px`}>
      
      <View style={tw`h-full w-20% items-center justify-center `}>
        <Image 
            source={require('../../../assets/signinScreen/googleIcon.png')}
            style={[tw`h-80% w-full`,{resizeMode:'contain'}]}
        ></Image>
      </View>
      <View style={tw`w-80% h-full ml-5px justify-center`}>
        <TextMessage text="Sign In With Google" styling="text-20px text-white font-bold "></TextMessage>
      </View>

    </TouchableOpacity>
  )
}

export default SignInButton