// //This is an example code for NavigationDrawer//
// import React, { Component } from 'react';
// //import react in our code.
// import { View, Image, TouchableOpacity } from 'react-native';
//
// //For React Navigation 4+
// import {createAppContainer} from 'react-navigation';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation-stack';
//
// import HomeScreen from "../screens/HomeScreen";
// import {NavigationContainer} from "@react-navigation/native";
// import LoginScreen from "../screens/auth/LoginScreen";
//
// const Stack = createStackNavigator();
//
// function AppStack() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     // options={{title: 'Welcome'}}
//                 />
//                 <Stack.Screen
//                     name="Login"
//                     component={LoginScreen}
//                  />
//                 {/*<Stack.Screen name="Profile" component={Profile} />*/}
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
//
// export default AppStack;

import React, { Component } from 'react';
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import {TouchableOpacity, View} from "react-native";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import {createDrawerNavigator} from "react-navigation-drawer";

class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        Icon.loadFont();
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    {/*Donute Button Image */}
                    <Icon name="menu" size={20} style={{marginLeft: 5}}/>
                    {/*<Image*/}
                    {/*    source={require('./image/drawer.png')}*/}
                    {/*    style={{ width: 25, height: 25, marginLeft: 5 }}*/}
                    {/*/>*/}
                </TouchableOpacity>
            </View>
        );
    }
}

const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Login: {
        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Login Screen',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

const DrawerNavigatorScreens = createDrawerNavigator({
    //Drawer Optons and indexing
    Home: {
        //Title
        screen: FirstActivity_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
        },
    },
    Login: {
        //Title
        screen: Screen2_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Login',
        },
    },
});

export default DrawerNavigatorScreens;
