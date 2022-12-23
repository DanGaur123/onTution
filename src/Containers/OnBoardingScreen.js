import React, { useState } from 'react'
import { View, Text, Image, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { COLORS, SIZES } from '@/Assets/Constants/theme'
import Login from './Login'

const slides = [
  {
    id: 1,
    title: 'Lorem Ipsum – Generator',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ',
    image: require('@/Assets/Images/onBoarding1.png'),
  },
  {
    id: 2,
    title: 'Lorem Ipsum – Generator',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ',
    image: require('@/Assets/Images/onBoarding2.png'),
  },
  {
    id: 3,
    title: 'Lorem Ipsum – Generator',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ',
    image: require('@/Assets/Images/onBoarding3.png'),
  },
  {
    id: 4,
    title: 'Lorem Ipsum – Generator',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ',
    image: require('@/Assets/Images/onBoarding4.png'),
  },
]

export default function OnBoardingScreen() {
  const [showHomePage, setShowHomePage] = useState(false)

  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)

  const buttonLabel = (label,size= SIZES.h3) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: COLORS.title,
            fontSize: size,
            fontFamily: 'Poppins-SemiBold',
          }}
        >
          {label}
        </Text>
      </View>
    )
  }

  if (!showHomePage) {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor(COLORS.white)
    return (
      <>
        <AppIntroSlider
          data={slides}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  padding: 15,
                  paddingTop: 100,
                  backgroundColor: 'white',
                }}
              >
              <TouchableOpacity onPress={()=>setShowHomePage(true)} style={{position:'absolute',right:15,top:15}}>
                {buttonLabel('Skip >>',SIZES.h5)}
              </TouchableOpacity>
                <Image
                  source={item.image}
                  style={{
                    width: SIZES.width - 80,
                    height: 400,
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: COLORS.title,
                    fontSize: SIZES.h3,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    paddingTop: 20,
                    color: COLORS.title,
                    fontSize: SIZES.h4,
                    fontFamily: 'Poppins-Regular',
                  }}
                >
                  {item.description}
                </Text>
              </View>
            )
          }}
          activeDotStyle={{
            backgroundColor: COLORS.primary,
            width: 30,
          }}
          showSkipButton
          renderNextButton={() => buttonLabel('Next')}
          
          renderPrevButton={() => buttonLabel('Prev')}
          renderDoneButton={() => buttonLabel('Done')}
          showPrevButton={true}
          onDone={() => {
            setShowHomePage(true)
          }}
        />
      </>
    )
  }

  return <Login />
}
