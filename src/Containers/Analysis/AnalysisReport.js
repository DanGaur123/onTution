import { View, Dimensions,StatusBar,Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, horizontalScale, moderateScale, SIZES, verticalScale } from '@/Assets/Constants/theme'
import { PieChart } from 'react-native-svg-charts'
import { Line, G, Circle,Rect } from 'react-native-svg'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AllAnalysis from './All'
import MathAnalysis from './Mathematics'
import PhysicsAnalysis from './Physics'
import ChemistryAnalysis from './Chemistry'
import BiologyAnalysis from './Biology'


const TopBar = createMaterialTopTabNavigator()

const AnalysisScreen = ({navigation}) => {
  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: horizontalScale(15),
        marginVertical: verticalScale(15),
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <IonIcons
        name="arrow-back"
        color={COLORS.white}
        size={30}
        style={{  }}
        onPress={() => {
          navigation.goBack()
         }}
      />
      <Text
        style={{
          fontSize: SIZES.h3,
          fontFamily: 'Poppins-Medium',
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
      Analysis Reports
      </Text>
      <IonIcons name="notifications" size={25} color={COLORS.white} />
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:horizontalScale(20),alignItems:"center",marginVertical:verticalScale(30)}}>
    <View style={{height:horizontalScale(50),aspectRatio:1,borderRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:"#ffffff55",marginRight:horizontalScale(15)}}>
      <IonIcons name='bar-chart-outline' size={25} color={COLORS.white} />
    </View>
      <Text style={{color:COLORS.white,fontFamily:"Poppins-Medium",fontSize:14}}>Track your Learning perfomance{'\n'}and progress reports</Text>
    </View>
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: 10,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingTop: verticalScale(10),
      }}
    > 
    <Text style={{fontSize:17,fontFamily:"Poppins-SemiBold",color:COLORS.primary,alignSelf:'center',marginVertical:verticalScale(5)}}>Performance</Text>
     <TopBar.Navigator  screenOptions={{
      tabBarLabelStyle:{fontFamily:"Poppins-Medium",color:COLORS.primary,fontSize:12,margin:0},
      tabBarScrollEnabled:true,
      tabBarItemStyle:{width:horizontalScale(100),padding:0,paddingBottom:5},
      tabBarIconStyle:{width:30,height:30},
      tabBarStyle:{elevation:2},
      tabBarIndicatorContainerStyle:{marginHorizontal:30,width:"50%"},
      tabBarIndicatorStyle:{height:4,backgroundColor:COLORS.primary,borderRadius:10}
     }}>
      <TopBar.Screen name='AllAnalysis' component={AllAnalysis} options={{
        tabBarLabel:"All",
        tabBarIcon:({focused,color}) => <IonIcons name={focused ? 'ribbon' : 'ribbon-outline'} size={30} color={color} />
      }} />
      <TopBar.Screen name='MathsAnalysis' component={MathAnalysis} options={{
        tabBarLabel:"Mathematics",
        tabBarIcon:({focused,color}) => <IonIcons name={focused ? 'calculator' : 'calculator-outline'} size={30} color={color} />

      }} />
      <TopBar.Screen name='PhysicsAnalysis' component={PhysicsAnalysis} options={{
        tabBarLabel:"Physics",
        tabBarIcon:({focused,color}) => <IonIcons name='logo-react' size={30} color={color} />

      }} />
      <TopBar.Screen name='ChemistryAnalysis' component={ChemistryAnalysis} options={{
        tabBarLabel:"Chemistry",
        tabBarIcon:({focused,color}) => <IonIcons name={focused ? 'flask' : 'flask-outline'} size={30} color={color} />

      }} />
      <TopBar.Screen name='BiologyAnalysis' component={BiologyAnalysis} options={{
        tabBarLabel:"Biology",
        tabBarIcon:({focused,color}) => <IonIcons name={focused ? 'leaf' : 'leaf-outline'} size={30} color={color} />
      }} />
     </TopBar.Navigator>
     </View>
  </View>
  )
}

export default AnalysisScreen