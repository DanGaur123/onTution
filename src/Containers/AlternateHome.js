import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Colors } from '@/Theme/Variables'
import {
  COLORS,
  SIZES,
  verticalScale,
  horizontalScale,
} from '@/Assets/Constants/theme'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { navigate } from '@/Navigators/utils'

export default function AlternateHome() {
  const data = [
    {
      subject: 'Mathematics',
      iconName: FontAwesome,
      icon: 'balance-scale',
      color1: '#bdc3c7',
      color2: '#2c3e50',
    },
    {
      subject: 'Physics',
      iconName: Fontisto,
      icon: 'atom',
      color1: '#fdd5d7',
      color2: '#f11c23',
    },
    {
      subject: 'Chemistry',
      iconName: SimpleLineIcons,
      icon: 'chemistry',
      color1: '#f1e7fe',
      color2: '#7d19f4',
    },
    {
      subject: 'Biology',
      iconName: MaterialIcons,
      icon: 'biotech',
      color1: '#99f2c8',
      color2: '#1f4037',
    },

    {
      subject: 'Reasoning',
      iconName: MaterialCommunityIcons,
      icon: 'bullseye-arrow',
      color1: '#e0dbee',
      color2: '#654ea3',
    },
    {
      subject: 'Social\nScience',
      iconName: SimpleLineIcons,
      icon: 'people',
      color1: '#efbbe0',
      color2: '#89216B',
    },
  ]

  return (
    <Animated.View
    // entering={FadeIn.duration(100)}
    // exiting={FadeOut.duration(100)}
    >
      <Text
        style={{
          fontSize: 18,
          color: Colors.text,
          fontFamily: 'Poppins-SemiBold',
          marginTop: verticalScale(20),
          marginBottom: verticalScale(20),
        }}
      >
        Hi, what would you learn{'\n'}today?
      </Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <LinearGradient
              colors={[item.color1, item.color2]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flexDirection: 'row',
                padding: 10,
                height: 80,
                justifyContent: 'flex-start',
                elevation: 5,
                alignItems: 'center',
                flex: 1,
                margin: 5,
                marginBottom: 10,
                borderRadius: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => navigate('SubjectScreen')}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}
                >
                  <item.iconName
                    name={item.icon}
                    size={30}
                    color={COLORS.primary}
                  />
                </View>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 13,
                  }}
                >
                  {item.subject}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
          //Setting the number of column
          numColumns={2}
          //keyExtractor={(item, index) => index}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: Colors.text,
            fontFamily: 'Poppins-SemiBold',
            marginTop: verticalScale(40),
            marginBottom: verticalScale(10),
          }}
        >
          Popular Videos
        </Text>

        <View>
          <FlatList
            data={data}
            horizontal={true}
            pagingEnabled={true}
            renderItem={({ item }) => (
              <LinearGradient
                colors={[item.color1, item.color2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  height: verticalScale(85),
                  width: horizontalScale(160),
                  elevation: 3,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  flex: 1,
                  marginRight: horizontalScale(8),
                  marginBottom: 10,
                  borderRadius: 5,
                }}
              >
                <TouchableOpacity onPress={()=>navigate('ChapterScreen')} style={{alignItems:'center',flexDirection:'row'}}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}
                >
                  <item.iconName
                    name={item.icon}
                    size={30}
                    color={COLORS.primary}
                  />
                </View>
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: 'Poppins-Medium',
                    fontSize: 13,
                  }}
                >
                  {item.subject}
                </Text>
                </TouchableOpacity>
              </LinearGradient>
            )}
            //Setting the number of column
            //numColumns={2}
            //keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </Animated.View>
  )
}
