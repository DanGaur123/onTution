import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
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
import { navigate } from '@/Navigators/utils';

export default function Tests() {
  const [onComplete, setComplete] = useState(false)

  const data = [
    {
      title: 'The Light Theories',
      papers: 20,
      questions: 15,
      icon1: 'checkmark-circle-outline',
      icon2: 'create-outline',
      success: onComplete,
    },
    {
      title: 'Work, Energy & Power',
      papers: 30,
      questions: 10,
      icon1: 'checkmark-circle-outline',
      icon2: 'create-outline',
      success: !onComplete,
    },
    {
      title: 'The Sound Theories',
      papers: 30,
      questions: 10,
      icon1: 'checkmark-circle-outline',
      icon2: 'create-outline',
      success: !onComplete,
    },
    {
      title: 'The Laws of Motions',
      papers: 30,
      questions: 10,
      icon1: 'checkmark-circle-outline',
      icon2: 'create-outline',
      success: onComplete,
    },
    {
      title: 'The Light Theories',
      papers: 30,
      questions: 10,
      icon1: 'checkmark-circle-outline',
      icon2: 'create-outline',
      success: onComplete,
    },
    {
      title: 'Work, Energy & Power',
      papers: 30,
      questions: 10,
      icon1: 'checkmark-circle-outline',
      icon2: 'create-outline',
      success: !onComplete,
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
          onPress={()=>navigate('TestScreen')}
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
              <View
                style={{
                  aspectRatio:1,
                  width: horizontalScale(40),
                  borderRadius: 30,
                  backgroundColor:item.success?'green':COLORS.red,
                  justifyContent:'center',
                 
                  marginRight:10
                }}
              >
                <IonIcons
                  name={item.success ? item.icon1 : item.icon2}
                  size={item.success? 30:25}
                  color={'white'}
                 style={{alignSelf:'center'}}
                />
              </View>

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
                  {item.papers} Papers | {item.questions} Question
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
