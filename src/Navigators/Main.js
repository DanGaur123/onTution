import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeContainer,
  MyProfileScreen,
  PurchaseDetails,
  Setting,
} from '@/Containers'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import AnalysisScreen from '@/Containers/Analysis/AnalysisReport'
import { Alert, Pressable, Text, View } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { COLORS, verticalScale } from '@/Assets/Constants/theme'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex:1}}>

      <View
        style={{  
          padding: verticalScale(10),
          backgroundColor:COLORS.primary,
          marginTop:verticalScale(-5)
          
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-SemiBold',
            color: 'white',
          }}
        >
          Hello, User
        </Text>
      </View>

      <DrawerItemList
        {...props}
        labelStyle={{
          fontFamily: 'Poppins-Medium',
        }}
      />

      <DrawerItem
        style={{
          position: 'absolute',
          bottom: 10,
          width:'93%',
          backgroundColor:COLORS.red
        }}
        labelStyle={{
          fontFamily: 'Poppins-Medium',
          color:'white',
          alignSelf:'center'

        }}
        label="Logout"
        // onPress={async () => {
        //   const resp = await logoutUser()
        //   if (resp.status === 204) {
        //     AsyncStorage.removeItem('tokens')
        //     AsyncStorage.removeItem('user')

        //     navigate('LoginContainer')
        //   } else {
        //     alert('Something went wrong')
        //   }
        // }}
      />
    </DrawerContentScrollView>
  )
}

// @refresh reset
const Drawer = createDrawerNavigator()
const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeContainer"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeContainer}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            fontFamily: 'Poppins-Medium',
          },
          drawerIcon: ({ focused, color, size }) => (
            <IonIcons
              name="home"
              size={size}
              color={focused ? '#34A853' : color}
            />
          ),
        }}
      />

      <Drawer.Screen name="Analysis Report" component={AnalysisScreen} />
      <Drawer.Screen name="Profile" component={MyProfileScreen} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Subscription" component={PurchaseDetails} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
