import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native'
import React, { useState } from 'react'
import { SIZES, COLORS } from '@/Assets/Constants/theme'
import { Colors } from '@/Theme/Variables'
import IonIcons from 'react-native-vector-icons/Ionicons'
import PhoneInput from 'react-native-phone-number-input'
import { navigate } from '@/Navigators/utils'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

export default function PhoneVerification({ navigation }) {
  StatusBar.setBarStyle('dark-content', true)
  StatusBar.setBackgroundColor(COLORS.white)

  const [phoneNumber,setPhoneNumber]=useState()

  const onContinue = async () => {
    try {
      // const data = await Auth.confirmSignUp(
      //   {
      //     confirmation_code:phoneNumber
      //   }
      // )
      navigate('OTP')
      console.log(data)
    } catch(e){
      Alert.alert('Error',e.message)
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
          color: 'black',
          paddingTop: 40,
          color: Colors.text,
          fontFamily: 'Poppins-SemiBold',
          textAlign: 'center',
          width: SIZES.width / 1.8,
        }}
      >
        Verify your Phone Number
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
        We will send you an OTP with a SMS to your Mobile Number
      </Text>
      <PhoneInput
        defaultValue=""
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus={false}
        placeholder="Phone Number"
        containerStyle={{ marginTop: 40 }}
        textContainerStyle={{ paddingVertical: 0 }}
        textInputStyle={{
          color: Colors.text,
          fontFamily: 'Poppins-Medium',
          fontSize: SIZES.h5,
        }}
        codeTextStyle={{ color: Colors.text, fontFamily: 'Poppins-Medium' }}
         onChangeFormattedText={phoneNumber=>setPhoneNumber(phoneNumber)}
      />

      <TouchableOpacity style={styles.Button} onPress={() => onContinue()}>
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
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Button: {
    width: SIZES.width / 1.2,
    marginTop: SIZES.width / 5,
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
})
