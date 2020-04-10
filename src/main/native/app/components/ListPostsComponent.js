import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import {DefaultStyles} from "../assets/Stylings";

export default class ListPostsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true,
            title: props.title ? props.title : 'Published Posts',
            author: props.username ? props.username : undefined
        };
        this.getPosts = this.getPosts.bind(this);
        this.makePostsList = this.makePostsList.bind(this);
    }

    componentDidMount(): void {
        this.getPosts();
    }

    render() {
        return (
            <View style={{flex: 1, padding: 24}}>
                <Text style={DefaultStyles.sectionTitle}>{this.state.title}</Text>
                {this.state.isLoading ? <ActivityIndicator/> : (
                    this.makePostsList()
                )}
            </View>
        );
    }
    getPosts() {
        fetch('http://localhost:8080/api/posts/published')
            .then((response) => response.json())
            .then((json) => this.setState({posts: json}))
            .catch((error) => this.setState({message: error.message}))
            .finally(() => this.setState({isLoading: false}));
    }

    makePostsList () {
        if (this.state.message) {
            return <View style={"margin-top: 10px;"}><Text>{this.state.message}</Text></View>
        }
        return this.state.posts.map((data) => {
            return (
                <View key={data._id} style={{marginTop: 10}}><Text>{data.title}</Text></View>
            )
        })
    }
};
