import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import clearDay from "../../assets/clear-day.png";
import clearNight from "../../assets/clear-night.png";
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
    console.log(`PROPS.ICONPATH IS: ${props.iconPath}`);
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/partly-cloudy-night.png")}
                //***The source above is a stand-in only.***
                //I tried source={props.iconPath} and found that the require
                //resolves before the prop is received. I've given it a static
                //string above so you can see how the app looks with the image.
                //I also tried the switch statement below, but again, the prop
                //isn't received, so it doesn't really matter. I think we need
                //a way to update and re-render the image. Ideas?

                // switch (props.iconPath) {
                //     case "clear-day":
                //         clearDay
                //         break;
                //     case "clear-night":
                //         clearNight;
                //         break;
                //     case "partly-cloudy-night":
                //         require("../../assets/partly-cloudy-night.png")
                //         break;
                //     default:
                //         cloud;
                //         break;
                //
                // }

                style={{ width: 250, height: 200 }}
            />
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
