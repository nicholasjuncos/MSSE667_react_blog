import PostService from "../../services/post.service";
import React, {Component} from "react";
import AuthService from "../../services/auth/auth.service";
import { Redirect } from "react-router-dom";

export default class PostDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            post: {},
            postUrl: props.postUrl,
            redirect: false
        };
        this.getPost = this.getPost.bind(this);
    }

    componentDidMount() {
        this.getPost(this.state.postUrl);
    }

    getPost(url) {
        PostService.getPost(url) //HARDCODED
            .then(
                response => {
                    this.setState({
                        post: response.data
                    });
                    if (this.state.currentUser) {
                        if (this.state.post.author._id === this.state.currentUser._id) {
                            this.setState({redirect: true})
                        }
                    }
                },
                error => {
                    console.log(error);
                }
            )
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/my/posts/${this.state.post._id}`}/>
        }
    };

    render() {
        const {post} = this.state;

        return (
            <div className="container">
                {this.renderRedirect()}
                <header className="jumbotron">
                    <h3>
                        <strong>{post.title}</strong>
                    </h3>
                </header>
            </div>
        );
    }
}
