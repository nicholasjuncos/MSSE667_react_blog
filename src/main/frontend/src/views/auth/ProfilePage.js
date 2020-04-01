import React, { Component } from "react";
import AuthService from "../../services/auth/auth.service";
import UserService from "../../services/user.service";
import ListPostsComponent from "../../components/posts/ListPostsComponent";
import {Redirect} from "react-router-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            posts: []
        };
        this.getUser = this.getUser.bind(this);
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
        let currentUser = AuthService.getCurrentUser();
        if(this.props.match.params.username) {
            UserService.getUser(this.props.match.params.username).then(
                response => {
                    this.setState({
                        user: response.data,
                        posts: <ListPostsComponent postUrl={'published/'} title={response.data.username + '\'s Posts'} isUser={'false'} detailsUrl={'/posts/'}/>
                    });
                    if(currentUser) {
                        if(currentUser.username === response.data.username) {
                            this.setState({
                                redirect: '/profile'
                            })
                        }
                    }
                }, error => {
                    this.setState({
                        redirect: '/'
                    })
                }
            );
        } else {
            this.setState({
                user: AuthService.getCurrentUser(),
                posts: <ListPostsComponent postUrl={'my/posts/'} title={'My Posts'} isUser={'true'} detailsUrl={'/my/posts/'}/>
            });
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            if(this.state.redirect === '/') {
                alert("Does not exist!")
            }
            return <Redirect to={this.state.redirect}/>
        }
    };

    render() {

        return (
            <div className="container">
                {this.renderRedirect()}
                <header className="jumbotron">
                    <h3>
                        <strong>{this.state.user.username}</strong> Profile
                    </h3>
                </header>
                {/*<p>*/}
                {/*    <strong>Token:</strong>{" "}*/}
                {/*    {user.accessToken.substring(0, 20)} ...{" "}*/}
                {/*    {user.accessToken.substr(currentUser.accessToken.length - 20)}*/}
                {/*</p>*/}
                {/*<p>*/}
                {/*    <strong>Id:</strong>{" "}*/}
                {/*    {user._id}*/}
                {/*</p>*/}
                <p>
                    <strong>Name:</strong>{" "}
                    {this.state.user.firstName} {this.state.user.lastName}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {this.state.user.email}
                </p>
                {/*<strong>Authorities:</strong>*/}
                {/*<ul>*/}
                {/*    {currentUser.roles &&*/}
                {/*    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}*/}
                {/*</ul>*/}
                <header className="jumbotron">
                    {this.state.posts}
                </header>
            </div>
        );
    }
}
