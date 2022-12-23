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
import { SIZES, COLORS, moderateScale, horizontalScale, verticalScale } from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { navigate } from '@/Navigators/utils'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

export default function SignUpScreen() {
  StatusBar.setBarStyle('dark-content', true)
  StatusBar.setBackgroundColor(COLORS.white)
  const navigation = useNavigation()
  const [userName, setUsername] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [dob, setDOB] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [errorName, setErrorName] = useState(false)

  async function onSignUp() {
    if (userName == '') {
      setErrorName(true)
    }
    if (number == ''|| number!=10) {
      setErrorName(true)
    }
    

    try {
      const { user } = await Auth.signUp({
        password,
        username: email,
        attributes: {
          email: email,
          phone_number: number,
          name: userName,
          birthdate: dob,
        },
      })

      navigate('OTP', {
        email,
      })
      console.log(user)
    } catch (e) {
      Alert.alert('Error', e.message)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: horizontalScale(15),
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
          marginTop: verticalScale(15),
        }}
      >
        Create an Account
      </Text>
      <TextInput
        style={styles.input}
        placeholder={!errorName? "Full Name":"Enter Full Name"}
        placeholderTextColor={!errorName?'#999999':'red'}
        onChangeText={fullName => setUsername(fullName)}
      />
     
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email Address"
        placeholderTextColor={'#999999'}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder={!errorName? "Phone Number":"Enter Valid Phone Number"}
        placeholderTextColor={!errorName?'#999999':'red'}
        onChangeText={number => setNumber('+91' + number)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        placeholderTextColor={'#999999'}
        onChangeText={dob => setDOB(dob)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
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
      <TouchableOpacity style={styles.signUpButton} onPress={() => onSignUp()}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: SIZES.h3,
            color: 'white',
            fontFamily: 'Poppins-Medium',
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: SIZES.h6,
          color: 'gray',
          fontFamily: 'Poppins-Regular',
          width: horizontalScale(300),
          textAlign: 'center',
          marginTop: verticalScale(15),
        }}
      >
        By continuing{' '}
        <Text style={{ color: COLORS.title, fontFamily: 'Poppins-SemiBold' }}>
          Sign Up{' '}
        </Text>
        you agree to the following{' '}
        <Text style={{ color: COLORS.title, fontFamily: 'Poppins-SemiBold' }}>
          Terms & Conditions{' '}
        </Text>
        without any reservation.
      </Text>

      <TouchableOpacity style={{ marginTop: verticalScale(20) }}>
        <Text
          style={{
            color: 'blue',
            fontFamily: 'Poppins-Medium',
            fontSize: moderateScale(12),
          }}
        >
          Terms & Conditions
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: 'gray',
          }}
        >
          Already have an account ?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: COLORS.red,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signUpButton: {
    width: horizontalScale(330),
    marginTop: verticalScale(35),
    borderRadius: 30,
    padding: horizontalScale(8),
    backgroundColor: COLORS.red,
  },
  input: {
    width: horizontalScale(330),
    marginTop: verticalScale(15),
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: horizontalScale(25),
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: Colors.text,
  },
})
