import React, { Component } from "react";
import PostDetailComponent from "../../components/posts/PostDetailComponent";
import PostService from "../../services/post.service";
import AuthService from "../../services/auth/auth.service";
import {Redirect} from "react-router-dom";

export default class PostDetailPage extends Component {
    constructor(props) {
        super(props);
        let postUrl = 'published/';
        if(this.props.match.path.includes('/my/posts/')) {
            postUrl = 'my/posts/';
        }
        const { id } = this.props.match.params;
        this.state = {
            // post: {},
            currentUser: AuthService.getCurrentUser(),
            postUrl: postUrl + id,
            isAuthor: false
        };
        this.getPost = this.getPost.bind(this);
    }

    componentDidMount() {
        this.getPost(this.state.postUrl);
    }

    getPost(url) {
        PostService.getPost(this.state.postUrl) //HARDCODED
            .then(
                response => {
                    const post = response.data;
                    this.setState({
                        post: post
                    });
                    if (this.state.currentUser) {
                        if (post.author._id === this.state.currentUser._id && this.state.postUrl !== 'my/posts/' + post._id) {
                            this.setState({redirect: `/my/posts/${this.state.post._id}`});
                        } else {if (post.author._id === this.state.currentUser._id) {
                            this.setState({isAuthor: true});
                        }}
                    }
                },
                error => {
                    console.log(error);
                    this.setState({
                        redirect: '/'
                    });
                }
            )
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            if(this.state.redirect === '/') {
                alert("Post does not exist.")
            }
            return <Redirect to={this.state.redirect}/>
        }
    };

    render() {

        return (
            <div>
                {this.renderRedirect()}
                { this.state.post &&
                    <PostDetailComponent post={this.state.post} isAuthor={this.state.isAuthor}/>
                }
                {/*{ this.state.post && this.state.isAuthor &&*/}
                {/*    <PostFormComponent post={this.state.post} type={'update'}/>*/}
                {/*}*/}
            </div>
        );
    }
}
