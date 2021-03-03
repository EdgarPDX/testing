import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <input type="email">
                </input>
                <input type="password">
                </input>
                <Link to="/user">
                
                    Login
                </Link>
            </>
        )
    }
}
