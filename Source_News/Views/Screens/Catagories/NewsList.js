import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
import axios from 'react-native-axios';
import { useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import AppConfig from '../../Data/AppConfig';

export default function NewsList() {
    const route = useRoute();
    const navigation = useNavigation();

    const [newsList, setnewsList] = useState([])
    const [healthNews, setHealthNews] = useState(route.params?.HealthNews)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        console.log("========= Health News Params ===>> ", healthNews)
        // axios({
        //     method: 'get',
        //     // url: 'https://newsapi.org/'
        //     // url: 'https://a-sports.tv/',

        //     // url: 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=430cf9ead7d84189a2cce9d3976f4de1'

        //     url: 'https://newsapi.org/v2/everything?'+'q=Apple&'+'from=2023-01-05&'+'sortBy=popularity&'+'apiKey=52b1e3a780d54701b84aee98c9552a5c',

        //     // url: 'https://newsapi.org/v2/everything?' + 'apiKey=52b1e3a780d54701b84aee98c9552a5c',

        //     // API_key: `52b1e3a780d54701b84aee98c9552a5c`
        // })
        //     // .then(res => res.json())
        //     .then(function (res) {
        //         console.log('--------Output: ',res.data)
        //         // console.log('--------Output: ',JSON.stringify(res.data))
        //         setnewsList(res.data?.articles)
        //         // settitle(res.data?.articles?.title)
        //         // setnewsContent(res.data?.articles.content)
        //         // setnewsImage(res.data?.articles.urlToImage)

        //         // console.log('--------Output: ', newsList)
        //     })
        //     .catch(function (error) {
        //         console.log("-------ERROR in API------>", error);
        //     });
    });

    function closeIndicator() {
        setTimeout(() => {
            setIsLoading(true)
            // {foundData()}
        }, 1000);
        // setIsLoading(false)
        // foundData();
        // noData();
    }
    function foundData() {
        return (
            <>
                {isLoading ?
                    <ActivityIndicator size="large" color={Colors.theme} />
                    :
                    <View style={{
                        // flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'plum',
                    }}>
                        <Image
                            resizeMode='cover'
                            source={require('../../../Assets/Images/NoData.png')}
                            style={{
                                width: hp(33),
                                height: hp(33),
                            }}
                        ></Image>

                        <Text
                            style={{
                                fontSize: hp(3),
                                fontWeight: '600',
                                color: Colors.theme,
                                marginTop: hp(2),
                            }}>News not Available</Text>
                    </View>
    }
            </>
        )
    }
    {/* function noData() {
        return (
            
        )
    } */}

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
        }}>
            <StatusBar backgroundColor={Colors.theme} />

            {(healthNews == " " || healthNews == undefined || healthNews == null) ?
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    // backgroundColor: 'plum',
                }}>
                    {/* <ActivityIndicator size="large" color={Colors.theme} /> */}
                    {closeIndicator()}
                    {foundData()}
                </View>
                :
                <View style={{
                    flex: 1,
                    // paddingTop: hp(2),
                    marginHorizontal: wp(4),
                    // backgroundColor: Colors.blackHexColor,
                }}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={healthNews}
                        renderItem={({ item, index }) => {
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
                                        // source={{ uri: item.CoverImg }}
                                        source={{
                                            uri: (item.urlToImage != undefined && item.urlToImage != null)
                                                ? item.urlToImage :
                                                //  AppConfig.pre_image_link
                                                "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
                                        }}
                                        style={{
                                            width: wp(92),
                                            height: hp(17),
                                            // backgroundColor: 'yellow',
                                            borderRadius: hp(2)
                                        }}
                                    >
                                    </Image>

                                    {/* <Text
                                    // numberOfLines={1}
                                    style={{
                                        fontSize: hp(2.3),
                                        color: Colors.primary_color,
                                        // marginTop: hp(1),
                                        marginHorizontal: wp(4),
                                    }}>{index}</Text> */}

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
                                            // marginTop: hp(0.5),
                                            marginLeft: wp(2),
                                            marginRight: wp(2),
                                            marginBottom: hp(1),
                                            textAlign: 'left'
                                        }}>{item.description}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            }
        </View>
    )
}