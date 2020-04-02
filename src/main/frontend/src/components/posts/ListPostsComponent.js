import React, {Component} from "react";
import PostService from "../../services/post.service";
import { Link, withRouter } from 'react-router-dom'

class ListPostsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postUrl: props.postUrl || 'published/',
            title: props.title || 'All Published Posts',
            isUser: props.isUser || false,
            detailsUrl: props.detailsUrl || '/posts/'
        };
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.getPosts(this.state.postUrl);
    }

    getPosts(url) {
        PostService.getPosts(url) //HARDCODED
            .then(
                response => {
                    this.setState({
                        posts: response.data
                    });
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">{this.state.title}</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Title</th>
                            {!this.state.isUser ? <th>Author</th> : null}
                            <th>Post Date</th>
                            {this.state.isUser ? <th>Published</th> : null}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.posts.map(
                                post =>
                                    <tr key={post._id}>
                                        <td>
                                            <Link to={`${this.state.detailsUrl}${post._id}/`}>{post.title}</Link>
                                        </td>
                                        {!this.state.isUser
                                            ?
                                            <td><
                                                Link to={`profile/${post.author.username}/`}>
                                                    {post.author.firstName} {post.author.lastName}
                                                </Link>
                                            </td>
                                            :
                                            null
                                        }
                                        <td>{post.postDate}</td>
                                        {this.state.isUser ? <td>{post.published ? 'Yes' : 'No'}</td> : null}
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListPostsComponent)
