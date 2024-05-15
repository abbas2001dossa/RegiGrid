import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import TextMessage from '../../components/TextMessage';
import SignInButton from '../SignInScreen/components/SignInButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import Toast from 'react-native-toast-message';


const SignInScreen = () => {
  const [googleIdToken, setGoogleIdToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '957043024199-dtf0gphid6avhn6lo8oedv51ui9fjinf.apps.googleusercontent.com',
    });
  }, []);

  const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem('userId', JSON.stringify(value));
      console.log('User ID stored successfully');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Sign in Error',
        text2: error,
    });
    }
  };

  const onGoogleButtonPress = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      setGoogleIdToken(idToken);
      if (idToken) {
        await storeUser(idToken);
        navigation.navigate('BottomTabNavigation');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          {/* logo */}
          <View style={tw`bg-[#3f51b5] h-10% w-full rounded-b-25px`}> 
            <Image 
              source={require('../../assets/logo.png')}
              style={[tw`h-full w-40%`,{resizeMode:'contain'}]}
            ></Image>
          </View>

          {/* University GIF */}
          <View style={{ flex: 1, height: '50%', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../assets/signinScreen/universityGif.gif')}
              style={{ height: '90%', width: '100%', resizeMode: 'contain' }}
            />
          </View>

          {/* Welcome Message */}
          <View style={{ height: '20%', width: '100%', alignItems: 'center' }}>
            <TextMessage text="Welcome to RegiGrid" styling="text-black text-25px font-bold max-w-85%" />
            <TextMessage
              text="Welcome to RegiGrid, your comprehensive learning management system!"
              styling="text-gray-500 text-15px max-w-85% text-center"
            />
          </View>

          {/* Signin Button */}
          <View style={{ height: '20%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <SignInButton onPress={onGoogleButtonPress} />
          </View>
        </SafeAreaView>
  )
};

export default SignInScreen;
