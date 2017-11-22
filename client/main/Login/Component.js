import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    FormInput,
    Linking
} from "react-native";

export default function LoginComponent(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#AFAFAF",
            alignItems: "center",
            justifyContent: "center"
        },
        input: {
            height: 40,
            width: 300,
            color: "#7D418C",
            borderColor: "#7D418C",
            backgroundColor: "#FAFAFA",
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
            backgroundColor: "#7D418C",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        signInButtonPurple: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#7D418C",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5
        },
        signInButtonWhite: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#FAFAFA",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5
        },
        signUpButtonWhite: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#FAFAFA",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        signUpButtonPurple: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#7D418C",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        PurpleText: {
            textAlign: "center",
            color: "#7D418C"
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
                                ? styles.signInButtonPurple
                                : styles.signInButtonWhite
                        }>
                        <Text
                            style={
                                props.signInView
                                    ? styles.whiteText
                                    : styles.PurpleText
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
                                : styles.signUpButtonPurple
                        }>
                        <Text
                            style={
                                props.signInView
                                    ? styles.PurpleText
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
            <Button
                title="Powered by Dark Sky"
                color="#7D418C"
                onPress={() =>
                    Linking.openURL("https://darksky.net/poweredby/")
                }
            />
        </View>
    );
}
