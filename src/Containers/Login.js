import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
  Keyboard,
} from 'react-native'
import React, { useEffect ,useState} from 'react'
import {
  COLORS,
  horizontalScale,
  SIZES,
  verticalScale,
} from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'
import { Auth } from 'aws-amplify'

export default function Login() {
  const [eye, setEye] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    Keyboard.dismiss()

    try {
      const user = await Auth.signIn(username, password)
      if (user) {
        navigateAndSimpleReset('Main')
      }
    } catch (err) {
      if(err.message == 'Username caannot be empty') {
          console.log("Please Enter Your Username")
      }
      else if(err.message == "Custom auth lambda trigger is not configured for the user pool."){
        console.log("Please Enter Your Password")
      }
      else if(err.message == "Incorrect username or password.") {
        console.log("Invalid Username or Password")
      }
      else if(err.message == "User does not exist."){
        console.log("Account does not exist, Please Sign up.")
      }
      else if(err.message == "User is not confirmed."){
        console.log("Please Confirm your account")
      }
      console.log(err.message)
  }
}
  // useEffect(() => {
  //   console.log(username, password)
  // }, [username, password])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.topContainer}>
        <Text
          style={{
            fontSize: 25,
            paddingTop: verticalScale(40),
            color: 'white',
            fontFamily: 'Poppins-SemiBold',
          }}
          r
        >
          Welcome Back
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Regular',
          }}
        >
          Login to your account
        </Text>
        <View style={{ paddingTop: verticalScale(25) }}>
          <View style={[styles.input, { paddingRight: horizontalScale(10) }]}>
            <IonIcons
              name="person"
              size={20}
              color={Colors.white}
              style={{ paddingHorizontal: horizontalScale(15) }}
            />
            <TextInput
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={'#999999'}
              style={{
                flex: 1,
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
                color: COLORS.white,
                paddingVertical: verticalScale(0),
              }}
              onChangeText={text => setUsername(text)}
            />
          </View>
          <View style={styles.input}>
            <IonIcons
              name="keypad"
              size={20}
              color={Colors.white}
              style={{ paddingHorizontal: horizontalScale(15) }}
            />
            <TextInput
              secureTextEntry={eye ? false : true}
              placeholder="Password"
              placeholderTextColor={'#999999'}
              style={{
                flex: 1,
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
                color: COLORS.white,
                paddingVertical: verticalScale(0),
              }}
              onChangeText={text => setPassword(text)}
            />
            <IonIcons
              onPress={() => setEye(!eye)}
              name={eye ? 'eye' : 'eye-off'}
              size={20}
              color={Colors.white}
              style={{ paddingHorizontal: horizontalScale(15) }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={signIn}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: SIZES.h3,
              color: 'white',
              fontFamily: 'Poppins-Medium',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: verticalScale(20) }}
          onPress={() => navigate('ForgetPassword')}
        >
          <Text
            style={{
              color: '#999999',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
            }}
          >
            Forgot your password ?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: verticalScale(50),
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: horizontalScale(50),
        }}
      >
        <View
          style={{
            height: verticalScale(2),
            flex: 1,
            backgroundColor: COLORS.grey,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: Colors.text,
            paddingHorizontal: horizontalScale(10),
          }}
        >
          Login with
        </Text>
        <View
          style={{
            height: verticalScale(2),
            flex: 1,
            backgroundColor: COLORS.grey,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: horizontalScale(160),
          alignSelf: 'center',
          paddingVertical: verticalScale(30),
        }}
      >
        <TouchableOpacity>
          <Image
            source={require('@/Assets/Images/google.png')}
            style={{ height: horizontalScale(35), width: horizontalScale(35) }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/Assets/Images/facebook.png')}
            style={{ height: horizontalScale(35), width: horizontalScale(35) }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/Assets/Images/linkedin.png')}
            style={{ height: horizontalScale(35), width: horizontalScale(35) }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: verticalScale(50),
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: 'gray',
          }}
        >
          Don't have an account ?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigate('SignUpScreen')}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: COLORS.red,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.primary,
    height: verticalScale(530),
    width: SIZES.width,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: horizontalScale(20),

    alignItems: 'center',
  },
  input: {
    width: horizontalScale(300),
    margin: horizontalScale(12),
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
  },
  loginButton: {
    width: horizontalScale(300),
    marginTop: verticalScale(40),
    borderRadius: 30,
    padding: 8,
    backgroundColor: COLORS.red,
  },
})
