import {SafeAreaView, ScrollView, Button, Text, View} from "react-native";
import React from 'react';
import {DefaultStyles} from "../../assets/Stylings";
import ListPostsComponent from "../../components/ListPostsComponent";
import {Header} from "../../components/Shared";

export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={DefaultStyles.scrollView}>
                    <View style={DefaultStyles.body}>
                        <View style={DefaultStyles.sectionContainer}>
                            <Header title={"React Blog"}/>
                            <Text style={DefaultStyles.sectionDescription}>
                                Welcome to React Blog!
                            </Text>
                            <ListPostsComponent/>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
