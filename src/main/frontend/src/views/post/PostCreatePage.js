import React, { Component } from "react";
import PostFormComponent from "../../components/posts/PostFormComponent";

export default class PostCreatePage extends Component {

    render() {
        return (
            <div>
                <PostFormComponent formType={'create'} history={this.props.history}/>
            </div>
        );
    }
}
