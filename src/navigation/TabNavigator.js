import { View, Text } from 'react-native';
import React from 'react';
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
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => {
                    let textName;

                    if (route.name === 'Home') {
                        textName = focused ? 'Home' : 'Home';
                    }
                    // else if (route.name === 'QRScan') {
                    //     textName = focused ? 'Attendance' : 'Attendance';
                    // }
                    else if (route.name === 'TimeTable') {
                        textName = focused ? 'Timetable' : 'Timetable';
                    }
                    else if (route.name === 'More') {
                        textName = focused ? 'Profile' : 'Profile';
                    }
                    return <Text style={{ color: focused ? 'orange' : 'white', fontSize: 10, marginBottom:5 }}>{textName}</Text>;
                },
                tabBarStyle: {
                    backgroundColor: '#3f51b5',
                    padding: 8,
                    marginHorizontal: 20,
                    marginBottom: 10,
                    height: 50,
                    borderRadius: 10,
                    alignItems: 'center'
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    }
                    else if (route.name === 'TimeTable') {
                        iconName = focused ? 'timetable' : 'timetable';
                    }
                    else if (route.name === 'More') {
                        iconName = focused ? 'account-arrow-right' : 'account-arrow-right';
                    }
                    return <MaterialCommunityIcons name={iconName} size={20} color={focused ?"orange":"white"} />;
                }
            })}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
            ></Tab.Screen>
            {/* <Tab.Screen name="QRScan" component={QRScanScreen} options={{ headerShown: false }} /> */}
            <Tab.Screen name="TimeTable" component={TimeTableScreen} options={{ headerShown: false }} />
            <Tab.Screen name='More' component={MoreScreen} options={{ headerShown: false }} ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigator;
