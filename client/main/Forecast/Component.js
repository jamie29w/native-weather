import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function WeatherComponent(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#4C94F6",
            alignItems: "center",
            justifyContent: "center"
        },
        summary: {
            textAlign: "center",
            color: "#FAFAFA"
        },
        tempText: {
            textAlign: "center",
            color: "#FAFAFA"
        }
    });

    return (
        <View style={styles.container}>
            <View>
                <Text>Current Temp: {props.current.temperature}</Text>
                <Text style={styles.tempText}>The Gist:</Text>
                <Text style={styles.summary}>{props.current.summary}</Text>
            </View>
            <Text style={styles.tempText}>
                High: {props.daily.data[0].temperatureHigh}
            </Text>
            <Text style={styles.tempText}>Low: {props.lowTempToday}</Text>
        </View>
    );
}
