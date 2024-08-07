import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../../Colors/Colors';
import axios from 'react-native-axios';
import { useRoute } from '@react-navigation/native';
import AppConfig from '../../Data/AppConfig';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerItem } from '@react-navigation/drawer';


export default function NewsDetails() {
    const route = useRoute();

    const [getNews_Detail, setGetNews_Detail] = useState(route.params?.Selected_NewsDetails)
    return (
        <View style={{
            flex: 1,
            // backgroundColor: '#7e51c4', 
        }}>
            <StatusBar backgroundColor={Colors.theme} />

            {/* ============= Header ============ */}
            <View
                style={{
                    width: wp(100),
                    height: hp(6),
                    backgroundColor: Colors.theme,
                }}>

            </View>

            <ImageBackground
                resizeMode='cover'
                source={{ uri: getNews_Detail.urlToImage }}
                // source={{ uri: "https://i.dawn.com/primary/2021/05/60a7680bee726.png" }}
                style={{
                    width: wp(100),
                    height: hp(37),
                }}
            ></ImageBackground>

            {/* ============ Deatils Section =========== */}
            <View style={{
                // backgroundColor: 'plum',
                backgroundColor: Colors.white,
                width: wp(100),
                height: hp(60),
                position: 'absolute',
                bottom: 0,
                borderTopLeftRadius: hp(2),
                borderTopRightRadius: hp(2)
            }}>

                <ScrollView>
                    <Text style={{
                        fontSize: hp(2.4),
                        fontWeight: '600',
                        // color: Colors.black_text,
                        color: Colors.theme,
                        marginHorizontal: wp(5),
                        // backgroundColor: 'red',
                        marginTop: hp(1),
                    }}>{getNews_Detail.title}</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: hp(0.5),
                        marginHorizontal: wp(5),
                        // backgroundColor: 'yellow',
                    }}>
                        <Text style={{
                            fontSize: hp(2),
                            fontWeight: '500',
                            color: Colors.black_text,
                            // color: Colors.primary_color,
                        }}>Author:</Text>

                        <Text
                            numberOfLines={1}
                            style={{
                                fontSize: hp(2),
                                fontWeight: '500',
                                marginLeft: wp(2),
                                color: Colors.black_text,
                            }}>{getNews_Detail.author}</Text>
                    </View>

                    <Text
                        style={{
                            fontSize: hp(2),
                            // fontWeight: '500',
                            color: Colors.grayBox,
                            marginHorizontal: wp(3),
                            // backgroundColor: 'red',
                            marginTop: hp(1),
                            textAlign: 'left',
                            paddingBottom: hp(2)
                        }}>
                        {getNews_Detail.content}
                    </Text>

                </ScrollView>

            </View>



        </View>
    )
}