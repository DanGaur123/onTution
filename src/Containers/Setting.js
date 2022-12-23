import { View, Text, StatusBar, Image, FlatList } from 'react-native'
import React from 'react'
import {
  COLORS,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@/Assets/Constants/theme'
import IonIcons from 'react-native-vector-icons/Ionicons'

export default function Setting({ navigation }) {
  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)

  const data = [
    {
      title: 'Edit Profile',
    },
    {
      title: 'My Tests Series',
    },
    {
      title: 'Purchase Order',
    },
    {
      title: 'Billing & Subscriptions',
    },
    {
      title: 'Invite and Earn',
    },
    {
      title: 'About Us',
    },
    {
      title: 'Help & Support',
    },
    
  ]

  return (
    <>
      <View style={{ backgroundColor: COLORS.primary }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <IonIcons
            name="arrow-back"
            size={30}
            color={'white'}
            onPress={() => {
              navigation.goBack()
            }}
          />
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
            }}
          >
            Setting
          </Text>
          <IonIcons name="notifications" size={25} color={'white'} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ alignSelf: 'center', marginBottom: 10 }}>
            <Image
              source={require('@/Assets/Images/onBoarding1.png')}
              style={{
                height: horizontalScale(70),
                width: horizontalScale(70),
                borderRadius: 50,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: moderateScale(20),
              fontFamily: 'Poppins-SemiBold',
              color: COLORS.white,
            }}
          >
            Annie Duffy
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Regular',
              color: COLORS.white,
              marginBottom: 10,
            }}
          >
            +91 8573858547
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    elevation: 15,

                    height: verticalScale(60),
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontFamily: 'Poppins-Medium',
                    }}
                  >
                    {item.title}
                  </Text>
                  <IonIcons
                    name="chevron-forward"
                    size={25}
                    color={COLORS.primary}
                  />
                </View>
              </View>
            )
          }}
        />
      </View>
    </>
  )
}
