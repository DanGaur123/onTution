import {
  COLORS,
 
  SIZES,
  
} from '@/Assets/Constants/theme'
import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { Questions } from './questions'
import QuestionItem from './QuestionItem'
import Modal from 'react-native-modal'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const SubjectScreen = ({navigation}) => {
  const listRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(1)
  const [questions, setQuestions] = useState(Questions)
  const [isModalVisible, setModalVisible] = useState(false)
  const [count, setCount] = useState(0)

  const getScore = () => {
    let marks = 0
    questions.map(item => {
      if (item.marked == item.correct) {
        marks = marks + 5
      }
    })

    return marks
  }

  const attempted = () => {
    let number = 0
    questions.map(item => {
      if (item.marked !== -1) {
        number = number + 1
      }
    })

    return number
  }

  const markedForReview = c => {
    var coco = 0
    if (c == 1) {
      coco = coco + 1
      setCount(coco)
    }
    console.log('dfhgbdbsksf' + coco)
  }

  onSelectOption = (index, x) => {
    const tempdata = questions

    tempdata.map((item, ind) => {
      if (index == ind) {
        item.marked = x
      }
    })
    let temp = []
    tempdata.map(item => {
      temp.push(item)
    })
    setQuestions(temp)

    console.log('sxsx' + index)
  }

  StatusBar.setBarStyle('light-content', true)
  StatusBar.setBackgroundColor(COLORS.primary)

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 15,
        }}
      >
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
          style={{
            backgroundColor: COLORS.red,
            borderRadius: 30,
            paddingHorizontal: 15,
            paddingVertical: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Poppins-Medium',
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'column', padding: 20 }}>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontFamily: 'Poppins-SemiBold',
          }}
        >
          Physics Test
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          Work, Energy & Power
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontFamily: 'Poppins-Medium',
            marginTop: 40,
          }}
        >
          {currentIndex + '/' + Questions.length}
        </Text>
      </View>

      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          flex: 1,
          paddingTop: 10,
        }}
      >
        <FlatList
          ref={listRef}
          pagingEnabled
          horizontal
          data={questions}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x / SIZES.width
            setCurrentIndex((x + 1).toFixed(0))
          }}
          renderItem={({ item, index }) => {
            return (
              <QuestionItem
                data={item}
                selectedOption={x => {
                  onSelectOption(index, x)
                }}
                cont={c => {
                  markedForReview(c)
                }}
              />
            )
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            position: 'absolute',
            bottom: 10,
            left: 0,
            right: 0,
            backgroundColor:'transparent'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (currentIndex > 1) {
                listRef.current.scrollToIndex({
                  animated: true,
                  index: parseInt(currentIndex) - 2,
                })
              }
            }}
            style={{
              backgroundColor: currentIndex == 1 ? '#f5f5f5' : COLORS.primary,
              borderRadius: 5,
              height: 50,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-SemiBold',
              }}
            >
              Previous
            </Text>
          </TouchableOpacity>
          {currentIndex == 8 ? (
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                backgroundColor: 'green',
                borderRadius: 5,
                height: 50,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (currentIndex < 8) {
                  listRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex,
                  })
                }
              }}
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 5,
                height: 50,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Modal
          isVisible={isModalVisible}
          animationType={'fade'}
          transparent={true}
        >
          <View style={styles.Modal}>
            <Text
              style={{
                fontSize: SIZES.h1,
                color: COLORS.primary,
                fontFamily: 'Poppins-SemiBold',
                width: SIZES.width / 1.4,
                textAlign: 'center',
                marginVertical: 10,
                marginBottom: 20,
              }}
            >
              {'Marks Obtained :' + ' ' + getScore()}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <View style={{ backgroundColor: '#cdcdcd', width: '45%' }}>
                <Text
                  style={{
                    fontSize: SIZES.h6,
                    color: 'black',
                    fontFamily: 'Poppins-Medium',
                    textAlign: 'center',
                    marginVertical: 10,
                  }}
                >
                  Attempted : {attempted()}
                </Text>
              </View>
              <View style={{ backgroundColor: '#cdcdcd', width: '45%' }}>
                <Text
                  style={{
                    fontSize: SIZES.h6,
                    color: 'black',
                    fontFamily: 'Poppins-Medium',

                    textAlign: 'center',
                    marginVertical: 10,
                  }}
                >
                  Correct : {getScore() / 5}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '95%',
                marginTop: 20,

                padding: 8,
                backgroundColor: '#cdcdcd',
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.h6,
                  color: 'black',
                  fontFamily: 'Poppins-Medium',

                  textAlign: 'center',
                  marginVertical: 10,
                }}
              >
                Marked for Review : {count}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: SIZES.h4,
                  color: 'white',
                  fontFamily: 'Poppins-Medium',
                }}
              >
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  )
}

export default SubjectScreen
const styles = StyleSheet.create({
  Modal: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 8,
    alignItems: 'center',
    height: SIZES.width / 1.2,
    width: SIZES.width / 1.2,
    borderRadius: 20,
    alignSelf: 'center',
  },
  modalButton: {
    width: SIZES.width / 1.4,
    marginTop: 40,
    borderRadius: 30,
    padding: 8,
    backgroundColor: COLORS.red,
  },
})
