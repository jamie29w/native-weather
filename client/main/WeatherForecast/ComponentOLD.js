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

export default function WeatherForecastComponent(props) {
    const styles = StyleSheet.create({
        viewContainer: {
            flex: 1,
            backgroundColor: "#4C94F6"
        },
        header: {
            flex: 2,
            backgroundColor: "yellow",
            flexDirection: "row",
            alignItems: "center"
        },
        icon: {
            width: 75,
            height: 50
        },
        daySect1: {
            flex: 2,
            backgroundColor: "#AFAFAF",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        },
        daySect2: {
            flex: 2,
            backgroundColor: "#4C94F6",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        },
        headText: {
            color: "#FAFAFA",
            fontSize: 20,
            textAlign: "center"
        },
        infoText: {
            color: "#FAFAFA",
            fontSize: 15,
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
            {/* Right Meow */}
            <View style={{ height: 22 }} />
            <View style={styles.header}>
                <Image source={currIcon} style={styles.icon} />
                <Text style={(styles.headText, { color: "rebeccapurple" })}>
                    Right Meow: {Math.round(Number(props.current.temperature))}°{" "}
                    {props.current.summary}
                </Text>
            </View>

            <View style={styles.daySect1}>
                <Text style={styles.headText}>Monday</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>

            <View style={styles.daySect2}>
                <Text style={styles.headText}>Tuesday</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>

            <View style={styles.daySect1}>
                <Text style={styles.headText}>Wednesday</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>

            <View style={styles.daySect2}>
                <Text style={styles.headText}>Thursday</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>

            <View style={styles.daySect1}>
                <Text style={styles.headText}>Friday</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>

            <View style={styles.daySect2}>
                <Text style={styles.headText}>Saturday</Text>

                <Text style={styles.infoText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}°
                    Lo: {Math.round(Number(props.daily.data[0].temperatureLow))}°
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
            </View>

            <View style={styles.daySect1}>
                <Text style={styles.headText}>Sunday</Text>

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
