import Urls from "./Urls";
import AppConfig from "./AppConfig";
import axios from "react-native-axios";

import { View, Text } from 'react-native'
import React from 'react'

// const newsApiHandler = (url, _body, OnResponse, OnError) => {
//     axios.get(url, {
//         // params: {
//         //   apikey: AppConfig.apiKey
//         // }

//         // url: 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=430cf9ead7d84189a2cce9d3976f4de1'
//         // url: 'https://newsapi.org/v2/everything?' + 'q=Apple&' + 'from=2023-01-05&' + 'sortBy=popularity&' + 'apiKey=52b1e3a780d54701b84aee98c9552a5c',
//     }).then((resp) => {
//         OnResponse(resp)

//         // console.log('--------Output: ',JSON.stringify(res.data))
//         // setnewsList(res.data?.articles)
//     })
//         .catch(function (error) {
//             OnError(error)
//         });
// }

export default function ApiHandler(url, OnResponse, OnError) {
    axios.get(url, {
        // params: {
        //   apikey: AppConfig.apiKey
        // }
    })
        .then((resp) => {
            OnResponse(resp)
            // console.log('--------Output: ',JSON.stringify(res.data))
        })
        .catch(function (error) {
            OnError(error)
        });
}