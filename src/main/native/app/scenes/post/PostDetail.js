import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {useAuth} from "../../provider";

import {getMyPostDetail, getPublishedPostDetail} from "../../services/post";
import {Header} from "../../components/Shared";
import {DefaultStyles} from "../../assets/Stylings";

export default function PostDetail(props) {
    const {navigation, route} = props;
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState({});
    const [author, setAuthor] = useState({});
    const [isUser, setIsUser] = useState(false);
    const [title, setTitle] = useState('Post Detail');
    const {state} = useAuth();

    useEffect(() => {
        if (props.route.params === undefined) {
            navigation.navigate('Home');
        } else {
            const {postId} = props.route.params;
            if(route.name === 'MyPostDetails') {
                getMyPostDetail(postId).then(
                    res => {
                        setIsUser(true);
                        setPost(res);
                        setAuthor(res.author);
                        setIsLoading(false);
                    }, error => {
                        Alert(error.message);
                        navigation.navigate('Home');
                }
                )
            } else {
                getPublishedPostDetail(postId).then(
                    res => {
                        if (state.isLoggedIn) {
                            if(state.user._id === res.author._id) {
                                navigation.navigate('MyPostDetails', {postId: res._id})
                            }
                        }
                        setPost(res);
                        setAuthor(res.author);
                        setIsLoading(false);
                    }
                )
            }
        }
    }, []);

    return isLoading ? (
            <ActivityIndicator/>
        )
        : (
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={DefaultStyles.scrollView}>
                <Header title={title}/>
                <View style={{flex: 1}}>
                    {isUser ? <Text>{post.published ? 'Published' : 'Not Published'}</Text> : undefined}
                    {/*{isUser ? <Button onPress={() => navigation.navigate('UpdatePost', {postId: post._id})} title={"Update"}/> : undefined}*/}
                    <View style={DefaultStyles.sectionContainer}>
                        <Text style={DefaultStyles.sectionTitle}>{post.title}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile', {username: author.username})}>
                            <Text style={DefaultStyles.link}>By: {author.username}</Text>
                        </TouchableOpacity>
                        <Text style={{marginTop: 5}}>On {post.postDate}</Text>
                        <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 16}}>{post.subtitle1}</Text>
                        <Text style={DefaultStyles.sectionDescription}>{post.description1}</Text>
                        {post.quote1 ? <Text style={DefaultStyles.sectionDescription}>{post.quote1} - {post.quoter1}</Text> : undefined }
                    </View>
                </View>
            </ScrollView>
        );
};
