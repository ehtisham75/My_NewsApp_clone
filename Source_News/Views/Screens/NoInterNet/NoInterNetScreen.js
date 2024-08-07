import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image,TouchableOpacity, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
// import { useNavigation, CommonActions } from '@react-navigation/native';
// import AppConfig from '../../Data/AppConfig';

export default function NoInterNetScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.white,
      justifyContent:'center',
      alignItems: 'center',
  }}>
      <StatusBar backgroundColor={Colors.theme} />

      <Image
        source={require('../../../Assets/Images/NoData.png')}
        style={{
            width: hp(40),
            height: hp(40),
            // backgroundColor: 'plum',
        }}
        ></Image>

      <Text style={{
        fontSize:hp(3),
        color:Colors.theme,
        marginTop: hp(4),
        fontFamily:"JosefinSans-Medium",
      }}>No Internet!</Text>
    </View>
  )
}