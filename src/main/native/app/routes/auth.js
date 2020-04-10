import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//IMPORT SCENES
import RegisterScreen from "../scenes/auth/Register";
import LoginScreen from "../scenes/auth/Login";
import HomeStack from "./home";

import {headerStyle, headerTitleStyle} from '../theme'
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationDrawerStructure} from "../components/Shared";

//Create Routes
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function AuthStack({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Login" options={{headerStyle, headerTitleStyle}} screenOptions={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}
