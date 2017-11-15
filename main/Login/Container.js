import React from "react";
import { Component } from "react";
import LoginComponent from "./Component";

export default class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePw = this.onChangePw.bind(this);
    }

    onChangeUsername(text) {
        this.setState({ inputs: { username: text } });
    }

    onChangePw(text) {
        this.setState({ inputs: { password: text } });
    }

    render() {
        return (
            <LoginComponent
                onChangeUsername={this.onChangeUsername}
                onChangePw={this.onChangePw}
                inputs={this.state.inputs}
            />
        );
    }
}
