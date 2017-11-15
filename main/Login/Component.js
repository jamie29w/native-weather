import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

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
            marginBottom: 10
        }
    });

    return (
        <View style={styles.container}>
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
        </View>
    );
}
