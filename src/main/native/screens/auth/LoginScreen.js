import {SafeAreaView, ScrollView, Button, TextInput, Text, View, Image} from "react-native";
import React from 'react';
import {DefaultStyles} from "../../assets/Stylings";
import Icon from "react-native-vector-icons/dist/MaterialIcons";

const required = value => {
    if (!value) {
        return (
            <View className="alert alert-danger" role="alert">
                This field is required!
            </View>
        );
    }
};

export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={DefaultStyles.scrollView}>
                    <View style={DefaultStyles.body}>
                        <View style={DefaultStyles.sectionContainer}>
                            <Text style={DefaultStyles.sectionTitle}>React Blog</Text>
                            {/*<Text style={DefaultStyles.sectionDescription, {textAlign: "center", marginTop: 10}}>*/}
                            {/*    Login Page*/}
                            {/*</Text>*/}
                            <Icon style={{textAlign: 'center'}} name="person" size={50}/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
