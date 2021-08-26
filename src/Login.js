import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    sessionsave = () => {
        sessionStorage.setItem("username", "ratul")
    }
    render() {

        return (
            <div>
                <button onClick={this.sessionsave}>Login</button>
            </div>
        );
    }
}
export default Login;