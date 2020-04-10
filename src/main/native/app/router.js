import React from 'react'

import {AuthDrawer, NormalDrawer} from "./routes/drawer";

import {useAuth} from "./provider";
import {NavigationContainer} from "@react-navigation/native";

export default function Router(props) {

    const {state} = useAuth();

    return (
        <>
        {state.isLoggedIn ?
            <NavigationContainer>
                <NormalDrawer/>
            </NavigationContainer>
            :
            <NavigationContainer>
                <AuthDrawer/>
            </NavigationContainer>
        }
        </>
    );
}