import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//IMPORT SCENES
import ProfileScreen from "../scenes/user/Profile";
import UpdateProfileScreen from "../scenes/user/UpdateProfile";

import {headerStyle, headerTitleStyle} from '../theme'
import {NavigationDrawerStructure} from "../components/Shared";
import PostDetail from "../scenes/post/PostDetail";
import PostForm from "../scenes/post/PostForm";

const Stack = createStackNavigator();

export function UserStack({navigation}) {

    return (
        <Stack.Navigator initialRouteName="Home" options={{headerStyle, headerTitleStyle}}>
            <Stack.Screen name="MyProfile" component={ProfileScreen} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen}/>
            <Stack.Screen name="MyPostDetails" component={PostDetail}/>
            <Stack.Screen name="CreatePost" component={PostForm}/>
            <Stack.Screen name="UpdatePost" component={PostForm}/>
        </Stack.Navigator>
    )
}
