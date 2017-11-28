import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

// WEATHER ICONS \\
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
/////////////////////////////////////////

export default function WeatherTodayComponent(props) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#AFAFAF",
            alignItems: "center",
            alignContent: "stretch",
            flexDirection: "column",
            justifyContent: "space-around"
        },
        icon: {
            height: 100,
            flex: 0.5
            // marginTop: 20,
            // marginBottom: 20
        },
        textSect: {
            flex: 1,
            flexDirection: "column"
        },
        headText: {
            color: "#7D418C",
            fontSize: 30,
            textAlign: "center",
            marginTop: 20
        },
        infoText: {
            color: "#FAFAFA",
            fontSize: 20,
            textAlign: "center",
            paddingLeft: 25,
            paddingRight: 25,
            marginTop: 10
        },
        tempText: {
            textAlign: "center",
            color: "#FAFAFA",
            fontSize: 30,
            marginTop: 10
        },
        degCol: {
            color: "#7D418C"
        },

        //new styles

        buttonSect: {
            marginTop: 25,
            flex: 1,
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            alignSelf: "center"
        },
        logOutButton: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#7D418C",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            alignSelf: "flex-end"
        },
        forecastButton: {
            height: 40,
            width: 150,
            padding: 10,
            backgroundColor: "#FAFAFA",
            borderColor: "#7D418C",
            borderWidth: 1,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5
        },

        purpleText: {
            textAlign: "center",
            color: "#7D418C"
        },
        whiteText: {
            textAlign: "center",
            color: "#FAFAFA"
        }
    });

    //provides icon path, based on daily.icon from Dark Sky
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

    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Image
                source={currIcon}
                resizeMode={"contain"}
                style={styles.icon}
            />

            {/* <View style={styles.textSect}>
                <Text style={styles.headText}>Right Meow:</Text>
                <Text style={styles.tempText}>
                    {Math.round(Number(props.current.temperature))}
                    <Text style={styles.degCol}>°</Text>
                </Text>
                <Text style={styles.infoText}>{props.current.summary}</Text>
            </View> */}

            <View style={styles.textSect}>
                {/* sect 1 */}
                <Text style={styles.headText}>Right Meow:</Text>
                <Text style={styles.tempText}>
                    {Math.round(Number(props.current.temperature))}
                    <Text style={styles.degCol}>°</Text>
                </Text>
                <Text style={styles.infoText}>{props.current.summary}</Text>
                {/* sect 2 */}
                <Text style={styles.headText}>Tell me more:</Text>
                <Text style={styles.tempText}>
                    Hi:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureHigh))}{" "}
                    <Text style={styles.degCol}>°</Text> Lo:{" "}
                    {Math.round(Number(props.daily.data[0].temperatureLow))}
                    <Text style={styles.degCol}>°</Text>
                </Text>
                <Text style={styles.infoText}>
                    {props.daily.data[0].summary}
                </Text>
                {/* buttons */}
                <View style={styles.buttonSect}>
                    <TouchableOpacity onPress={() => Actions.reset("login")}>
                        <View style={styles.logOutButton}>
                            <Text style={styles.whiteText}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.forecast()}>
                        <View style={styles.forecastButton}>
                            <Text style={styles.purpleText}>
                                Extended Forecast
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
