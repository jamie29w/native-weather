import React from "react";
import { Component } from "react";
import LoginComponent from "./Component";
import { connect } from "react-redux";
import { verify, signin, signup, clearAuthErrs } from "../../redux/user";

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                firstName: "",
                username: "",
                password: ""
            },
            signInView: true
        };
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePw = this.onChangePw.bind(this);
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.signin = this.signin.bind(this);
        this.signup = this.signup.bind(this);
    }

    onChangefirstName(text) {
        this.setState(prevState => {
            return { inputs: { ...prevState.inputs, firstName: text } };
        });
    }

    onChangeUsername(text) {
        this.setState(prevState => {
            return { inputs: { ...prevState.inputs, username: text.toLowerCase() } };
        });
    }

    onChangePw(text) {
        this.setState(prevState => {
            return { inputs: { ...prevState.inputs, password: text } };
        });
    }

    toggleSignIn() {
        this.setState({
            inputs: {
                firstName: "",
                username: "",
                password: ""
            },
            signInView: true
        });
        this.props.clearAuthErrs();
    }
    toggleSignUp() {
        this.setState({
            inputs: {
                firstName: "",
                username: "",
                password: ""
            },
            signInView: false
        });
        this.props.clearAuthErrs();
    }

    signin(e) {
        this.props.signin(this.state.inputs)
    }

    signup(e) {
        this.props.signup(this.state.inputs)
    }

    render() {
        return (
            <LoginComponent
                onChangefirstName={this.onChangefirstName}
                onChangeUsername={this.onChangeUsername}
                onChangePw={this.onChangePw}
                inputs={this.state.inputs}
                signInView={this.state.signInView}
                toggleSignIn={this.toggleSignIn}
                toggleSignUp={this.toggleSignUp}
                signin={this.signin}
                signup={this.signup}
            />
        );
    }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {verify, signin, signup, clearAuthErrs})(LoginContainer);
