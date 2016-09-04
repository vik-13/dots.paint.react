import React from 'react';
import { hashHistory } from 'react-router';
import Api from '../api/api';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

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
                hashHistory.push('/');
            })
            .catch((error) => {
                console.log('error');
            });
    }

    signUp() {
        hashHistory.push('/sign-up');
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="auth-wrapper">
                <Paper className="auth-block">
                    <AppBar title="Sign-in" showMenuIconButton={false}/>
                    <div className="auth-content">
                        <TextField
                            value={this.state.email}
                            onChange={(event) => this.handleChangeEmail(event)}
                            floatingLabelText="Email"
                        /><br />
                        <TextField
                            type="password"
                            value={this.state.password}
                            onChange={(event) => this.handleChangePassword(event)}
                            floatingLabelText="Password"
                        /><br />
                        <div className="auth-bottom">
                            <FlatButton label="Sign-Up" onClick={() => this.signUp()}/>
                            <div class="auth-aligner" />
                            <FlatButton label="Sign-In" primary={true} onClick={() => this.signIn()}/>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}