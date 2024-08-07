import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
import { useNavigation, CommonActions } from '@react-navigation/native';
import AppConfig from '../../Data/AppConfig';
import Video from 'react-native-video';

export default function ShortVideos() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [flatlistData, setFlatlistData] = useState([
    {
      videos: require('../../../Assets/Videos/news0.mp4'),
      Title: "Har Khabar pr Nazar",
      discription: "breakingNews #Pakistan",
    },
    // {
    //   videos: require('../../../Assets/Videos/news2.mp4'),
    //   Title: "Har Khabar pr Nazar",
    //   discription: "breakingNews #Pakistan",
    // },
    // {
    //   videos: require('../../../Assets/Videos/news3.mp4'),
    //   Title: "Har Khabar pr Nazar",
    //   discription: "breakingNews #Pakistan",
    // },
    {
      videos: require('../../../Assets/Videos/iphone.mp4'),
      Title: "Iphone is boom!",
      discription: "#iphone14 #trick #editing #zoom",
    },
    // {
    //   videos: require('../../../Assets/Videos/nature.mp4'),
    //   Title: "Nature beautiful clip",
    //   discription: "#nature #fun #love",
    // },
    // {
    //   videos: require('../../../Assets/Videos/nature3.mp4'),
    // Title: "Nature seem good",
    // discription: "#nature #fun #love",
    // },
    
  ]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor:Colors.primary_color
      }}>
      <StatusBar backgroundColor={Colors.theme} />

      <FlatList
        data={flatlistData}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => {
          setSelectedIndex(
            e.nativeEvent.contentOffset.y.toFixed(0) /
            Dimensions.get('window').height,
          )
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{
              flex:1,
              // width: Dimensions.get('window').width,
              // height: Dimensions.get('window').height,
              // height: "100%",
              // backgroundColor: 'plum',
            }}>
              <Video
                // resizeMode='cover'
                resizeMode='stretch'
                paused={selectedIndex == index ? false : true}
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                  // width: wp(100),
                  // height: hp(100),
                  backgroundColor: 'plum'
                }}
                source={item.videos}
              />

              <TouchableOpacity
                onPress={() => {
                  if (selectedIndex == -1) {
                    setSelectedIndex(index);
                  }
                  else {
                    setSelectedIndex(-1);
                  }
                }}
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 0,
                  // backgroundColor:'#00000030'
                }}>

                {selectedIndex == -1 ?
                  <View
                    style={{
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor: Colors.blackHexColor,
                      borderRadius: 50,
                      padding: hp(2),
                    }}>
                    <Image
                      resizeMode='center'
                      source={require('../../../Assets/Images/pause.png')}
                      style={{
                        width: hp(6),
                        height: hp(6),
                      }}>
                    </Image>
                  </View>
                  :
                  null}

                <View
                  style={{
                    width: wp(100),
                    position: 'absolute',
                    bottom: hp(5),
                    // backgroundColor: 'plum'
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: hp(2.2),
                      fontWeight:'500',
                      color: Colors.white_text,
                      marginHorizontal: wp(3),
                    }}>
                      {item.Title}
                  </Text>

                  <Text
                    style={{
                      fontSize: hp(2),
                      color: Colors.white_text,
                      marginHorizontal: wp(3),
                    }}>
                    {item.discription}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />


    </View>
  )
}