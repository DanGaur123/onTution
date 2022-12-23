import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '@/Assets/Constants/theme'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Animated, { SlideInLeft, SlideInRight, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { navigate } from '@/Navigators/utils'

const SelectClassAndBoard = ({navigation}) => {
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedBoard, setSelectedBoard] = useState(null)
  const offset = useSharedValue(0)
  const offset1 = useSharedValue(0)
  const [entering,setEntering] = useState(false)
  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform : [{translateX: offset.value}],
    }
  })
  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform : [{scale:offset1.value}],
    }
  })
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IonIcons
          name="arrow-back"
          color={COLORS.white}
          size={30}
          style={{ position: 'absolute', left: 0 }}
          onPress={() => {
            offset.value = withDelay(250,withTiming(0,{duration:500}))
            offset1.value = withTiming(0,{duration:500})
            setTimeout(()=>{
              setEntering(false)
            },500)
            navigation.goBack()
          }}
        />
        <Text
          style={{
            fontSize: SIZES.h3,
            fontFamily: 'Poppins-Medium',
            color: COLORS.white,
            textAlign: 'center',
          }}
        >
          Select Board and Class
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginTop: 10,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          paddingTop: SIZES.height / 25,
        }}
      >
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Animated.View
        style={[animatedStyle,{position:entering ? "absolute":"relative"}]}
        >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontFamily: 'Poppins-Medium',
            color: COLORS.title,
            alignSelf:'center'
          }}
        >
          Which class or Grade are you in?
        </Text>
        <FlatList
          style={{ marginVertical: SIZES.height / 30 }}
          data={[
            '1st',
            '2nd',
            '3rd',
            '4th',
            '5th',
            '6th',
            '7th',
            '8th',
            '9th',
            '10th',
            '11th',
            '12th',
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedClass(item)}
              style={{
                width: 100,
                height: 80,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primarylight,
                margin: 5,
                borderColor: COLORS.primary,
                borderWidth: 1.5,
                position: 'relative',
              }}
            >
              {selectedClass == item && (
                <IonIcons
                  name="checkmark-circle"
                  color={COLORS.primary}
                  style={{ position: 'absolute', right:0, top: 0 }}
                  size={25}
                />
              )}
              <Text
                style={{
                  fontSize: SIZES.h4,
                  fontFamily: 'Poppins-SemiBold',
                  color: COLORS.primary,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          numColumns={3}
          contentContainerStyle={{paddingHorizontal: 10}}
        />
        </Animated.View>
        { entering && 
        <Animated.View
        style={animatedStyle1}
        >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontFamily: 'Poppins-Medium',
            color: COLORS.title,
            alignSelf:'center'
          }}
        >
          Which Board are you in?
        </Text>
        <FlatList
          style={{ marginVertical: SIZES.height / 25,height:SIZES.height*0.6 }}
          data={[
            'CBSE',
            'UTTRAKHAND',
            'UTTAR PRADESH',
            'ICSE',
            'BOARD5',
            'BOARD6',
            'BOARD7',
            'BOARD8',
            'BOARD9',
            'BOARD10',
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedBoard(item)}
              style={{
                width: 150,
                height: 70,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primarylight,
                margin: 5,
                borderColor: COLORS.primary,
                borderWidth: 1.5,
                position: 'relative',
              }}
            >
              {selectedBoard == item && (
                <IonIcons
                  name="checkmark-circle"
                  color={COLORS.primary}
                  style={{ position: 'absolute', right:0, top: 0 }}      
                  size={25}
                />
              )}
              <Text
                style={{
                  fontSize: SIZES.h5,
                  fontFamily: 'Poppins-SemiBold',
                  color: COLORS.primary,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          numColumns={2}
          contentContainerStyle={{paddingHorizontal: 10}}
          scrollEnabled
        />
        </Animated.View>}
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity
        onPress={() => {
          if(!entering){
          offset.value = withTiming(-SIZES.width,{duration:500})
          offset1.value = withDelay(200,withTiming(1,{duration:500}))
          setEntering(true)
          }
          else{
            navigate("SelectPreparation")
          }
          }}
          style={{
            width: SIZES.width / 1.3,
            borderRadius: 30,
            padding: 8,
            backgroundColor: COLORS.red,
            alignSelf:'center',
            position:"absolute",
            bottom:20
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              fontSize: SIZES.h3,
              color: 'white',
              fontFamily: 'Poppins-Medium',
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SelectClassAndBoard