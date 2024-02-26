import * as React from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import tw from 'twrnc'
import Slot from './Slot';


const FirstRoute = () => (
  <View style={tw`bg-white h-full`} >
    <ScrollView style={tw`p-10px pb-100px`} vertical showsVerticalScrollIndicator={false} >
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <Slot venue="S2" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='yellow-300' startTime="11:30 AM" endTime="12:25 AM"></Slot>
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <View style={tw`h-100px`}></View>
    </ScrollView>
    
  </View>
);

const SecondRoute = () => (
  <View style={tw`bg-white `} >
    <ScrollView style={tw`p-10px pb-100px`} vertical showsVerticalScrollIndicator={false} >
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <Slot venue="S2" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='yellow-300' startTime="11:30 AM" endTime="12:25 AM"></Slot>
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <View style={tw`h-100px`}></View>

    </ScrollView>
  </View>
);

const ThirdRoute=()=>(
  <View style={tw`bg-white `} >
    <ScrollView style={tw`p-10px pb-100px`} vertical showsVerticalScrollIndicator={false} >
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <Slot venue="S2" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='yellow-300' startTime="11:30 AM" endTime="12:25 AM"></Slot>
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <View style={tw`h-100px`}></View>

    </ScrollView>
  </View>
);

const FourthRoute=()=>(
  <View></View>
);

const FifthRoute=()=>(
  <View style={tw`bg-white `} >
    <ScrollView style={tw`p-10px pb-100px`} vertical showsVerticalScrollIndicator={false} >
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <Slot venue="S2" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='yellow-300' startTime="11:30 AM" endTime="12:25 AM"></Slot>
      <Slot venue="B-12 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-600' startTime="8:30 AM" endTime="9:25 AM"></Slot>
      <Slot venue="B-10 EE" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='pink-200' startTime="9:30 AM" endTime="10:25 AM"></Slot>
      <Slot venue="Lab-11" class="AI BCS-6E" teacherName="Dr. Fahad Wasseem" color='green-200' startTime="10:30 AM" endTime="11:25 AM"></Slot>
      <View style={tw`h-100px`}></View>

    </ScrollView>
  </View>
);

const SixthRoute=()=>(
  <View></View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute
});

export default function TabViewComponent() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Monday' },
    { key: 'second', title: 'Tuesday' },
    { key: 'third' , title: 'Wednesday' },
    { key: 'fourth' , title: 'Thursday' },
    { key: 'fifth' , title: 'Friday' },
    { key: 'sixth' , title: 'Saturday' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 200}}
      indicatorStyle={{ backgroundColor: 'white' }}
      overScrollMode={'always'}
    />
  );
}