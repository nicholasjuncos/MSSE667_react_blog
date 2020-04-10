// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
import React, {Component} from 'react';
import Router from "./app/router";
import AuthProvider from "./app/provider";

export default function App() {
    return (
        <AuthProvider>
            <Router/>
        </AuthProvider>
    );
}
