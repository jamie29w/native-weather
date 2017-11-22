import React from "react";
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    FormInput
} from "react-native";

function LoginComponent(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#FAFAFA",
            alignItems: "center",
            justifyContent: "center"
        },
        input: {
            height: 40,
            width: 300,
            color: "#4C94F6",
            borderColor: "#4C94F6",
            borderWidth: 1,
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 5
        },
        submitButton: {
            height: 40,
            width: 300,
            padding: 10,
            backgroundColor: "#4C94F6",
            borderColor: "#4C94F6",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        signInButtonBlue: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#4C94F6",
            borderColor: "#4C94F6",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5
        },
        signInButtonWhite: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#FAFAFA",
            borderColor: "#4C94F6",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5
        },
        signUpButtonWhite: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#FAFAFA",
            borderColor: "#4C94F6",
            borderWidth: 1,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        signUpButtonBlue: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#4C94F6",
            borderColor: "#4C94F6",
            borderWidth: 1,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        blueText: {
            textAlign: "center",
            color: "#4C94F6"
        },
        whiteText: {
            textAlign: "center",
            color: "#FAFAFA"
        },
        poweredByText: {
            textAlign: "center",
            color: "#7D418C",
            bottom: -80
        }
    });

    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    flexDirection: "row"
                }}>
                <TouchableOpacity onPress={props.toggleSignIn}>
                    <View
                        style={
                            props.signInView
                                ? styles.signInButtonBlue
                                : styles.signInButtonWhite
                        }>
                        <Text
                            style={
                                props.signInView
                                    ? styles.whiteText
                                    : styles.blueText
                            }>
                            Sign In
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.toggleSignUp}>
                    <View
                        style={
                            props.signInView
                                ? styles.signUpButtonWhite
                                : styles.signUpButtonBlue
                        }>
                        <Text
                            style={
                                props.signInView
                                    ? styles.blueText
                                    : styles.whiteText
                            }>
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TextInput
                style={props.signInView ? { display: "none" } : styles.input}
                placeholder="first name"
                onChangeText={props.onChangefirstName}
                value={props.inputs.firstName}
                name="username"
            />
            <TextInput
                style={styles.input}
                placeholder="username"
                onChangeText={props.onChangeUsername}
                value={props.inputs.username}
                name="username"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                onChangeText={props.onChangePw}
                value={props.inputs.password}
                name="password"
                autoCapitalize="none"
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={props.signInView ? props.signin : props.signup}>
                <View style={styles.submitButton}>
                    <Text style={{ textAlign: "center", color: "#FAFAFA" }}>
                        Submit
                    </Text>
                </View>
            </TouchableOpacity>
            <Text
                style={styles.poweredByText}
                href="https://darksky.net/poweredby/">
                Powered by Dark Sky
            </Text>
            <Text>
                {props.authErr.signup === 500 ? "Sorry, this username already exists!" : ""}
                {props.authErr.signin === 401 ? "Sorry, that username or password is incorrect" : ""}
            </Text>
        </View>
    );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(LoginComponent);
