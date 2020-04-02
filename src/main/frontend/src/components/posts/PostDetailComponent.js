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
                </header>
            </div>
        );
    }
}
