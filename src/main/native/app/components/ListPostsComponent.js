import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {DefaultStyles} from "../assets/Stylings";
import {useAuth} from "../provider";
import {getUser} from "../services/auth";
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

    function makePostsList () {
        if (message) {
            return <View style={{marginTop: 10}}><Text>{message}</Text></View>
        }
        return posts.map((data) => {
            return (
                <View key={data._id} style={{marginTop: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', {username: data.author.username})}>
                        <Text>{data.title}</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    useEffect(() => {
        if(props.posts) {
            setPosts(props.posts);
            setIsLoading(false);
        }else if(props.isUser) {
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
