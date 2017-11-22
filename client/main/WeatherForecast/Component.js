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

export default function DayComponentRender(props) {
    const styles = StyleSheet.create({
        viewContainer: {
            flex: 1,
            backgroundColor: "white"
        },
        daySect: {
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            marginBottom: 10,
            backgroundColor: "white"
        },
        icon: {
            width: 75,
            height: 50
        }
    });

    let currIcon;

    switch (props.current.icon) {
        case "clear-day":
            currIcon = clearDay;
            break;
        case "clear-night":
            currIcon = clearNight;
            break;
        case "cloudy":
            currIcon = cloudy;
            break;
        case "fog":
            currIcon = fog;
            break;
        case "hail":
            currIcon = hail;
            break;
        case "partly-cloudy-day":
            currIcon = partlyCloudyDay;
            break;
        case "partly-cloudy-night":
            currIcon = partlyCloudyNight;
            break;
        case "rain":
            currIcon = rain;
            break;
        case "sleet":
            currIcon = sleet;
            break;
        case "snow":
            currIcon = snow;
            break;
        case "thunderstorm":
            currIcon = thunderstorm;
            break;
        case "tornado":
            currIcon = tornado;
            break;
        case "wind":
            currIcon = wind;
            break;
        default:
            currIcon = cloud;
            break;
    }

    return (
        <View style={styles.viewContainer}>
            {/* Padding for Status Bar */}
            <View style={{ height: 22 }} />
            {/* Weather Right Meow */}
            <View style={styles.daySect}>
                <Image source={currIcon} style={styles.icon} />
                <Text style={{ color: "rebeccapurple" }}>
                    Right Meow: {Math.round(Number(props.current.temperature))}°{" "}
                    {props.current.summary}
                </Text>
            </View>
            {/* Render 7 day forecast */}
            {props.genDailyForecast()}
        </View>
    );
}
