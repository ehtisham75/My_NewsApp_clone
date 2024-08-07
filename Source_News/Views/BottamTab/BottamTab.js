import React from 'react'
import { View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../../Colors/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// -----------------------
import HomeScreen from '../Screens/Home/HomeScreen';
import CatagoriesScreen from '../Screens/Catagories/CatagoriesScreen';
import ShortVideos from '../Screens/Shorts/ShortVideos';
import { useRoute, getFocusedRouteNameFromRoute } from '@react-navigation/native';


const GetRoutes = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    console.log("========&&&&&&&&& ", routeName)
    if (routeName?.includes("ShortVideos")) {
        return "none";
    }
    return "flex";
}
export default function BottamTab() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: hp(8),
                    backgroundColor: Colors.theme,
                }
            }}>

            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{
                                fontSize: hp(1.7),
                                color: Colors.secondary_color,
                                top: -5,
                                fontWeight: '700',
                                fontFamily: "JosefinSans-Medium",
                                // backgroundColor: 'plum',
                            }}>{focused ? "Home" : ""}</Text>)
                    },
                    // tabBarActiveTintColor: Colors.primary_color,
                    // tabBarActiveTintColor: Colors.primary_color,
                    // tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? require('../../Assets/Images/home.png')
                                    : require('../../Assets/Images/homeInactive.png')}
                                style={{
                                    width: hp(4),
                                    height: hp(4),
                                    // backgroundColor: 'yellow',
                                }}>
                            </Image>
                        )

                    },
                }} />

            <Tab.Screen name="CatagoriesScreen" component={CatagoriesScreen}
                options={{
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{
                                fontSize: hp(1.7),
                                color: Colors.secondary_color,
                                top: -5,
                                fontWeight: '700',
                                fontFamily: "JosefinSans-Medium",
                                // backgroundColor: 'plum',
                            }}>{focused ? "Category" : ""}</Text>)
                    },
                    // tabBarActiveTintColor: Colors.theme,
                    // tabBarInactiveTintColor: 'gray',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? require('../../Assets/Images/category.png')
                                    : require('../../Assets/Images/categoryInactive.png')}
                                style={{
                                    width: hp(4),
                                    height: hp(4),
                                    // backgroundColor: 'yellow',
                                }}>
                            </Image>
                        )
                    },
                }} />

            <Tab.Screen name="ShortVideos" component={ShortVideos}
                // options={({ route }) => ({
                //     tabBarStyle: { display: GetRoutes(route) }
                // })
                options={{
                    // tabBarStyle: ({ route }) => ({ display: GetRoutes("ShortVedios") }),
                    tabBarStyle: { display: 'none' },

                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={{
                                fontSize: hp(1.7),
                                color: Colors.secondary_color,
                                top: -5,
                                fontWeight: '700',
                                fontFamily: "JosefinSans-Medium",
                                // backgroundColor: 'plum',
                            }}>{focused ? "Shorts" : ""}</Text>)
                    },
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                source={focused ? require('../../Assets/Images/video.png')
                                    : require('../../Assets/Images/videoInactive.png')}
                                style={{
                                    width: hp(4),
                                    height: hp(4),
                                    // backgroundColor: 'yellow',
                                }}>
                            </Image>
                        )
                    },
                }}
            />

        </Tab.Navigator >
    )
}