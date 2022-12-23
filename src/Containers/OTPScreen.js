import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    
  } from 'react-native'
  import React, { useState } from 'react'
  import { SIZES, COLORS } from '@/Assets/Constants/theme'
  import { Colors } from '@/Theme/Variables'
  import IonIcons from 'react-native-vector-icons/Ionicons'
  import PhoneInput from "react-native-phone-number-input";
  import OTPInputView from '@twotalltotems/react-native-otp-input'
import { navigate } from '@/Navigators/utils'
import { useRoute } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
  
  export default function OTPScreen({navigation}) {
    const route=useRoute()
    const [username,setUsername]=useState(route?.params?.email)
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor(COLORS.white)

    async function confirmSignUp(code) {
      try {
        await Auth.confirmSignUp(username, code);
        console.log('Confirmation is SUCCESSFULL')
        navigate('SelectBoardAndClass')
      } catch (error) {
          console.log('error confirming sign up', error);
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
          onPress={()=>navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'black',
            paddingTop: 40,
            color: Colors.text,
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
            
          }}
        >
          Email Verification
        </Text>
        <Text
          style={{
            color: 'black',
            color: Colors.text,
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            width: SIZES.width / 1.2,
            paddingVertical: 30,
          }}
        >
         OTP sent to your Email Id
        </Text>
        <OTPInputView
          style={{ width: '90%', height: 200, alignSelf: 'center'}}
          pinCount={6}
         // code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          //onCodeChanged={code => setCode(code)}
          autoFocusOnLoad={true}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            confirmSignUp(code)
          }}
        />
        {/* <TouchableOpacity
          style={styles.Button}
          onPress={()=>confirmSignUp(code)}
        >
          <Text
            style={{
              alignSelf: 'center',
              fontSize: SIZES.h3,
              color: 'white',
              fontFamily: 'Poppins-Medium',
            }}
          >
            Continue
          </Text>
        </TouchableOpacity> */}
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    Button: {
      width: SIZES.width / 1.2,
      marginTop: SIZES.width/5,
      borderRadius: 30,
      padding: 6,
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
  