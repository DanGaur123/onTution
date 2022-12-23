import { View, Text,ScrollView,TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import { COLORS, verticalScale, horizontalScale, moderateScale, SIZES } from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import { PieChart } from 'react-native-svg-charts'
import { G, Line,Text as Text1 } from 'react-native-svg'

const AllAnalysis = () => {
  const [focused,setfocused] = useState(null)
  const data = [
    {
      percent: 10,
      name: "Chemistry"
    },
    {
      percent: 22,
      name: "Mathematics"
    },
    {
      percent: 6,
      name: "Biology"
    },
    {
      percent: 23,
      name: "Physics"
    },
  ]
  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

  const pieData = data
    .filter(value => value.percent > 0).sort((a, b) => b.percent - a.percent)
    .map((value, index) => ({
      value: value.percent,
      name: value.name,
      svg: { fill: randomColor() },
      key: `pie-${index}`,
      arc: {cornerRadius: 5}
    }))
  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <G key={index} onPress={() => setfocused(index)}>
          <Line
            x1={labelCentroid[0]}
            y1={labelCentroid[1]}
            x2={pieCentroid[0]}
            y2={pieCentroid[1]}
            stroke={data.svg.fill}
          />
          <Line
            x1={labelCentroid[0]}
            y1={labelCentroid[1]}
            x2={ (slice.startAngle+slice.endAngle)/2 <= slices[slices.length - 1].endAngle / 2 ? labelCentroid[0] + 40 : labelCentroid[0] - 40}
            y2={labelCentroid[1]}
            stroke={data.svg.fill}
            strokeWidth="1"
          />
          <Text1
            x={ (slice.startAngle+slice.endAngle)/2 <= slices[slices.length - 1].endAngle / 2 ? labelCentroid[0] + 50 : labelCentroid[0] - 70}
            y={labelCentroid[1]}
            fill={data.svg.fill}
            fontSize={moderateScale(15)}
            translateY={5}
          >{data.value}%</Text1>
          <Text1
            x={ (slice.startAngle+slice.endAngle)/2 <= slices[slices.length - 1].endAngle / 2 ? labelCentroid[0] + 50 : labelCentroid[0] - 70}
            y={labelCentroid[1]}
            fill={data.svg.fill}
            fontSize={moderateScale(10)}
            translateY={15}
          >{data.name}</Text1>
        </G>
      )
    })
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: verticalScale(20) }} contentContainerStyle={{ alignItems: 'center'}}>
      <View>
        <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color:"#00000077", textAlign: 'center',marginBottom:verticalScale(-5) }}>Overall Statistics</Text>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 17, color: Colors.text, textAlign: 'center' }}>All Subjects</Text>
      </View>
      <PieChart
        style={{width:"100%",height:verticalScale(300)}}
        data={pieData}
        innerRadius={25}
        outerRadius={70}
        labelRadius={90}
        height={verticalScale(50)}
        width={horizontalScale(50)}
      >
        <Labels />
      </PieChart>
      <View style={{width:"100%",height:1,backgroundColor:COLORS.lightGrey}} />
      <View style={{flexDirection:"row",justifyContent:'space-between',width:horizontalScale(320),marginTop:verticalScale(15)}}>
       <View>
        <Text style={{fontFamily:"Poppins-Medium",color:"#00000077",fontSize:12}}>Correct</Text>
        <Text style={{fontFamily:"Poppins-Medium",color:Colors.text,fontSize:13,textAlign:'center'}}>10/25</Text>
       </View>
       <View>
        <Text style={{fontFamily:"Poppins-Medium",color:"#00000077",fontSize:12}}>Attempted</Text>
        <Text style={{fontFamily:"Poppins-Medium",color:Colors.text,fontSize:13,textAlign:'center'}}>18/45</Text>
       </View>
       <View>
        <Text style={{fontFamily:"Poppins-Medium",color:"#00000077",fontSize:12}}>Avg. speed</Text>
        <Text style={{fontFamily:"Poppins-Medium",color:Colors.text,fontSize:13,textAlign:'center'}}>150+ Q/Hr</Text>
       </View>
      </View>
      <TouchableOpacity
      onPress={() => {
        }}
        style={{
          width: horizontalScale(180),
          borderRadius: 30,
          padding: moderateScale(5),
          backgroundColor: COLORS.red,
          alignSelf:'center',
          marginVertical:verticalScale(30)
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            fontSize: SIZES.h4,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
        Continue Test
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default AllAnalysis