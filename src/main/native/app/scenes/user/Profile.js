
import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../provider";

import Form from 'react-native-basic-form';
import {ErrorText, Header} from "../../components/Shared";

export default function Profile (props) {
    const {navigation} = props;

    const { state } = useAuth();
    const user = state.user;

    let pageProps = {title: props.route.name === 'MyProfile' ? 'My Profile': `${user.username}'s Profile`};
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={pageProps.title}/>
            <View style={{flex: 1}}>

            </View>
        </View>
        // <View style={{flex:1, paddingHorizontal: 16}}>
        //     <View style={{flex:1}}>
        //         <Text>{pageProps.title}</Text>
        //         <Text>{user.firstName}</Text>
        //     </View>
        // </View>
    );
};
