import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  COLORS,
  horizontalScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import * as Progress from 'react-native-progress';
import { navigate } from '@/Navigators/utils';

export default function Chapters() {
  const data = [
    {
      image: require('@/Assets/Images/onBoarding1.png'),
      title: 'The Light Theories',
      subTitle: 'The visible Spectrum',
      videoNumber: 30,
      bookNumber: 10,
      progress: 0.48,
      
    },
    {
      image: require('@/Assets/Images/onBoarding2.png'),
      title: 'Work, Energy & Power',
      subTitle: 'The visible Spectrum',
      videoNumber: 24,
      bookNumber: 20,
      progress: 0.50,
    },
    {
      image: require('@/Assets/Images/onBoarding3.png'),
      title: 'The Sound Theories',
      subTitle: 'The visible Spectrum',
      videoNumber: 50,
      bookNumber: 5,
      progress: 0.30,
    },
    {
      image: require('@/Assets/Images/onBoarding4.png'),
      title: 'The Laws of Motions',
      subTitle: 'The visible Spectrum',
      videoNumber: 30,
      bookNumber: 10,
      progress: 0.90,
    },
    {
        image: require('@/Assets/Images/onBoarding1.png'),
        title: 'The Light Theories',
        subTitle: 'The visible Spectrum',
        videoNumber: 30,
        bookNumber: 10,
        progress: 0.48,
        
      },
      {
        image: require('@/Assets/Images/onBoarding2.png'),
        title: 'Work, Energy & Power',
        subTitle: 'The visible Spectrum',
        videoNumber: 24,
        bookNumber: 20,
        progress: 0.50,
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
          onPress={()=>navigate('ChapterScreen')}

            style={{
              backgroundColor: 'white',
              elevation: 3,
              width: '95%',
              borderRadius: 10,
              margin: 10,
              alignContent:'center',
              justifyContent:'center',
              padding: 10,
              paddingLeft:15
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
            >
              <Image
                source={item.image}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 10,
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
                    fontFamily: 'Poppins-Medium',
                    color: 'gray',
                    fontSize: 10,
                    marginTop: -5,
                  }}
                >
                  {item.subTitle}
                </Text>
              </View>
            </View>
            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: 20,
                borderRadius: 5,
              }}
            >
            <Progress.Bar progress={item.progress} width={horizontalScale(320)} color={'#3366ff'} height={3} borderWidth={0} unfilledColor={'#cdcdcd'} />

            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '95%',
                alignSelf:'flex-start',
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'gray',
                  fontSize: 10,
                }}
              >
                {item.videoNumber} videos | {item.bookNumber} E-Books
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: 'gray',
                  fontSize: 10,
                 
                }}
              >
                {(item.progress)*100} %
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
