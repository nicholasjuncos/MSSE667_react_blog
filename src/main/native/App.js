// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import 'react-native-gesture-handler';
// import * as React from 'react';
//
// import {
//     StatusBar,
// } from 'react-native';
//
// import Screens from "./navigation/Screens";
//
// const App: () => React$Node = () => {
//     return (
//         <>
//             <StatusBar barStyle="dark-content"/>
//             <Screens/>
//         </>
//     );
// };
//
// export default App;

//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import DrawerNavigatorScreens from "./navigation/Screens";
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/auth/LoginScreen";

export default createAppContainer(DrawerNavigatorScreens);
