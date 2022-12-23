import {
  COLORS,
  horizontalScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { PieChart, ProgressChart } from 'react-native-chart-kit'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Foundation from 'react-native-vector-icons/Foundation'
import { Colors } from '@/Theme/Variables'
import { bool } from 'prop-types'
import AlternateHome from './AlternateHome'
import Animated, {
  SlideInDown,
  SlideInUp,
  SlideOutDown,
} from 'react-native-reanimated'
import { navigationRef } from '@/Navigators/utils'

const HomeContainer = ({navigation}) => {
  const [report, setReport] = useState(true)

  const chartConfig = {
    //  backgroundColor: '#1cc910',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(61, 131, 255, ${opacity})`,
    //labels: (opacity = 1) => `rgba(61, 131, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

  const data = {
    labels: ['Maths', 'Physics', 'Chemistry'], // optional
    data: [0.2, 0.6, 0.8],
  }

  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <IonIcons name="menu" size={30} color={'white'}  onPress={()=>navigation.openDrawer()} />
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Poppins-SemiBold',
          }}
        >
          Dashboard
        </Text>
        <IonIcons name="notifications" size={25} color={'white'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          marginBottom: SIZES.width / 8,
        }}
      >
        <IonIcons name="person-circle" size={50} color={'white'} />
        <View
          style={
            report
              ? { flexDirection: 'column', paddingLeft: 15 }
              : {
                  flexDirection: 'column',
                  paddingLeft: 15,
                  marginBottom: SIZES.width / 5,
                }
          }
        >
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontFamily: 'Poppins-Medium',
            }}
          >
            Annie Duffy
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: 'white',
              fontFamily: 'Poppins-Regular',
            }}
          >
            Class 9, CBSE, Board Exam
          </Text>
        </View>
      </View>

      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          flex: 1,
          paddingHorizontal: horizontalScale(20),
        }}
      >
        {report ? (
          <>
            <TouchableOpacity
              onPress={() => setReport(false)}
              style={{
                height: verticalScale(45),
                aspectRatio: 1,
                backgroundColor: 'white',
                borderRadius: 50,
                position: 'absolute',
                right: 30,
                top: -25,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 15,
              }}
            >
              <Foundation name={'graph-bar'} size={30} color={COLORS.primary} />
            </TouchableOpacity>
            <AlternateHome />
          </>
        ) : (
          <Animated.View
            style={{ backgroundColor: 'white' }}
            entering={SlideInDown.duration(500)}
            exiting={SlideOutDown.duration(500)}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 5,

                flexDirection: 'column',
                height: verticalScale(300),
                marginTop: -120,
              }}
            >
              <TouchableOpacity
                onPress={() => setReport(true)}
                style={{
                  height: verticalScale(45),
                  aspectRatio: 1,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  position: 'absolute',
                  right: 30,
                  top: -25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 5,
                }}
              >
                <Foundation
                  name={'graph-bar'}
                  size={30}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.text,
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                Weekly Test Overview
              </Text>

              <ProgressChart
                data={data}
                width={SIZES.width / 1.2}
                height={SIZES.width / 2.3}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
                absolute={true}
              />

              <Text
                style={{
                  fontSize: 15,
                  color: Colors.text,
                  fontFamily: 'Poppins-SemiBold',
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                Total Tests Attempted
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                  paddingHorizontal: horizontalScale(18),
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: 'gray',
                    fontFamily: 'Poppins-Medium',
                  }}
                >
                  8 Tests module
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 10,
                      color: COLORS.red,
                      fontFamily: 'Poppins-Medium',
                    }}
                  >
                    Show Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 70 }}>
              <Text
                style={{
                  fontSize: 15,
                  color: Colors.text,
                  fontFamily: 'Poppins-SemiBold',
                }}
              >
                Practice, Perform, Perfect!
              </Text>
              <View style={styles.smallCards}>
                <IonIcons name="newspaper" size={40} color={'#547688'} />
                <View
                  style={{ flexDirection: 'column', marginLeft: 5, flex: 1 }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: Colors.text,
                      fontFamily: 'Poppins-SemiBold',
                    }}
                  >
                    Upcoming Weekly Test
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: Colors.text,
                        fontFamily: 'Poppins-Regular',
                      }}
                    >
                      Scheduled On
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        color: COLORS.red,
                        fontFamily: 'Poppins-Regular',
                      }}
                    >
                      24 July, 2022
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.smallCards}>
                <IonIcons name="document-text" size={40} color={'#3D83FF'} />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                >
                  <View
                    style={{ flexDirection: 'column', marginLeft: 5, flex: 1 }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: Colors.text,
                        fontFamily: 'Poppins-SemiBold',
                      }}
                    >
                      Practice Test
                    </Text>

                    <Text
                      style={{
                        fontSize: 10,
                        color: Colors.text,
                        fontFamily: 'Poppins-Regular',
                      }}
                    >
                      20 April, 2022
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.Button}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: SIZES.h6,
                        color: 'white',
                        fontFamily: 'Poppins-Medium',
                      }}
                    >
                      Take Test
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        )}
      </View>
    </View>
  )
}

export default HomeContainer
const styles = StyleSheet.create({
  smallCards: {
    height: SIZES.width / 5,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 7,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  Button: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.red,
  },
})
