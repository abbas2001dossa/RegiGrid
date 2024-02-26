import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import MoreScreen from '../screens/MoreScreen/MoreScreen';
import TimeTableScreen from '../screens/TimeTableScreen/TimeTableScreen';
import QRScanScreen from '../screens/QRScanScreen/QRScanScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarLabel: () => null, 
            tabBarStyle:[tw`bg-[#3f51b5] text-black rounded-10px items-center m-8px absolute mx-20px mb-10px h-50px`],
            tabBarIcon: ({ focused}) => {
                let iconName;
      
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home'; 
                } 
                else if (route.name === 'QRScan') {
                  iconName = focused ? 'qrcode-scan' : 'qrcode-scan'; 
                } 
                else if (route.name === 'TimeTable'){
                    iconName= focused ? 'timetable' : 'timetable';
                } 
                else if (route.name === 'More'){
                    iconName= focused ? 'account-arrow-right' : 'account-arrow-right';
                }
                return <MaterialCommunityIcons name={iconName} size={30} color={"white"} />;
              }
        })}
    >
        <Tab.Screen 
            name='Home' 
            component={HomeScreen} 
            options={{headerShown:false}}

        ></Tab.Screen>
        <Tab.Screen name="QRScan" component={QRScanScreen} options={{headerShown:false}}/>
        <Tab.Screen name="TimeTable" component={TimeTableScreen} options={{headerShown:false}}/>
        <Tab.Screen name='More' component={MoreScreen} options={{headerShown:false}} ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigator