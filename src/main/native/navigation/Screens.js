import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    // options={{title: 'Welcome'}}
                />
                {/*<Stack.Screen name="Profile" component={Profile} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
