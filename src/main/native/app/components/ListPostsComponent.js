import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {getPublishedPosts, getMyPosts, getAuthorPublishedPosts} from "../services/post";
import {Header} from "./Shared";

export default function ListPostsComponent(props) {
    const {navigation} = props;
    const [isLoading, setIsLoading] = useState(!props.posts);
    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState([]);
    const [isUser, setIsUser] = useState(false);
    const [pageProps, setPageProps] = useState({title: 'Posts'});
    const [message, setMessage] = useState();

    function makePostsList() {
        if (message) {
            return <View style={{marginTop: 10}}><Text>{message}</Text></View>
        }
        return posts.map((data) => {
            return (
                <View key={data._id} style={{marginTop: 10}}>
                    {isUser ? (
                            <TouchableOpacity onPress={() => navigation.navigate('MyPostDetails', {postId: data._id})}>
                                <Text style={{color: 'blue'}}>{data.title} on {data.postDate}</Text>
                            </TouchableOpacity>
                        )
                        : (
                            <TouchableOpacity onPress={() => navigation.navigate('PostDetails', {postId: data._id})}>
                                <Text style={{color: 'blue'}}>{data.title} on {data.postDate} by {data.author.username}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            )
        })
    }

    useEffect(() => {
        const getPosts = navigation.addListener('focus', payload => {
            if (props.isUser) {
                getMyPosts().then(
                    res => {
                        setPosts(res);
                        setIsLoading(false);
                    }, error => {
                        setMessage(error.message);
                        setIsLoading(false);
                    }
                )
            } else if (props.username) {
                getAuthorPublishedPosts(props.username).then(
                    res => {
                        setPosts(res);
                        setIsLoading(false);
                    }, error => {
                        setMessage(error.message);
                        setIsLoading(false);
                    }
                )
            } else {
                getPublishedPosts().then(
                    res => {
                        setPosts(res);
                        setIsLoading(false);
                    }, error => {
                        setMessage(error.message);
                        setIsLoading(false);
                    }
                )
            }
        });
        if (props.isUser) {
            setPageProps({title: 'My Posts'});
            setIsUser(true);
            getMyPosts().then(
                res => {
                    setPosts(res);
                    setIsLoading(false);
                }, error => {
                    setMessage(error.message);
                    setIsLoading(false);
                }
            )
        } else if (props.username) {
            setUsername(props.username);
            setPageProps({title: `${props.username}'s Posts`});
            getAuthorPublishedPosts(props.username).then(
                res => {
                    setPosts(res);
                    setIsLoading(false);
                }, error => {
                    setMessage(error.message);
                    setIsLoading(false);
                }
            )
        } else {
            setPageProps({title: 'Published Posts'});
            getPublishedPosts().then(
                res => {
                    setPosts(res);
                    setIsLoading(false);
                }, error => {
                    setMessage(error.message);
                    setIsLoading(false);
                }
            )
        }
        return getPosts;
    }, []);


    return isLoading ? (
            <ActivityIndicator/>
        )
        : (
            <View style={{flex: 1, padding: 24, backgroundColor: "#fff"}}>
                <Header title={pageProps.title}/>
                <View style={{flex: 1}}>
                    {makePostsList()}
                </View>
            </View>
        );
}
