import React, { Component } from 'react';

// import UserService from "../services/user.service";
import ListPostsComponent from "../components/posts/ListPostsComponent";

class HomePage extends Component {

    // constructor(props) {
    //     super(props);
    //
        // this.state = {
        //     content: ""
        // };
    // }

    // componentDidMount() {
        // UserService.getPublicContent().then(
        //     response => {
        //         this.setState({
        //             content: response.data
        //         });
        //     },
        //     error => {
        //         this.setState({
        //             content:
        //                 (error.response && error.response.data) ||
        //                 error.message ||
        //                 error.toString()
        //         });
        //     }
        // );
    // }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <ListPostsComponent/>
                </header>
            </div>
        )
    }
}

export default HomePage;