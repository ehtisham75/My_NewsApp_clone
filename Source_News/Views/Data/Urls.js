// url = "https://myallies-breaking-news-v1.p.rapidapi.com/news/cnn"

// url = "https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews"
// url: 'https://community-hacker-news-v1.p.rapidapi.com/updates.json'
// url: 'https://bing-news-search1.p.rapidapi.com/news',
// url: 'https://news67.p.rapidapi.com/v2/topic-search',

// 430cf9ead7d84189a2cce9d3976f4de1
// https://newsapi.org/v2/everything?q=keyword&apiKey=430cf9ead7d84189a2cce9d3976f4de1


// 'https://newsapi.org/v2/top-headlines?' +
//     'country=us&' +
//     'apiKey=430cf9ead7d84189a2cce9d3976f4de1';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })


// https://api-browser.newscatcherapi.com/?1=KyK0k7sEowIUipCSIPvxkEuF9QdODx2tQAkr8paT0Mk
// https://arynews.tv/
// https://arynews.tv/tag/api/
// https://a-sports.tv/category/sports/

import AppConfig from "./AppConfig";
const DOMAIN = AppConfig.domain

export default{
    HEADLINES: DOMAIN+"top-headlines?",
}