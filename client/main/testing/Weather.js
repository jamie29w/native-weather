import React from "react";
import axios from "axios";
// import DarkSkyApi from 'dark-sky-api';
// DarkSkyApi.apiKey = '68f41e08c2748e697411c2fae78bcf0c';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";

// import { WeatherWidget } from "react-native-weather";

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        axios.get("https://api.darksky.net/forecast/68f41e08c2748e697411c2fae78bcf0c/37.8267,-122.4233").then(response => {
            this.setState(response.data.currently)
            console.log(response.data.currently.summary)
        })
    }

    render() {
        console.log(this.state);
        return (
            <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
                {/* <WeatherWidget
                    api={"68f41e08c2748e697411c2fae78bcf0c"}
                    lat={"51.5033640"}
                    long={"-0.1276250"}
                /> */}
                <Text>{this.state.summary}</Text>
            </View>
        )
    }
}

export default Weather;
