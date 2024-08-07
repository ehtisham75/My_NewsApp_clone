import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AppConfig from '../../Data/AppConfig';
import NetInfo from "@react-native-community/netinfo";
import Onboarding from 'react-native-onboarding-swiper';
import changeNavigationBarColor, {hideNavigationBar, showNavigationBar} from 'react-native-navigation-bar-color';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    changeNavigationBarColor(Colors.theme);
  }, [])

  function navigateAction() {
    NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      if (state.isConnected == true) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "BottamTab",
              }
            ],
          })
        );
      }
      else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "NoInterNetScreen",
              }
            ],
          })
        );
      }
    })
  }

  function OnboardSwiper() {
    return (
      <Onboarding
        showSkip={false}
        // showPagination={false}
        bottomBarHighlight={false}
        bottomBarColor={Colors.theme}
        onDone={navigateAction}

        titleStyles={{
          color: Colors.white_text,
          fontSize: hp(5),
          fontFamily: "Play-Bold",
          fontFamily: "Acme-Regular",
          fontFamily: "ChakraPetch-Medium",
          fontFamily: "ChakraPetch-Italic",
          fontFamily: "JosefinSans-Medium",
          // fontFamily:"JosefinsSans-",
          marginTop: hp(2),
        }}
        pages={[
          {
            backgroundColor: Colors.theme,
            image: swiperImage(require('../../../Assets/Images/splash1.png')),
            title: 'NEWSIVERSE',
          },
          {
            backgroundColor: Colors.theme,
            image: swiperImage(require('../../../Assets/Images/splash2.png')),
            title: 'SEE EVERYTHING AROUND',
            //   subtitle: 'This is the subtitle.',
          }
        ]}
      />
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.theme,
    }}>
      <StatusBar backgroundColor={Colors.theme} translucent />

      {OnboardSwiper()}
    </View>
  )
}

const swiperImage = (Img) => {
  return (
    <Image
      source={Img}
      style={{
        width: hp(40),
        height: hp(40),
      }}
    ></Image>
  )
}