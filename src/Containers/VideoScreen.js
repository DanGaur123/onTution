import { View, Text, FlatList, Image, StatusBar } from 'react-native'
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
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function VideoScreen({navigation}) {
  const [isPlaying, setIsPlaying] = useState(true)

  const data = [
    {
      title: 'The Light Theories',
      duration: '40',
      video: require('@/Assets/Images/onBoarding3.png'),
      playing: isPlaying,
    },
    {
      title: 'The Light Theories',
      duration: '40',
      video: require('@/Assets/Images/onBoarding3.png'),
      playing: !isPlaying,
    },
    {
      title: 'The Light Theories',
      duration: '40',
      video: require('@/Assets/Images/onBoarding3.png'),
      playing: !isPlaying,
    },
    {
      title: 'The Light Theories',
      duration: '40',
      video: require('@/Assets/Images/onBoarding3.png'),
      playing: !isPlaying,
    },
    {
      title: 'The Light Theories',
      duration: '40',
      video: require('@/Assets/Images/onBoarding3.png'),
      playing: !isPlaying,
    },
    {
      title: 'The Light Theories',
      duration: '40',
      video: require('@/Assets/Images/onBoarding3.png'),
      playing: !isPlaying,
    },
  ]
  StatusBar.setBarStyle('dark-content', true)
  StatusBar.setBackgroundColor(COLORS.white)
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Image
        source={require('@/Assets/Images/onBoarding1.png')}
        style={{ height: horizontalScale(200), width: '100%' }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }}
      >
        <IonIcons name="arrow-back" size={30} color={'black'} onPress={()=>navigation.goBack()} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: horizontalScale(70),
          }}
        >
          <AntDesign name="sharealt" size={25} color={'black'} />
          <AntDesign name="hearto" size={25} color={'black'} />
        </View>
      </View>
      <View
        style={{ height: verticalScale(90), justifyContent: 'space-between' }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: COLORS.red,
            marginLeft: 15,
          }}
        >
          Sound Properties
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: Colors.text,
            fontSize: 18,
            marginLeft: 15,
          }}
        >
          Related Videos
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <FlatList
          data={data}
          scrollEnabled
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item.playing ? '#f5f5f5' : 'white',
                elevation: 0.5,
                width: '100%',
                height: verticalScale(65),
                alignContent: 'center',
                justifyContent: 'center',
                margin: 3,
                alignSelf: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                }}
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
                    style={{
                      fontFamily: 'Poppins-Medium',
                      color: item.playing ? COLORS.red : Colors.text,
                    }}
                  >
                    {item.title}
                  </Text>
                  {item.playing ? (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: 'black',
                        fontSize: 10,
                      }}
                    >
                      Playing Now...
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: 'gray',
                        fontSize: 10,
                      }}
                    >
                      {item.duration} min
                    </Text>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}
