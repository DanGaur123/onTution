import { View, Text, FlatList, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, verticalScale } from '@/Assets/Constants/theme'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'

export default function QuestionItem({ data, selectedOption, cont }) {
  const [review, setReview] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <ScrollView style={{ width: SIZES.width,marginBottom:verticalScale(80)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontFamily: 'Poppins-Medium',
            marginHorizontal: 20,
            marginTop: 10,
          }}
        >
          Ques:
        </Text>
        <TouchableOpacity
          onPress={() => {
            review?setReview(false):setReview(true)
            setCount(1)
            cont(count)
          }}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            height: 30,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            backgroundColor: review ? 'blue': COLORS.yellow,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: review ? 'white':'black',
              fontFamily: 'Poppins-Medium',
            }}
          >
            Mark for review
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 18,
          color: COLORS.primary,
          fontFamily: 'Poppins-Medium',
          marginHorizontal: 20,
        }}
      >
        {data.question}
      </Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data.options}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  selectedOption(index + 1)
                }}
                style={{
                  backgroundColor:
                    data.marked == index + 1 && review
                      ? 'red'
                      : data.marked == index + 1
                      ? 'green'
                      : 'white',
                  borderRadius: 10,
                  elevation: 3,
                  justifyContent: 'center',
                  height: 60,
                  width: '90%',
                  alignSelf: 'center',
                  marginVertical: 10,
                  paddingLeft: 10,
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      backgroundColor:
                        data.marked == index + 1 ? 'white' : COLORS.primary,
                      borderRadius: 15,
                      marginRight: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color:
                          data.marked == index + 1 ? COLORS.primary : 'white',
                        fontFamily: 'Poppins-Medium',
                        height: 30,
                        width: 30,
                        textAlign: 'center',
                        textAlignVertical:'center'
                      }}
                    >
                      {index == 0
                        ? 'A'
                        : index == 1
                        ? 'B'
                        : index == 2
                        ? 'C'
                        : index == 3
                        ? 'D'
                        : ''}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color:
                        data.marked == index + 1 ? 'white' : COLORS.primary,
                      fontFamily: 'Poppins-Medium',
                    }}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </ScrollView>
  )
}
