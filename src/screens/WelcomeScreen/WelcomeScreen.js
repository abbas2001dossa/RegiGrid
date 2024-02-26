import { View,SafeAreaView,Image, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation=useNavigation();
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('SignIn'); 
        }, 3000); 
    })

  return (
    <SafeAreaView style={tw`justify-center items-center w-100% h-100% bg-[#3f51b5]`}>
        <Image
            style={[tw`h-100% w-100% `,{resizeMode:'contain'}]}
            source={require('../../assets/logo.png')}
        ></Image>
        
        <View style={tw`absolute top-150px h-full justify-center w-full`}>
            <ActivityIndicator  size="large" color="white" />
        </View>

    </SafeAreaView>
  )
}

export default WelcomeScreen