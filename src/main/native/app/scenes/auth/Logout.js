import React  from 'react';
import {Button, View} from 'react-native';

import { useAuth } from "../../provider";
import {Header} from "../../components/Shared";

export default function Logout(props) {

    const { handleLogout } = useAuth();

    return (
        <View style={{flex: 1, paddingHorizontal: 16, backgroundColor:"#fff"}}>
            <Header title={"Logout"}/>
            <View style={{flex: 1}}>
                <Button title={"Log Out"} onPress={() => {
                    handleLogout();
                }}/>
            </View>
        </View>
    );
};

Logout.navigationOptions = ({}) => {
    return {
        title: `Logout`
    }
};
