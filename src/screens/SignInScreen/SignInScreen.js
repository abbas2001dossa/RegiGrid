import { View,Image,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import * as Animatible from "react-native-animatable"
import TextMessage from '../../components/TextMessage'
import SignInButton from '../SignInScreen/components/SignInButton'
import { useNavigation } from '@react-navigation/native'
import {
  GoogleOneTapSignIn,
  statusCodes,
  isErrorWithCode,
  GoogleSignin,
  auth
} from '@react-native-google-signin/google-signin'


const SignInScreen = () => {

  const [googleIdToken,setGoogleIdToken]=useState();
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'957043024199-dtf0gphid6avhn6lo8oedv51ui9fjinf.apps.googleusercontent.com'
    })
  },[]);
  const navigation=useNavigation();


  async function onGoogleButtonPress(){
    try{
      
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
      const {idToken} = await GoogleSignin.signIn();
      console.log(idToken);
      setGoogleIdToken(idToken);
      navigation.navigate('BottomTabNavigation');
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // return auth().signInWithCredential(googleCredential);
    }
    catch(err){
      console.log(err);
    }
    
  }




  return (
    <SafeAreaView style={tw`h-100% bg-white w-100%`}>
        
        {/* logo */}
        <View style={tw`bg-[#3f51b5] h-10% w-full rounded-b-25px`}> 
          <Image 
            source={require('../../assets/logo.png')}
            style={[tw`h-full w-40%`,{resizeMode:'contain'}]}
          ></Image>
        </View>
       
        
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
            <SignInButton onPress={onGoogleButtonPress}></SignInButton>
            
        </View>
    </SafeAreaView>
  )
}

export default SignInScreen