// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     render() {
//         return (
//             <NavigationContainer>
//                 <Drawer.Navigator
//                     initialRouteName="Screen4" >
//                     <Drawer.Screen name="Screen4" component={Screen4} />
//                     <Drawer.Screen name="Screen1" component={Screen1} />

//                 </Drawer.Navigator>
//             </NavigationContainer>
//         );
//     }
// }

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//     MyDrawer() {
//         // return(
//         // <Drawer.Navigator>
//         //     <Drawer.Screen name="Drawer" component={Screen2} />
//         //     </Drawer.Navigator>
//         // )
//     }

//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false
//           }}>
//           <Stack.Screen name="Screen1" component={Screen1} />
//           <Stack.Screen name="Screen2" component={this.MyDrawer} />
//           <Stack.Screen name="Screen3" component={Screen3} />
//           <Stack.Screen name="Screen4" component={Screen4}
//             options={{
//               headerShown: true, headerTitleAlign: 'center',  title: 'Home',
//               headerStyle: { backgroundColor: '#3c74db' },
//               headerTintColor: '#fff',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },
//                     }} />
//             </Stack.Navigator>

//     </NavigationContainer>
//     );
//   }
// }



import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// --------------------SCREENS-----------------------
import SplashScreen from './Source_News/Views/Screens/WelcomeScreens/SplashScreen';
import NoInterNetScreen from './Source_News/Views/Screens/NoInterNet/NoInterNetScreen';
import BottamTab from './Source_News/Views/BottamTab/BottamTab';
import NewsList from './Source_News/Views/Screens/Catagories/NewsList';
import NewsDetails from './Source_News/Views/Screens/Catagories/NewsDetails';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <Stack.Screen name="NoInterNetScreen" component={NoInterNetScreen} /> */}
        <Stack.Screen name="BottamTab" component={BottamTab} />
        {/* <Stack.Screen name="NewsList" component={NewsList} /> */}
        {/* <Stack.Screen name="NewsDetails" component={NewsDetails} /> */}

      </Stack.Navigator>

    </NavigationContainer>
  )
}
