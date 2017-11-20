import React from "react";
import axios from "axios";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";


class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            current: {},
            daily: {},
            hourly: {}
        }
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.getWeather(position.coords.latitude, position.coords.longitude);
        });
    }

    getWeather(lat, long) {
        axios.get(`https://api.darksky.net/forecast/68f41e08c2748e697411c2fae78bcf0c/${lat},${long}`).then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    current: response.data.currently,
                    daily: response.data.daily,
                    hourly: response.data.hourly
                }
            });
        });
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>{this.state.current.summary}</Text>
            </View>
        )
    }
}

export default Weather;
