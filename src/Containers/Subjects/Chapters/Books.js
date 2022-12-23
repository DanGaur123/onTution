import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import {
  COLORS,
  horizontalScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Books() {
   
  const data = [
    {
      title: 'The Light Theories',
      pages: 20,
      size: 3.4,
    },
    {
      title: 'The Light Theories',
      pages: 20,
      size: 3.4,
    },
    {
      title: 'The Light Theories',
      pages: 20,
      size: 3.4,
    },
    {
      title: 'The Light Theories',
      pages: 20,
      size: 3.4,
    },
    {
      title: 'The Light Theories',
      pages: 20,
      size: 3.4,
    },
    {
      title: 'The Light Theories',
      pages: 20,
      size: 3.4,
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
          <View
            style={{
              backgroundColor: 'white',
              elevation: 3,
              width: '95%',
              height: verticalScale(65),
              borderRadius: 10,
              margin: 10,
              alignContent:'center',
              justifyContent:'center',
              padding: 10,
              paddingLeft: 15,
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View
                style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
              >
                <View
                  style={{
                    height: verticalScale(40),
                    width: horizontalScale(40),
                    borderRadius: 30,
                    backgroundColor: COLORS.red,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}
                >
                  <AntDesign name={'pdffile1'} size={25} color={'white'} />
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
                    {item.pages} Pages | {item.size} MB
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name={'download'}
                size={30}
                color={'#3366ff'}
              />
            </View>
          </View>
        )}
      />
    </View>
  )
}
