import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//IMPORT SCENES
import ProfileScreen from "../scenes/user/Profile";
import UpdateProfileScreen from "../scenes/user/UpdateProfile";

import {headerStyle, headerTitleStyle} from '../theme'
import {NavigationDrawerStructure} from "../components/Shared";
import HomeStack from "./home";

const Stack = createStackNavigator();

export function UserStack({navigation}) {
    return (
        <Stack.Navigator initialRouteName="Home" options={{headerStyle, headerTitleStyle}}>
            <Stack.Screen name="MyProfile" component={ProfileScreen} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
        </Stack.Navigator>
    )
}
