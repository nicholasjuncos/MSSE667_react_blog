import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//IMPORT SCENES
import HomeScreen from "../scenes/home/Home";

import {headerStyle, headerTitleStyle} from '../theme'
import {NavigationDrawerStructure} from "../components/Shared";

const Stack = createStackNavigator();

export default function HomeStack({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Home" options={{headerStyle, headerTitleStyle}}>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
        </Stack.Navigator>
    )
}