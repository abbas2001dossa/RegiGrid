import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import TextMessage from '../../../components/TextMessage'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleOneTapSignIn,
  statusCodes,
  isErrorWithCode,
  GoogleSignin,
  auth
} from '@react-native-google-signin/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Card = () => {
    const navigation=useNavigation();
    useEffect(()=>{
      GoogleSignin.configure({
        webClientId:'957043024199-dtf0gphid6avhn6lo8oedv51ui9fjinf.apps.googleusercontent.com'
      })
    },[]);

    const handleAsyncTokenDestruction =async() =>{
      try{
        const deleteAync =await AsyncStorage.removeItem('userId');
        if(deleteAync){
          return true ;
        }
      }
      catch(error){
        console.log(error);
        return false;
      }
    }

    const signOut = async () => {
      try {
        if (handleAsyncTokenDestruction())
        {
          await GoogleSignin.signOut();
          navigation.navigate('SignIn');
        }
        
        // setState({ user: null }); // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }
    };
    return (
    <TouchableOpacity onPress={signOut} style={tw`mt-400px h-50px flex-row items-center justify-center rounded-15px bg-white w-full  shadow-md`}>
      <View style={tw`h-60% w-5%`}></View>
      <View style={tw`h-60% w-15% rounded-100px items-center justify-center bg-[#3f51b5]`}> 
        {/* <Image style={[tw`h-full w-full`,{resizeMode:'contain'}]} source={require('../../../assets/MoreScreen/av4.png')}></Image> */}
        <MaterialCommunityIcons name="logout" size={24} color="white"></MaterialCommunityIcons>
      </View>
      <View style={tw`h-60% w-75% ml-10px  justify-center  rounded-10px bg-white `}> 
        <TextMessage text="Log out" styling="text-18px font-semibold text-black"></TextMessage>
      </View>
    </TouchableOpacity>
  )
}

export default Card