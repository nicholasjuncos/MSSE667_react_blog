import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthService from "../services/auth/auth.service";


class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            // showModeratorBoard: false,
            // showAdminBoard: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: AuthService.getCurrentUser(),
                // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                // showAdminBoard: user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        // const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        const { currentUser } = this.state;
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    ReactBlog
                </Link>
                <div className="navbar-nav mr-auto">
                    {currentUser && (
                        <li className="nav-item">
                            <Link to={"/my/posts/create"} className="nav-link">
                                Create Post
                            </Link>
                        </li>
                    )}
                </div>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={this.logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>
        )
    }
}

export default withRouter(MenuComponent)