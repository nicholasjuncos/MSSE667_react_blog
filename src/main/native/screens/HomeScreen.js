import {SafeAreaView, ScrollView, Button, Text, View} from "react-native";
import React from 'react';
import {DefaultStyles} from "../assets/Stylings";
import ListPostsComponent from "../components/ListPostsComponent";

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
                            <Text style={DefaultStyles.sectionDescription}>
                                This is the HomePage for the Native App
                            </Text>
                            <ListPostsComponent/>
                            {/*<Button*/}
                            {/*    title="Go to Jane's profile"*/}
                            {/*    onPress={() => navigation.navigate('Profile', {name: 'Jane'})}*/}
                            {/*/>*/}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
