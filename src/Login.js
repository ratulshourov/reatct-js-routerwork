import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    sessionsave = () => {
        sessionStorage.setItem("username", "ratul")
    }
    sessiondestroy = () => {
        sessionStorage.clear();
    }
    render() {

        return (
            <div>
                <button onClick={this.sessionsave}>Login</button>
                <button onClick={this.sessiondestroy}>Logout</button>
            </div>
        );
    }
}
export default Login;