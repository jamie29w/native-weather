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
            position: {}
        }
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            const thisPosition = position;
            this.setState(prevState => {
                return {
                    ...prevState,
                    position: thisPosition

                }
            })
        });
        this.getWeather();
    }

    getWeather() {
        axios.get(`https://api.darksky.net/forecast/68f41e08c2748e697411c2fae78bcf0c/37.8267,-122.4233`).then(response => {
            this.setState(prevState => {
                console.log("in get")
                return {
                    ...prevState,
                    current: response.data.currently
                }
            });
        });
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        console.log(this.state.position);
        return (
            <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
                {/* <WeatherWidget
                    api={"68f41e08c2748e697411c2fae78bcf0c"}
                    lat={"51.5033640"}
                    long={"-0.1276250"}
                /> */}
                <Text>something</Text>
            </View>
        )
    }
}

export default Weather;
