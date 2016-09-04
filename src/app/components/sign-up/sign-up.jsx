import React from 'react';
import { hashHistory } from 'react-router';
import Api from '../api/api';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    signIn() {
        hashHistory.push('/sign-in');
    }

    signUp() {
        Api.signUp(this.state.email, this.state.password)
            .then((data) => {
                hashHistory.push('/');
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
            <div className="auth-wrapper">
                <Paper className="auth-block">
                    <AppBar title="Sign-Up" showMenuIconButton={false}/>
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
                            <FlatButton label="Sign-In" onClick={() => this.signIn()}/>
                            <div className="auth-aligner" />
                            <FlatButton label="Sign-Up" primary={true} onClick={() => this.signUp()}/>
                        </div>
                    </div>
                </Paper>
            </div>
        );
    }
}