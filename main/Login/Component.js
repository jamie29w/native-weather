import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";
// import { Button } from "react-native-elements";
// import Button from "react-native-button";

export default function LoginComponent(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
        },
        input: {
            height: 40,
            width: 300,
            borderColor: "gray",
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
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },
        signInButton: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#4C94F6",
            borderColor: "#4C94F6",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5
            // borderBottomRightRadius: 5,
            // borderTopRightRadius: 5
        },
        signUpButton: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#FAFAFA",
            borderColor: "#FAFAFA",
            // borderBottomLeftRadius: 5,
            // borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        }
    });

    return (
        <View style={styles.container}>
            <View
                style={{
                    display: "flex",
                    flexWrap: "no-wrap",
                    flexDirection: "row"
                }}>
                <TouchableOpacity>
                    <View style={styles.signInButton}>
                        <Text style={{ textAlign: "center", color: "#FAFAFA" }}>
                            Sign In
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.signUpButton}>
                        <Text style={{ textAlign: "center", color: "#4C94F6" }}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder="fist name"
                onChangeText={props.onChangefName}
                value={props.inputs.fName}
                name="username"
            />
            <TextInput
                style={styles.input}
                placeholder="username"
                onChangeText={props.onChangeUsername}
                value={props.inputs.username}
                name="username"
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                onChangeText={props.onChangePw}
                value={props.inputs.password}
                name="password"
            />
            {/* <Button style={styles.button}>SUBMIT</Button> */}
            {/* <Button title="SUBMIT" color="#4C94F6" /> */}
            <TouchableOpacity>
                <View style={styles.submitButton}>
                    <Text style={{ textAlign: "center", color: "#FAFAFA" }}>
                        Try this
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
