import { View,SafeAreaView,Image, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const WelcomeScreen = () => {
    const navigation=useNavigation();
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(getUser()){

            }
            else{
                navigation.navigate('SignIn'); 
            }
            
        }, 3000); 
    });

    const getUser = async () => {
        try {
          const savedUser = await AsyncStorage.getItem("userId");
          
          const currentUser = JSON.parse(savedUser);
          // console.log(currentUser);
          if(currentUser===null){
            navigation.navigate('SignIn');
          }
          if(savedUser){
            console.log("Async Storage is set  ",currentUser);
            navigation.navigate('BottomTabNavigation');
            return true;
          }
  
          
          
        } catch (error) {
          console.log(error);
        }
    };
  
    

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