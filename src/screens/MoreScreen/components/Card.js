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
        webClientId:process.env.WEB_CLIENT_ID
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
    <TouchableOpacity onPress={signOut} style={tw`h-10% mt-50px border-t border-gray-400 flex-row items-center justify-center `}>
      <View style={tw`w-20% h-90%  items-center justify-center `}>
        <MaterialCommunityIcons name="logout" size={24} color="black" />
      </View>
      <View style={tw`w-80% h-90%  justify-center `}>
        <TextMessage text="Signout" styling="text-gray-500 text-17px font-bold "></TextMessage>
      </View>
    </TouchableOpacity>
  )
}

export default Card