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
            backgroundColor: "#AFAFAF"
        },

        tempText: {
            fontSize: 55,
            color: "#7D418C",
            paddingLeft: 15
        },
        summaryText: {
            color: "#7D418C",
            textAlign: "center",
            fontSize: 25
        },
        icon: {
            width: 80,
            height: 80,
            marginRight: 15
        },
        daySect: {
            flex: 1.5,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            marginBottom: 10,
            backgroundColor: "white",
            justifyContent: "space-between",
            borderBottomColor: "#4C94F6",
            borderBottomWidth: 1,
            borderTopColor: "#4C94F6",
            borderTopWidth: 1
        },
        degCol: {
            color: "#7D418C"
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
            <View style={{ height: 22, backgroundColor: "#AFAFAF" }} />
            {/* Weather Right Meow */}
            <View style={styles.daySect}>
                <Text style={styles.tempText}>
                    {Math.round(Number(props.current.temperature))}
                    <Text style={styles.degCol}>°</Text>
                </Text>
                <Text style={styles.summaryText}>{props.current.summary}</Text>
                <Image source={currIcon} style={styles.icon} />
            </View>
            {/* Render 7 day forecast */}
            {props.genDailyForecast()}
        </View>
    );
}
