import {
    View,
    Dimensions,
    StatusBar,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native'
  import React from 'react'
  import {
    COLORS,
    horizontalScale,
    moderateScale,
    SIZES,
    verticalScale,
  } from '@/Assets/Constants/theme'
  import IonIcons from 'react-native-vector-icons/Ionicons'
  import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
  import { FlatList } from 'react-native-gesture-handler'
  import { Colors } from '@/Theme/Variables'
  import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
  } from 'react-native-reanimated'
  import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { navigate } from '@/Navigators/utils'
  
  const stats = [
    {
      icon: 'head-question-outline',
      name: 'Questions Attempted',
      value: '250',
    },
    {
      icon: 'bullseye-arrow',
      name: 'Accuracy',
      value: '25%',
    },
    {
      icon: 'clipboard-text-clock-outline',
      name: 'Time Practiced',
      value: '2h 30m',
    },
    {
      icon: 'av-timer',
      name: 'Avg Speed',
      value: '150+ Q/Hr',
    },
  ]
  
  const Explore = [
    {
      icon: 'finance',
      name: 'Stats',
    },
    {
      icon: 'clipboard-pulse-outline',
      name: 'Activity',
    },
    {
      icon: 'account-group-outline',
      name: 'Classroom',
    },
    {
      icon: 'cash-multiple',
      name: 'Subscription',
    },
    {
      icon: 'cart-variant',
      name: 'My Orders',
    },
  ]
  const MAXHEIGHT = verticalScale(390)
  const MyProfileScreen = ({navigation}) => {
    const offset = useSharedValue(0)
    const scrollOffset = useSharedValue(0)
    const insets = useSafeAreaInsets()
    const style = useAnimatedStyle(() => {
      const headerHeight = interpolate(
        scrollOffset.value,
        [0,MAXHEIGHT + insets.top],
        [MAXHEIGHT+ insets.top, insets.top + 44]
      )
      return {
        height:headerHeight
      }
    })
    const scrollHandler = useAnimatedScrollHandler({
      onScroll: e => {
        offset.value = e.contentOffset.y
        scrollOffset.value=e.contentOffset.y
      },
    })
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: horizontalScale(15),
              paddingVertical: verticalScale(15),
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
              top:0,
              zIndex:100,
              backgroundColor:COLORS.primary
            }}
          >
            <IonIcons
              name="arrow-back"
              color={COLORS.white}
              size={30}
              style={{ position: 'absolute', left: horizontalScale(15) }}
              onPress={() => {
               navigation.goBack()
              }}
            />
            <Text
              style={{
                fontSize: SIZES.h3,
                fontFamily: 'Poppins-Medium',
                color: COLORS.white,
                textAlign: 'center',
              }}
            >
              My Profile
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: horizontalScale(70),
                position: 'absolute',
                right: horizontalScale(15),
              }}
            >
              <IonIcons name="notifications" size={25} color={COLORS.white} />
              <IonIcons name="settings" size={25} color={COLORS.white} onPress={()=>navigate('Setting')} />
            </View>
          </View>
        <Animated.View style={[style]}>
          <View
            style={{
              paddingHorizontal: horizontalScale(20),
              alignItems: 'center',
              marginVertical: verticalScale(15),
            }}
          >
            <View
              style={{
                borderRadius: 50,
                overflow: 'hidden',
                borderWidth: 1.5,
                borderColor: COLORS.white,
                marginBottom: verticalScale(10),
              }}
            >
              <Image
                source={require('@/Assets/Images/onBoarding1.png')}
                style={{ height: verticalScale(90), aspectRatio: 1 }}
              />
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                color: COLORS.white,
              }}
            >
              Danish Gaur
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 10,
                color: COLORS.white,
                marginTop: verticalScale(-5),
              }}
            >
              Class 9, CBSE Board
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 12,
                  color: COLORS.white,
                  marginTop: verticalScale(5),
                }}
              >
                Class IX
              </Text>
              <IonIcons name="chevron-down" size={15} color={COLORS.white} />
            </View>
            <FlatList
              style={{
                borderRadius: 10,
                padding: verticalScale(10),
                width: horizontalScale(350),
                elevation: 5,
                backgroundColor: COLORS.white,
                alignSelf: 'center',
                marginTop: verticalScale(10),
              }}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                padding: verticalScale(10),
              }}
              numColumns={2}
              data={stats}
              renderItem={({ item }) => (
                <View
                  style={{ flexDirection: 'row', width: horizontalScale(185) }}
                >
                  <View
                    style={{
                      width: horizontalScale(45),
                      aspectRatio: 1,
                      backgroundColor: COLORS.primary,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MaterialIcons
                      name={item.icon}
                      size={25}
                      color={COLORS.white}
                    />
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'Poppins-SemiBold',
                        color: Colors.text,
                      }}
                    >
                      {item.value}
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: 'Poppins-Medium',
                        color: COLORS.secondarytext,
                        marginTop: verticalScale(-5),
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            marginTop: 10,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingTop: verticalScale(20),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.yellow,
              padding: horizontalScale(20),
              borderRadius: 10,
              marginHorizontal: horizontalScale(20),
            }}
          >
            <IonIcons name="cash-outline" size={30} color={COLORS.white} />
            <Text
              style={{
                width: horizontalScale(210),
                marginHorizontal: horizontalScale(15),
                fontFamily: 'Poppins-Medium',
                fontSize: 15,
                color: Colors.white,
              }}
            >
              Your subscription expires on 28 Mar 2022
            </Text>
            <IonIcons
              name="chevron-forward-circle-outline"
              size={30}
              color={COLORS.white}
            />
          </View>
          <View
            style={{
              marginTop: verticalScale(20),
              flex: 1,
              paddingHorizontal: horizontalScale(20),
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 20,
                color: Colors.text,
                textAlign: 'left',
              }}
            >
              Explore
            </Text>
            <FlatList
              data={Explore}
              scrollEnabled={false}
              contentContainerStyle={{
                paddingHorizontal: horizontalScale(2),
                marginBottom: verticalScale(20),
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    padding: horizontalScale(15),
                    elevation: 3,
                    backgroundColor: COLORS.white,
                    marginVertical: verticalScale(10),
                    flex: 1,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      width: horizontalScale(50),
                      aspectRatio: 1,
                      borderRadius: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: COLORS.primarylight,
                      marginRight: horizontalScale(20),
                    }}
                  >
                    <MaterialIcons
                      name={item.icon}
                      size={30}
                      color={COLORS.primary}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-SemiBold',
                      fontSize: 15,
                      color: Colors.text,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Animated.ScrollView>
      </View>
    )
  }
  
  export default MyProfileScreen