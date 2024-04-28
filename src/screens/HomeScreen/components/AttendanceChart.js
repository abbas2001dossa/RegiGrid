import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";



const AttendanceChart = (props) => {

    const barData = [
        {value: 20, label: 'DS' , frontColor: 'red'},
        {value: 40, label: 'IS', frontColor: 'red'},
        {value: 60, label: 'ST', frontColor: 'green'},
        {value: 90, label: 'BPE', frontColor: 'green'},
        {value: 20, label: 'IB', frontColor: 'red'},

        
    ];

  return (
    <View style={tw`h-full w-full`}>

        <BarChart
            barWidth={40}
            noOfSections={4}
            barBorderRadius={4}
            frontColor="black"
            data={barData}
            yAxisThickness={0}
            xAxisThickness={0}
        />
    </View>
  )
}

export default AttendanceChart