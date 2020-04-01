import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from "./services/auth/auth.service";

export default class AuthenticatedRoute extends Component {
    render() {
        if(AuthService.getCurrentUser()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login" />
        }
    }
}