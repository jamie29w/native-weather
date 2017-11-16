import React from "react";
import { Component } from "react";
import LoginComponent from "./Component";

export default class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                fName: "",
                username: "",
                password: ""
            },
            signInView: true
        };
        this.onChangefName = this.onChangefName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePw = this.onChangePw.bind(this);
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);
    }

    onChangefName(text) {
        this.setState(prevState => {
            return { inputs: { ...prevState.inputs, fName: text } };
        });
    }

    onChangeUsername(text) {
        this.setState(prevState => {
            return { inputs: { ...prevState.inputs, username: text } };
        });
    }

    onChangePw(text) {
        this.setState(prevState => {
            return { inputs: { ...prevState.inputs, password: text } };
        });
    }

    toggleSignIn() {
        this.setState({ signInView: true });
    }
    toggleSignUp() {
        this.setState({ signInView: false });
    }

    render() {
        return (
            <LoginComponent
                onChangefName={this.onChangefName}
                onChangeUsername={this.onChangeUsername}
                onChangePw={this.onChangePw}
                inputs={this.state.inputs}
                signInView={this.state.signInView}
                toggleSignIn={this.toggleSignIn}
                toggleSignUp={this.toggleSignUp}
            />
        );
    }
}
