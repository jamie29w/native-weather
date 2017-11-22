import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import Moment from "react-moment";

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
            width: 75,
            height: 50
        },
        daySect1: {
            flex: 2,
            backgroundColor: "#4C94F6",
            alignItems: "center",
            flexDirection: "row"
        },
        daySect2: {
            flex: 2,
            backgroundColor: "#AFAFAF",
            alignItems: "center",
            flexDirection: "row"
        },
        icon: {
            width: 75,
            height: 50
        }
    });

    //provides path, based on icon attribute from Dark Sky
    //defaults to cloud
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
    let forcastTime = new Date(Number(props.day.time) * 1000);
    const dayIndex = forcastTime.getDay();

    let dayOfWeek;
    switch (dayIndex) {
        case 0:
            dayOfWeek = "Sunday";
            break;
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
    }
    console.log("dayIndex is");
    console.log(dayIndex);
    return (
        <View style={viewStyles}>
            <Image source={currIcon} style={styles.icon} />
            <Text style={{ color: "rebeccapurple" }}>
                {dayOfWeek} Hi: {Math.round(Number(props.day.temperatureHigh))}°
                Lo: {Math.round(Number(props.day.temperatureLow))}°
            </Text>
        </View>
    );
}
//
