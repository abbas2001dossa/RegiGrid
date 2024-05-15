import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HorizontalScrollMenu, { RouteProps } from '@nyashanziramasanga/react-native-horizontal-scroll-menu/src';
import { useState } from 'react';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slot from './Slot';

const TabView = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [slotsData,SetSlotsData]=useState('slotsDataMonday');
  
  const NavigationTabs = [
    {
      id: 0,
      name: 'Monday',
    },
    {
      id: 1,
      name: 'Tuesday',
    },
    {
      id: 2,
      name: 'Wednesday',
    },
    {
      id: 3,
      name: 'Thursday',
    },
    {
      id: 4,
      name: 'Friday',
    },
    {
      id: 5,
      name: 'Saturday',
    },
  ];

  const onPress = (route: RouteProps) => {
    setSelectedIndex(route.id);
    return (
      <View >
        <Text style={tw`text-black text-12px `}>Hello World </Text>
      </View>
    )
  };

  const slotsDataMonday = [
    { id: '1', venue: "B-12 EE", class: "AI BCS-6E", teacherName: "Dr. Fahad Wasseem", color: 'pink-600', startTime: "8:00 AM", endTime: "8:55 AM" },
    { id: '2', venue: "B-12 EE", class: "AI BCS-6E", teacherName: "Dr. Fahad Wasseem", color: 'pink-600', startTime: "9:00 AM", endTime: "9:55 AM" },
    { id: '3', venue: "E-2  CS", class: "WE BCS-6E", teacherName: "Dr. Muntazir Ahmed", color: 'green-600', startTime: "11:00 AM", endTime: "11:55 AM" },
    { id: '4', venue: "B-10 EE", class: "BPE BCS-6E", teacherName: "Dr. Amna Baig", color: 'yellow-600', startTime: "1:00 PM", endTime: "1:55 PM" },
    { id: '5', venue: "B-10 EE", class: "TOA BCS-6E", teacherName: "Dr. Ahil Aleem", color: 'blue-600', startTime: "3:00 PM", endTime: "3:55 PM" }
    // Add more slot data as needed
  ];
  const slotsDataTuesday = [
    { id: '1', venue: "B-12 EE", class: "AI BCS-6E", teacherName: "Dr. Fahad Wasseem", color: 'pink-600', startTime: "8:30 AM", endTime: "9:25 AM" },
    { id: '2', venue: "B-12 EE", class: "AI BCS-6E", teacherName: "Dr. Fahad Wasseem", color: 'pink-600', startTime: "8:30 AM", endTime: "9:25 AM" },
    // Add more slot data as needed
  ];
  return (
    <SafeAreaView>
      <HorizontalScrollMenu
        items={NavigationTabs}
        onPress={onPress}
        selected={selectedIndex}
        itemWidth={90}
        scrollAreaStyle={{ height: 50 }}
      />
     <View style={tw`bg-white `} >
      <FlatList 
        style={tw`p-10px pb-100px`} 
        data={slotsDataMonday}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <Slot 
            venue={item.venue} 
            class={item.class} 
            teacherName={item.teacherName}
            color={item.color} 
            startTime={item.startTime} 
            endTime={item.endTime}
          ></Slot>
        )}
      >
      </FlatList>
     </View> 
    </SafeAreaView>
  )
}

export default TabView;