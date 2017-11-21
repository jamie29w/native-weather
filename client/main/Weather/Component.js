import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import icon from `{props.iconPath}`

let iconPath = "../../assets/cloud.svg";

export default function WeatherComponent(props) {
    const styles = StyleSheet.create({
        container: {
            borderColor: "red",
            flex: 1,
            backgroundColor: "#4C94F6",
            alignItems: "center",
            paddingTop: 50

            // justifyContent: "space-between"
        },
        icon: {
            width: 150,
            height: 150
        },
        sect2: {
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20
        },
        headText: {
            color: "yellow",
            fontSize: 25,
            textAlign: "center"
        },
        infoText: {
            color: "#FAFAFA",
            fontSize: 35,
            textAlign: "center"
        },
        summary: {
            borderColor: "red",
            textAlign: "center",
            color: "#FAFAFA"
        },
        tempText: {
            borderColor: "red",
            textAlign: "center",
            color: "#FAFAFA"
        }
    });

    console.log(iconPath);

    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/cloud.svg")} />
            <View style={styles.sect1}>
                <Text style={styles.headText}>Right Meow:</Text>
                <Text style={styles.infoText}>
                    {Math.round(Number(props.current.temperature))}°
                </Text>
                <Text style={styles.infoText}>{props.current.summary}</Text>
            </View>

            <View style={styles.sect2}>
                <Text style={styles.headText}>Tell me more:</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>
        </View>
    );
}
