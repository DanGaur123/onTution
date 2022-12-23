import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import {
  COLORS,
  horizontalScale,
  moderateScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import { FlatList } from 'react-native-gesture-handler'
import { useState } from 'react'
import { data } from '@/Containers/Payment/method'

export default function PurchaseDetails({ navigation }) {
  const [value, setValue] = useState(data)

  onSelectOption = x => {
    const tempdata = value

    tempdata.map((item, ind) => {
      if (x - 1 == ind) {
        item.marked = x
      } else {
        item.marked = -1
      }
      console.log(item.marked)
    })

    setValue([...tempdata])

    console.log('sxsx' + x, tempdata)
  }

  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)
  return (
    <>
      <View style={{ backgroundColor: COLORS.primary }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
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
              fontSize: moderateScale(18),
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
            }}
          >
            Purchase Details
          </Text>
          <IonIcons name="search" size={25} color={'white'} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          height: SIZES.height / 3.3,
          elevation: 5,
          padding: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              borderColor: COLORS.primary,
              borderWidth: 2,
              width: horizontalScale(80),
              borderRadius: 10,
              padding: 2,
            }}
          >
            <Image
              source={require('@/Assets/Images/onBoarding1.png')}
              style={{
                height: horizontalScale(70),
                width: horizontalScale(70),
              }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: COLORS.primary,
                fontSize: 18,
              }}
            >
              Mathematics
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginTop: -10,
              }}
            >
              50 Videos | 30 E-Books
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
          >
            <IonIcons name="star" size={15} color={COLORS.yellow} />
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: 'bold',
                marginLeft: 5,
              }}
            >
              4.0
            </Text>
          </View>
        </View>
        <Text style={{ color: COLORS.primary, marginTop: 5 }}>
          Total:{' '}
          <Text style={{ color: COLORS.red, fontFamily: 'Poppins-Medium' }}>
            $45.00
          </Text>
        </Text>
        <View
          style={{
            width: SIZES.width / 1.1,
            borderRadius: 30,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 3,
            backgroundColor: '#f5f5f5',
            alignSelf: 'center',
          }}
        >
          <TextInput
            placeholder="Enter your coupon code"
            placeholderTextColor={'#999999'}
            style={{
              flex: 1,
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
              color: COLORS.white,
              paddingVertical: 0,
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 13,
              color: COLORS.red,
            }}
          >
            Apply
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
          }}
        >
          <Text style={{ color: COLORS.primary, fontFamily: 'Poppins-Medium' }}>
            Payment Method
          </Text>
          <Text
            style={{
              color: COLORS.red,
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
            }}
          >
            + Add a new card
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={value}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    onSelectOption(index + 1)
                  }}
                >
                  <View
                    style={{
                      backgroundColor: 'white',
                      elevation: 3,
                      height: verticalScale(80),
                      borderRadius: 8,
                      marginHorizontal: 20,
                      marginBottom: 10,
                      alignItems: 'center',
                      borderColor:
                        item.marked == index + 1 ? COLORS.red : 'white',
                      borderWidth: 1,
                      padding: 10,
                      flexDirection: 'row',
                    }}
                  >
                    <Image
                      source={item.icon}
                      style={{
                        height: horizontalScale(30),
                        width: horizontalScale(30),
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          color: COLORS.primary,
                          fontSize: 15,
                        }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: 'black',
                          fontSize: 10,
                          marginTop: -5,
                        }}
                      >
                        {item.subtitle}
                      </Text>
                    </View>
                    <View
                      style={{
                        height: verticalScale(25),
                        width: verticalScale(25),
                        borderWidth: 0.5,
                        borderColor: COLORS.red,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        right: 10,
                      }}
                    >
                      <View
                        style={{
                          height: verticalScale(12),
                          width: verticalScale(12),
                          borderRadius: 20,
                          backgroundColor:
                            item.marked == index + 1
                              ? COLORS.red
                              : COLORS.white,
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.red,
            height: verticalScale(50),
            width: '80%',
            elevation: 3,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            position: 'absolute',
            bottom: 10,
          }}
        >
          <Text style={{ color: 'white', fontFamily: 'Poppins-Medium' }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
