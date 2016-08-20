import React from 'react';
import { Link } from 'react-router';
import Api from '../api/api';

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }
    signUp() {
        Api.signUp(this.state.email, this.state.password);
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div class="auth-container">
                <h2>Sign-up form</h2>
                <div class="field-block">
                    <input type="text"
                           value={this.state.email}
                           onChange={this.handleChangeEmail.bind(this)} />
                </div>
                <div class="field-block">
                    <input type="password"
                           value={this.state.password}
                           onChange={this.handleChangePassword.bind(this)} />
                </div>
                <div class="field-block">
                    <Link to="/sign-in">Sign-in</Link>
                    <button
                        onClick={this.signUp.bind(this)}>Sign-up</button>
                </div>
            </div>
        );
    }
}