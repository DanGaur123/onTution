import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {
  COLORS,
  horizontalScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import * as Progress from 'react-native-progress'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { navigate } from '@/Navigators/utils'


export default function Videos() {


  const data = [
    {
      title: 'The Light Theories',
      duration: '40',
      video:require('@/Assets/Images/onBoarding3.png'),
    },
    {
        title: 'The Light Theories',
        duration: '40',
        video:require('@/Assets/Images/onBoarding3.png'),
      },
      {
        title: 'The Light Theories',
        duration: '40',
        video:require('@/Assets/Images/onBoarding3.png'),
      },
      {
        title: 'The Light Theories',
        duration: '40',
        video:require('@/Assets/Images/onBoarding3.png'),
      },
      {
        title: 'The Light Theories',
        duration: '40',
        video:require('@/Assets/Images/onBoarding3.png'),
      },
      {
        title: 'The Light Theories',
        duration: '40',
        video:require('@/Assets/Images/onBoarding3.png'),
      },
  ]

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
      }}
    >
      <FlatList
        data={data}
        scrollEnabled
        renderItem={({ item }) => (
          <TouchableOpacity
           onPress={()=>navigate('VideoScreen')}
            style={{
              backgroundColor: 'white',
              elevation: 3,
              width: '95%',
              height:verticalScale(65),
              borderRadius: 10,
              margin: 10,
              alignContent:'center',
              justifyContent:'center',
              padding: 10,
              paddingLeft: 15,
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
               <Image
                source={item.video}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 20,
                  borderRadius: 50,
                }}
              />

              <View style={{ justifyContent: 'flex-start' }}>
                <Text
                  style={{ fontFamily: 'Poppins-Medium', color: Colors.text }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    color: 'gray',
                    fontSize: 10,
                  }}
                >
                  {item.duration} min
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
