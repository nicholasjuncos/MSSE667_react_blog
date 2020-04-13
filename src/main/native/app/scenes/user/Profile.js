import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import * as api from "../../services/auth";
import {AuthContext, useAuth} from "../../provider";

import {getUser} from "../../services/auth";
import {ErrorText, Header} from "../../components/Shared";
import {DefaultStyles} from "../../assets/Stylings";
import ListPostsComponent from "../../components/ListPostsComponent";
import {getAuthorPublishedPosts} from "../../services/post";

export default function Profile(props) {
    const {navigation} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [user, setUser] = useState();
    const [isUser, setIsUser] = useState(false);
    const [pageProps, setPageProps] = useState({title: 'Profile'});
    const {state} = useAuth();

    useEffect(() => {
        if (props.route.params === undefined) {
            if (!state.isLoggedIn) {
                navigation.navigate('Home');
            }
            let user = state.user;
            setUser(user);
            setIsUser(true);
            let pageProps = {title: 'My Profile'};
            setPageProps(pageProps);
            setIsLoading(false);
        } else {
            const {username} = props.route.params;
            if (state.isLoggedIn) {
                if (state.user.username === username) {
                    navigation.navigate('Profile');
                }
            }
            setUsername(username);
            const pageProps = {title: `${username}'s Profile`};
            setPageProps(pageProps);
            getUser(username).then(
                res => {
                    setUser(res);
                    setIsLoading(false);
                }
            );
        }
    }, []);

    return isLoading ? (
            <ActivityIndicator/>
        )
        : (
            <ScrollView>
                <Header title={pageProps.title}/>
                <View style={{flex: 1}}>
                    {isUser ? (
                        <>
                            <View style={DefaultStyles.sectionContainer}>
                                <Text>{`Welcome to ${state.user.firstName} ${state.user.lastName} (${state.user.username}) profile`}</Text>
                                <Button title={"Update Profile"} onPress={() => navigation.navigate('UpdateProfile')}/>
                            </View>
                            <View style={DefaultStyles.sectionContainer}>
                                <ListPostsComponent navigation={navigation} isUser={true}/>
                            </View>
                        </>
                    ) : (
                        <>
                        <View style={DefaultStyles.sectionContainer}>
                            <Text>{`Welcome to ${user.firstName} ${user.lastName} (${user.username}) profile`}</Text>
                        </View>
                        <View style={DefaultStyles.sectionContainer}>
                            <ListPostsComponent navigation={navigation} username={user.username}/>
                        </View>
                        </>
                    )
                    }
                </View>
            </ScrollView>
        );
};
