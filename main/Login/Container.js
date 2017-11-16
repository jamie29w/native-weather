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
            }
        };
        this.onChangefName = this.onChangefName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePw = this.onChangePw.bind(this);
    }

    onChangefName(text) {
        this.setState({ inputs: { username: text } });
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
                onChangefName={this.onChangefName}
                onChangeUsername={this.onChangeUsername}
                onChangePw={this.onChangePw}
                inputs={this.state.inputs}
            />
        );
    }
}
