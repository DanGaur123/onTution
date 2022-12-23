import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  COLORS,
  verticalScale,
  horizontalScale,
  moderateScale,
  SIZES,
} from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import { ProgressCircle } from 'react-native-svg-charts'
import * as Progress from 'react-native-progress'

const PhysicsAnalysis = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: verticalScale(20),
      }}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <View>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: '#00000077',
            textAlign: 'center',
            marginBottom: verticalScale(-5),
          }}
        >
          Overall Statistics
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 17,
            color: Colors.text,
            textAlign: 'center',
          }}
        >
          Physics
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: horizontalScale(20),
          marginVertical: verticalScale(40),
        }}
      >
        <View style={{ flex: 1, position: 'relative' }}>
          <ProgressCircle
            style={{ height: verticalScale(160), flex: 1 }}
            progress={0.6}
            progressColor={COLORS.red}
            startAngle={-Math.PI * 0.75}
            endAngle={Math.PI * 0.75}
            strokeWidth={8}
          />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 30,
                color: Colors.text,
              }}
            >
              60%
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-Medium',
                fontSize: 10,
                color: 'gray',
                marginTop: -5,
              }}
            >
              Avg.{'\n'}Performance
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ width: horizontalScale(150) }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: Colors.text,
                }}
              >
                Easy
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: 'gray',
                }}
              >
                82%
              </Text>
            </View>
            <Progress.Bar
              progress={0.8}
              width={horizontalScale(150)}
              height={verticalScale(5)}
              borderColor={'transparent'}
              unfilledColor={COLORS.lightGrey}
              color={COLORS.blue}
            />
          </View>
          <View
            style={{
              width: horizontalScale(150),
              paddingVertical: verticalScale(30),
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: Colors.text,
                }}
              >
                Medium
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: 'gray',
                }}
              >
                60%
              </Text>
            </View>
            <Progress.Bar
              progress={0.6}
              width={horizontalScale(150)}
              height={verticalScale(5)}
              borderColor={'transparent'}
              unfilledColor={COLORS.lightGrey}
              color={COLORS.yellow}
            />
          </View>
          <View style={{ width: horizontalScale(150) }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: Colors.text,
                }}
              >
                Hard
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  color: 'gray',
                }}
              >
                30%
              </Text>
            </View>
            <Progress.Bar
              progress={0.3}
              width={horizontalScale(150)}
              height={verticalScale(5)}
              borderColor={'transparent'}
              unfilledColor={COLORS.lightGrey}
              color={COLORS.red}
            />
          </View>
        </View>
      </View>
      <View
        style={{ width: '100%', height: 1, backgroundColor: COLORS.lightGrey }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: horizontalScale(320),
          marginTop: verticalScale(15),
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#00000077',
              fontSize: 12,
            }}
          >
            Correct
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: Colors.text,
              fontSize: 13,
              textAlign: 'center',
            }}
          >
            10/25
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#00000077',
              fontSize: 12,
            }}
          >
            Attempted
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: Colors.text,
              fontSize: 13,
              textAlign: 'center',
            }}
          >
            18/45
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: '#00000077',
              fontSize: 12,
            }}
          >
            Avg. speed
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: Colors.text,
              fontSize: 13,
              textAlign: 'center',
            }}
          >
            150+ Q/Hr
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: horizontalScale(180),
          borderRadius: 30,
          padding: moderateScale(5),
          backgroundColor: COLORS.red,
          alignSelf: 'center',
          marginVertical: verticalScale(30),
        }}
      >
        <Text
          style={{
            alignSelf: 'center',
            fontSize: SIZES.h4,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          Continue Test
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default PhysicsAnalysis