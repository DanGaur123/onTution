import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
} from 'react-native'
import React, { useState } from 'react'
import { SIZES, COLORS, horizontalScale } from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { navigate } from '@/Navigators/utils'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { data } from './Payment/method'

export default function ForgetPassword() {
  const [username, SetUsername] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  StatusBar.setBarStyle('dark-content', true)
  StatusBar.setBackgroundColor(COLORS.white)

  const forgetPassword = () => {
    Auth.forgotPassword(username)
      .then(data => {
        setModalVisible(true)
        console.log(data)
      })
      .catch(err => {
        if(err.message == "Username cannot be empty"){
          console.log("Please enter your Email")
        }
        else if(err.message == "Username/client id combination not found."){
          console.log("No Account is linked with this Email address")
        }
        else if(err.message == "Cannot reset password for the user as there is no registered/verified email or phone_number"){
          console.log("This Email in not verified, Please verify your email")
        }
        else {
          console.log("Error")
        }
      })
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}
    >
      <IonIcons
        name="arrow-back"
        size={30}
        color={Colors.text}
        style={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          fontSize: 25,
          paddingTop: 40,
          color: Colors.text,
          fontFamily: 'Poppins-SemiBold',
        }}
      >
        Forgot Password
      </Text>
      <Text
        style={{
          color: Colors.text,
          fontFamily: 'Poppins-Regular',
          textAlign: 'center',
          width: SIZES.width / 1.2,
          paddingVertical: 30,
        }}
      >
        Please enter your email address. You will receive a code to create a new
        password via email.
      </Text>
      <View style={styles.input}>
        <IonIcons
          name="person"
          size={20}
          color={'#999999'}
          style={{ paddingHorizontal: 15 }}
        />
        <TextInput
        ref={(input) => this.input = input}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={'#999999'}
          style={{
            flex: 1,
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
            color: Colors.text,
            paddingVertical: 0,
          }}
          onChangeText={text => SetUsername(text)}
        />
        <IonIcons
          name="close-circle-outline"
          size={20}
          color={'#999999'}
          onPress={() => {
            this.input.clear()
            SetUsername("")}}
          style={{ position:"absolute",right:10,display:username ? "flex" : "none"}}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={forgetPassword}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: SIZES.h3,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          Reset Password
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        animationType={'fade'}
        transparent={true}
      >
        <View style={styles.Modal}>
          <MaterialCommunityIcons
            name="lock-open-check"
            color={COLORS.red}
            size={60}
          />
          <Text
            style={{
              fontSize: SIZES.h3,
              color: 'black',
              fontFamily: 'Poppins-Medium',
              width: SIZES.width / 1.4,
              textAlign: 'center',
              marginVertical: 10,
            }}
          >
            Code has been sent to reset a new password
          </Text>
          <Text
            style={{
              fontSize: SIZES.h5,
              color: 'gray',
              fontFamily: 'Poppins-Regular',
              width: SIZES.width / 1.4,
              textAlign: 'center',
            }}
          >
            You'll shortly receive an email with a code to setup a new password
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              setModalVisible(false);
              navigate("EnterPassword",{username: username})
              
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
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  loginButton: {
    width: SIZES.width / 1.3,
    marginTop: 40,
    borderRadius: 30,
    padding: 8,
    backgroundColor: COLORS.red,
  },
  input: {
    width: SIZES.width / 1.3,
    margin: 12,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingRight:horizontalScale(30)
  },
  Modal: {
    backgroundColor: 'white',
    paddingVertical: 30,
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
