import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
import { useNavigation, CommonActions } from '@react-navigation/native';
import ApiHandler from '../../Data/ApiHandler';
import AppConfig from '../../Data/AppConfig';


// const CategoryTab = (props) => {
//   return (
//     <View
//       style={{
//         width: wp(30),
//         height: hp(18),
//         // borderWidth: 2,
//         // borderColor: Colors.theme,
//         borderRadius: hp(1.5),
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: hp(2),
//         backgroundColor: Colors.gray3,
//         // backgroundColor: Colors.blackHexColor,
//         marginLeft: wp(2),
//       }}
//     >
//       <Image
//         resizeMode='contain'
//         source={props.ImgSrc}
//         style={{
//           width: hp(8),
//           height: hp(8),
//           borderRadius: 5,
//           // backgroundColor: 'yellow',
//         }}>
//       </Image>

//       <TouchableOpacity
//         onPress={() => props.OnPreSS()}
//         style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: wp(26.5),
//           paddingVertical: hp(1),
//           backgroundColor: Colors.theme,
//           borderRadius: hp(1),
//           marginTop: hp(2),
//         }}>
//         <Text style={{
//           width: wp(26.5),
//           fontSize: hp(1.8),
//           color: Colors.white_text,
//           textAlign: 'center',
//           // paddingHorizontal: wp(8),
//         }}>{props.BtnTitle}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

const CategoryTab = (props) => {
  return (
    <View
      style={{
        // width: wp(30),
        // height: hp(18),
        // borderWidth: 2,
        // borderColor: Colors.theme,
        // borderRadius: hp(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(2.5),
        // paddingVertical:hp(1),
        // paddingHorizontal:wp(2),
        // backgroundColor: Colors.gray3,
        // backgroundColor: Colors.blackHexColor,
        // marginLeft: wp(3),
      }}
    >
      <ImageBackground
        resizeMode='cover'
        // source={require('../../../Assets/Images/slide1.jpg')}
        source={props.ImgSrc}
        style={{
          width: hp(17),
          height: hp(17),
          alignItems: 'center',
          justifyContent: 'center',
          // borderRadius: 5,
          // backgroundColor: 'yellow',
        }}
        imageStyle={{ borderRadius: 10, }}>
      </ImageBackground>

      <TouchableOpacity
        onPress={() => props.OnPreSS()}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: wp(26.5),
          paddingVertical: hp(1),
          backgroundColor: Colors.theme,
          borderRadius: hp(1),
          marginTop: hp(1),
        }}>
        <Text style={{
          width: wp(26.5),
          fontSize: hp(1.8),
          color: Colors.white_text,
          textAlign: 'center',
          fontFamily:"JosefinSans-Medium",
          // paddingHorizontal: wp(8),
        }}>{props.BtnTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CatagoriesScreen = () => {
  const navigation = useNavigation();

  const [newsTypeData, setNewsTypeData] = useState([])


  useEffect(() => {
    newsApi();
  }, [1])

  function newsApi() {
    ApiHandler(
      'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=52b1e3a780d54701b84aee98c9552a5c',
      'https://newsapi.org/v2/everything?' + 'q=Health&' + 'from=2023-01-05&' + 'sortBy=popularity&' + 'apiKey=52b1e3a780d54701b84aee98c9552a5c',
      (resp) => {
        console.log('\x1b[36m%s\x1b[0m','==== Response Output ===> ', resp.data?.articles)
        // NewsData.push(resp.data?.articles)
        // console.log('==========Pushing Data ====== ', JSON.stringify(NewsData))
        setNewsTypeData(resp.data?.articles)
        // console.log('==========Api Ok Data UseState ====== ', newsTypeData)

        // setNewsTypeData(resp.data?.articles)
      },
      (error) => {
        console.log("-------ERROR in API------>", error)
      }
    )
  }


  return (
    <View style={{
      flex: 1,
      // backgroundColor: '#7e51c4', 
    }}>
      <StatusBar backgroundColor={Colors.theme} />


      {/* ============ TABS ========== */}
      <View
        style={{
          // marginTop: hp(2),
          // // alignItems: 'center',
          // justifyContent: 'space-between',
          // backgroundColor: 'plum',
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
          }}>

          {/* ============= Row 1, Tab 1,2 ============== */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp(3),
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
            // backgroundColor: Colors.blackHexColor,
          }}>
            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide7.jpg')}
              OnPreSS={() => {
                newsApi,
                  navigation.navigate('NewsList', {
                    HealthNews: newsTypeData
                  })
              }}
              BtnTitle={"World"}
            />

            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide2.jpg')}
              OnPreSS={() => { navigation.navigate('NewsList') }}
              BtnTitle={"Entertainment"}
            />
          </View>

          {/* ============= Row 2, Tab 3,4 ============== */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
            // backgroundColor: Colors.card_1_bg,
          }}>

            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide8.jpg')}
              BtnTitle={"Sports"}
            />

            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide00.jpg')}
              BtnTitle={"Top News"}
            />
          </View>

          {/* ============= Row 3, Tab 5,6 ============== */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
            // backgroundColor: Colors.card_2_bg,
          }}>
            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide6.jpg')}
              BtnTitle={"Travel"}
            />

            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide5.jpg')}
              BtnTitle={"Health"}
            />
          </View>

          {/* ============= Row 4, Tab 7,8 ============== */}
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(10),
            // backgroundColor: Colors.card_4_bg,
            // alignItems: 'center',
          }}>

            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide3.jpg')}
              BtnTitle={"Technology"}
            />

            <CategoryTab
              ImgSrc={require('../../../Assets/Images/slide9.jpg')}
              BtnTitle={"Business"}
            />

          </View>

        </ScrollView>

        {/* <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => {
              return (
              )
            }}
          /> */}

      </View>

    </View>
  )
}


