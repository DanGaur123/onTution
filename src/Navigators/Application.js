import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  ChapterScreen,
  ForgetPassword,
  OnBoardingScreen,
  OTPScreen,
  PhoneVerification,
  SignUpScreen,
  StartupContainer,
  SubjectScreen,
  TestScreen,
 VideoScreen,
 Setting,
 PurchaseDetails,
 SelectClassAndBoard,
 SelectPreparation,
 HomeContainer,
 EnterForgotPassword
} from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import Login from '@/Containers/Login'
import { COLORS } from '@/Assets/Constants/theme'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle='light-content' backgroundColor={COLORS.primary} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SubjectScreen" component={SubjectScreen} />
          <Stack.Screen name="ChapterScreen" component={ChapterScreen} />
          <Stack.Screen name="VideoScreen" component={VideoScreen} />
          <Stack.Screen name="TestScreen" component={TestScreen} />
          <Stack.Screen name="SettingScreen" component={Setting} />
          <Stack.Screen name="PurchaseDetails" component={PurchaseDetails} />
          <Stack.Screen name="SelectBoardAndClass" component={SelectClassAndBoard} />
          <Stack.Screen name="SelectPreparation" component={SelectPreparation} />
          <Stack.Screen name="EnterPassword" component={EnterForgotPassword} />
          <Stack.Screen
            name="PhoneVerification"
            component={PhoneVerification}
          />

          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
