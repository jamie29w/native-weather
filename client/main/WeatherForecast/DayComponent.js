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

export default function DayComponent(props) {
    const styles = StyleSheet.create({
        icon: {
            // width: 75,
            height: 60
        },
        daySect1: {
            flex: 1,
            // backgroundColor: "#4C94F6",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        daySect2: {
            flex: 1,
            // backgroundColor: "#AFAFAF",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        icon: {
            width: 40,
            height: 40,
            marginLeft: 15,
            marginRight: 15
        },
        tempText: {
            color: "rgba(125, 65, 140, 1)",
            fontSize: 20,
            marginLeft: 15,
            marginRight: 15
        },
        dayText: {
            color: "rgba(125, 65, 140, 1)",
            fontSize: 25,
            marginLeft: 15,
            marginRight: 15
        },
        degCol: {
            color: "rgba(125, 65, 140, 1)"
        }
    });

    //provides icon path, based on daily.icon from Dark Sky
    let currIcon;

    switch (props.day.icon) {
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

    //alternates backgroundColor
    let viewStyles = styles.daySect1;
    if (props.i % 2 === 0) {
        viewStyles = styles.daySect2;
    }

    //Populate day of week
    let forecastTime = new Date(Number(props.day.time) * 1000);
    const dayIndex = forecastTime.getDay();

    let dayOfWeek;
    switch (dayIndex) {
        case 0:
            dayOfWeek = "Sun";
            break;
        case 1:
            dayOfWeek = "Mon";
            break;
        case 2:
            dayOfWeek = "Tues";
            break;
        case 3:
            dayOfWeek = "Wed";
            break;
        case 4:
            dayOfWeek = "Thurs";
            break;
        case 5:
            dayOfWeek = "Fri";
            break;
        case 6:
            dayOfWeek = "Sat";
            break;
    }

    return (
        <View style={viewStyles}>
            <View
                style={{
                    borderTopColor: "red",
                    borderTopWidth: 2
                }}
            />
            <Text style={styles.dayText}>{dayOfWeek}</Text>
            <Text style={styles.tempText}>
                Hi: {Math.round(Number(props.day.temperatureHigh))}
                <Text style={styles.degCol}>°</Text> Lo:{" "}
                {Math.round(Number(props.day.temperatureLow))}
                <Text style={styles.degCol}>°</Text>
            </Text>
            <Image
                resizeMode={"contain"}
                source={currIcon}
                style={styles.icon}
            />
        </View>
    );
}
//
