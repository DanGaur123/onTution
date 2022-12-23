import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  StatusBar,
  Button,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import {
  SIZES,
  COLORS,
  moderateScale,
  verticalScale,
} from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { navigate } from '@/Navigators/utils'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const EnterForgotPassword = ({ route }) => {
  StatusBar.setBarStyle('dark-content', true)
  StatusBar.setBackgroundColor(COLORS.white)
  const navigation = useNavigation()
  const [password, setPassword] = useState()
  const [code, setCode] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const createPassword = () => {
    if (password === confirmPassword) {
      Auth.forgotPasswordSubmit(route.params.username, code, password)
        .then(data => navigate("Login"))
        .catch(err => console.log(err))
    } else {
      console.log('Password does not match')
    }
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
          color: Colors.text,
          fontFamily: 'Poppins-SemiBold',
          marginTop: 20,
        }}
      >
        Create New Password
      </Text>
      <OTPInputView
        style={{
          width: '90%',
          height: verticalScale(150),
          alignSelf: 'center',
        }}
        pinCount={6}
        autoFocusOnLoad={true}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          setCode(code)
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter New Password"
        placeholderTextColor={'#999999'}
        onChangeText={password => setPassword(password)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={'#999999'}
        secureTextEntry={true}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={createPassword}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: SIZES.h3,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          Create Password
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  signUpButton: {
    width: SIZES.width / 1.1,
    marginTop: 40,
    borderRadius: 30,
    padding: 8,
    backgroundColor: COLORS.red,
  },
  input: {
    width: SIZES.width / 1.1,
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 25,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.text,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    color: '#50577A',
    fontSize: 20,
  },
  underlineStyleHighLighted: {
    borderColor: '#50577A',
  },
})

export default EnterForgotPassword
