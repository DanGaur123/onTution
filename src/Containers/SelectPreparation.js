import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, horizontalScale, SIZES, verticalScale } from '@/Assets/Constants/theme'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Animated, { SlideInLeft, SlideInRight, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { navigate } from '@/Navigators/utils'

const SelectPreparation = (props) => {
  const [ selectedExam,setSelectedExam ] = useState([])
  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: horizontalScale(10),
        marginVertical: verticalScale(10),
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
          props.navigation.goBack()
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
        Select Exam
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
        alignItems:'center'
      }}
    > 
      <Text
        style={{
          fontSize: SIZES.h3,
          fontFamily: 'Poppins-Medium',
          color: COLORS.title,
          alignSelf:'center'
        }}
      >
        Which Exam are you preparing for?
      </Text>
      <Text style={{fontSize:SIZES.h5,fontFamily:"Poppins-Regular",color:"#888888"}}>You can Select Multiple Options</Text>
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
            onPress={() => !selectedExam.includes(item) ? setSelectedExam([...selectedExam,item]) : setSelectedExam(selectedExam.filter(el => el !== item))}
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
            {selectedExam.includes(item) && (
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
      </View>
      <TouchableOpacity
      onPress={() => {
        navigate('Main')
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
         Finish
        </Text>
      </TouchableOpacity>
  </View>
  )
}

export default SelectPreparation