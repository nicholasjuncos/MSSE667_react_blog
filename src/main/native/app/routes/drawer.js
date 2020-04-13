import {headerStyle, headerTitleStyle} from "../theme";
import HomeStack from "./home";
import {NavigationDrawerStructure} from "../components/Shared";
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AuthStack from "./auth";
import {UserStack} from "./user";
import Logout from "../scenes/auth/Logout";
import {createStackNavigator} from "@react-navigation/stack";

const Drawer = createDrawerNavigator();

export function AuthDrawer({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="Home" options={{headerStyle, headerTitleStyle}}>
            <Drawer.Screen name="Home" component={HomeStack} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
            <Drawer.Screen name="Login/Register" component={AuthStack}/>
        </Drawer.Navigator>
    )
}

const Stack = createStackNavigator();

function LogoutStack({navigation}) {
    return (
    <Stack.Navigator initialRouteName="Logout" options={{headerStyle, headerTitleStyle}}>
        <Stack.Screen name="Logout" component={Logout} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
    </Stack.Navigator>
    )
}

export function NormalDrawer({navigation}) {
    return (
        <Drawer.Navigator initialRouteName="Home" options={{headerStyle, headerTitleStyle}}>
            <Drawer.Screen name="Home" component={HomeStack} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
            <Drawer.Screen name="Profile" component={UserStack} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
            <Drawer.Screen name="Logout" component={LogoutStack} options={{headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />}}/>
        </Drawer.Navigator>
    )
}
