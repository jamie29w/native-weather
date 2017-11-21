import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import clearDay from "../../assets/clear-day.png";
import clearNight from "../../assets/clear-night.png";
import cloud from "../../assets/cloud.png";
import cloudy from "../../assets/cloudy.png";
import fog from "../../assets/fog.png";
import hail from "../../assets/hail.png";
import partlyCloudyDay from "../../assets/partly-cloudy-day.png";
import partlyCloudyNight from "../../assets/partly-cloudy-night.png";
import rain from "../../assets/rain.png";
import sleet from "../../assets/sleet.png";
import snow from "../../assets/snow.png";
import thunderstorm from "../../assets/thunderstorm.png";
import tornado from "../../assets/tornado.png";
import wind from "../../assets/wind.png";

export default function WeatherComponent(props) {
    const styles = StyleSheet.create({
        container: {
            borderColor: "red",
            flex: 1,
            backgroundColor: "#AFAFAF",
            alignItems: "center",
            paddingTop: 50
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
            color: "#4C94F6",
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
    console.log(`PROPS.CURRENT.ICON IS: ${props.current.icon}`);
    let currIcon;

    switch (props.current.icon) {
        case "clear-day":
            currIcon = clearDay;
            break;
        case "clear-night":
            currIcon = clearNight;
            break;
        case "partly-cloudy-day":
            currIcon = partlyCloudyDay;
            break;
        case "partly-cloudy-night":
            currIcon = partlyCloudyNight;
            break;
        default:
            currIcon = cloud;
            break;
    }

    return (
        <View style={styles.container}>
            <Image source={currIcon} style={{ width: 250, height: 200 }} />
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
