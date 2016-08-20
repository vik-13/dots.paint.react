import React from 'react';
import { Link, hashHistory } from 'react-router';
import Api from '../api/api';

export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    signIn() {
        Api.signIn(this.state.email, this.state.password)
            .then((data) => {
                hashHistory.push('/dashboard');
            })
            .catch((error) => {
                console.log('error');
            });
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
                <h2>Sign-in form</h2>
                <div class="field-block">
                    <input type="text"
                           value={this.state.email}
                           onChange={this.handleChangeEmail.bind(this)} />
                </div>
                <div class="field-block">
                    <input type="password"
                           value={this.state.password}
                           onChange={this.handleChangePassword.bind(this)}/>
                </div>
                <div class="field-block">
                    <Link to="/sign-up">Sign-up</Link>
                    <button
                        onClick={this.signIn.bind(this)}>Sign-in</button>
                </div>
            </div>
        );
    }
}