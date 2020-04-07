import React, {Component} from "react";

export default class PostDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            isAuthor: props.isAuthor || false
        };
    }

    render() {
        const {post} = this.state;

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{post.title}</strong>
                    </h3>
                    <h6>Category: {post.category ? post.category : "None"}</h6>
                    <h5>By <strong>{post.author.username}</strong> on <small><strong>{post.postDate}</strong></small></h5>
                    <hr/>
                    <h5>{post.subtitle1}</h5>
                    <p>{post.description1}</p>
                    {post.quote1 ? <p>{post.quote1}{post.quoter1 ? <span><br></br><i>-{post.quoter1}</i></span> : <i>-Anonymous</i>}</p> : ""}
                </header>
            </div>
        );
    }
}
