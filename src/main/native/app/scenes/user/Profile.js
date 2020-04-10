
import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

import * as api from "../../services/auth";
import { useAuth } from "../../provider";

import Form from 'react-native-basic-form';
import {ErrorText, Header} from "../../components/Shared";

export default function Profile (props) {
    const {navigation} = props;
    let user = props.route.params === undefined ? useAuth().state.user : '';
    let pageProps = {title: props.route.params === undefined ? 'My Profile': `${user.username}'s Profile`};
    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={pageProps.title}/>
            <View style={{flex: 1}}>
                <Text>{`Welcome ${user.firstName} ${user.lastName} (${user.username})`}</Text>
            </View>
        </View>
    );
};
