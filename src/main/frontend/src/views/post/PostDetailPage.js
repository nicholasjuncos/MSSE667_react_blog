import React, { Component } from "react";
import PostDetailComponent from "../../components/posts/PostDetailComponent";

export default class PostDetailPage extends Component {
    constructor(props) {
        super(props);
        let postUrl = 'published/';
        if(this.props.match.path.includes('/my/posts/')) {
            postUrl = 'my/posts/'
        }
        const { id } = this.props.match.params;
        this.state = {
            postUrl: postUrl + id
        };
    }

    render() {

        return (
            <PostDetailComponent postUrl={this.state.postUrl}/>
        );
    }
}
