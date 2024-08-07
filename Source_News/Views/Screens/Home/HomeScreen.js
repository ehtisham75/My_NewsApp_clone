import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
// import { SliderBox } from "react-native-image-slider-box";
import changeNavigationBarColor, {hideNavigationBar, showNavigationBar} from 'react-native-navigation-bar-color';
import ImagesSlider from 'react-native-image-slider';
import ApiHandler from '../../Data/ApiHandler';

export default function HomeScreen() {
    const navigation = useNavigation();

    const [sliderImages, SetsliderImages] = useState([
        require('../../../Assets/Images/slide00.jpg'),
        require('../../../Assets/Images/slide1.jpg'),
        require('../../../Assets/Images/slide7.jpg'),
        require('../../../Assets/Images/slide5.jpg'),
        require('../../../Assets/Images/slide6.jpg'),
        require('../../../Assets/Images/slide3.jpg'),
    ])
    const [newsHeadLines, SetNewsHeadLines] = useState()

    useEffect(() => {
        changeNavigationBarColor(Colors.black);
        // newsApi();
    }, [1])

    function newsApi() {
        ApiHandler(
            "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=430cf9ead7d84189a2cce9d3976f4de1",
            (resp) => {
                console.log('==== Response Output ===> ', resp.data?.articles)
                // NewsData.push(resp.data?.articles)
                // console.log('==========Pushing Data ====== ', JSON.stringify(NewsData))
                SetNewsHeadLines(resp.data?.articles)
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
            // justifyContent: 'center',
            // backgroundColor: '#7e51c4', 
        }}>
            <StatusBar backgroundColor={Colors.theme} />



            <View style={{
                // marginTop: hp(2),
                // backgroundColor: 'plum',
                flex: 1,
                paddingTop: hp(2)
            }}>

                <View style={{
                    width: wp(92),
                    height: hp(25),
                    alignSelf: 'center',
                }}>
                    <ImagesSlider
                        loopBothSides
                        autoPlayWithInterval={1000}
                        images={sliderImages}
                        style={{
                            innerWidth: wp(90),
                            borderRadius: hp(1),
                        }}
                    />
                </View>

                <Text style={{
                    fontSize: hp(3),
                    color: Colors.black_text,
                    marginTop: hp(1.5),
                    marginLeft: wp(1),
                    fontFamily: "Play-Bold",
                    fontFamily: "JosefinSans-Medium",
                }}>Headlines</Text>

                <View style={{
                    flex: 1,
                    // paddingTop: hp(2),
                    marginHorizontal: wp(4),
                    // backgroundColor: Colors.blackHexColor,
                }}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={newsHeadLines}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('NewsDetails', {
                                            Selected_NewsDetails: item
                                        })
                                    }}
                                    activeOpacity={0.5}
                                    style={{
                                        backgroundColor: '#c8ccca',
                                        // backgroundColor: Colors.gray3,
                                        width: wp(92),
                                        // paddingVertical: hp(1.5)
                                        borderRadius: hp(2),
                                        marginBottom: hp(2),
                                    }}>
                                    <Image
                                        resizeMode='cover'
                                        // source={require('../../../Assets/Images/cc.jpg')}
                                        source={{ uri: item.urlToImage }}
                                        style={{
                                            width: wp(92),
                                            height: hp(17),
                                            // backgroundColor: 'yellow',
                                            borderRadius: hp(2)
                                        }}
                                    >
                                    </Image>

                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontSize: hp(2.3),
                                            color: Colors.primary_color,
                                            marginTop: hp(1),
                                            marginHorizontal: wp(4),
                                        }}>{item.title}</Text>

                                    <Text
                                        numberOfLines={2}
                                        style={{
                                            fontSize: hp(2),
                                            color: Colors.black_text,
                                            marginTop: hp(0.5),
                                            marginLeft: wp(2),
                                            marginBottom: hp(1),
                                        }}>{item.content}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>


            </View>
        </View>
    )


}
