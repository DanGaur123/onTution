import {
  COLORS,
  horizontalScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

import IonIcons from 'react-native-vector-icons/Ionicons'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chapters from './Chapters'
import Tests from './Tests'

const Tab = createMaterialTopTabNavigator()

const SubjectScreen = ({navigation}) => {
  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}
      >
        <IonIcons name="arrow-back" size={30} color={'white'} onPress={()=>navigation.goBack()} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: horizontalScale(70),
          }}
        >
          <IonIcons name="search" size={25} color={'white'} />
          <IonIcons name="notifications" size={25} color={'white'} />
        </View>
      </View>

      <View style={{ flexDirection: 'column', padding: 20 }}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Poppins-SemiBold',
          }}
        >
          Physics
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          60 Chapters | 35 Tests
        </Text>
      </View>

      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          flex: 1,
          paddingTop: horizontalScale(10),
          overflow: 'hidden',
        }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontFamily: 'Poppins-SemiBold',
              color: COLORS.primary,
            },
            tabBarIndicatorStyle: {
              backgroundColor: COLORS.primary,
              height: 3,
              borderRadius: 5,
            },
          }}
        >
          <Tab.Screen name="Chapters" component={Chapters} />
          <Tab.Screen name="Tests" component={Tests} />
        </Tab.Navigator>
      </View>
    </View>
  )
}

export default SubjectScreen
const styles = StyleSheet.create({})
