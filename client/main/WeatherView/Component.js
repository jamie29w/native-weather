import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherViewComponent() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#4C94F6",
            alignItems: "center",
            justifyContent: "center"
        },
        blueText: {
            textAlign: "center",
            color: "#4C94F6"
        },
        whiteText: { textAlign: "center", color: "#FAFAFA" }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.whiteText}>hi from WeatherViewComponent</Text>
        </View>
    );
}
