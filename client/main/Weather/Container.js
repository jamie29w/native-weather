import React, { Component } from "react";
import axios from "axios";
import WeatherComponent from "./Component";

export default class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            current: {
                temperature: "",
                icon: ""
            },
            daily: {
                data: [
                    {
                        temperatureHigh: "",
                        temperatureLow: ""
                    }
                ]
            },
            hourly: {}
            // icon: "cloud",
            // iconPath: "../../assets/cloud.png"
        };
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.getWeather(
                position.coords.latitude,
                position.coords.longitude
            );
        });
    }

    getWeather(lat, long) {
        axios
            .get(
                `https://api.darksky.net/forecast/68f41e08c2748e697411c2fae78bcf0c/${
                    lat
                },${long}`
            )
            .then(response => {
                this.setState(prevState => {
                    console.log(response.data.daily);
                    return {
                        ...prevState,
                        current: response.data.currently,
                        hourly: response.data.hourly,
                        daily: response.data.daily
                    };
                });
                // this.setIconString();
            });
    }

    //helper function for setIconString - glyphicons are named per the possible
    //icon strings Darks Sky provides
    // setIcon(prevState) {
    //     return "../../assets/" + prevState.current.icon + ".png";
    // }

    //updates this.state.iconPath to a string of the path for the correct glyphicon
    //gets called after response is received
    // setIconString() {
    //     this.setState(prevState => {
    //         return {
    //             ...prevState,
    //             iconPath: this.setIcon(prevState)
    //         };
    //     });
    // }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        console.log(this.state.current.icon);
        console.log(this.state.iconPath);
        return (
            <WeatherComponent
                current={this.state.current}
                daily={this.state.daily}
                // iconPath={this.state.iconPath}
                // icon={this.state.icon}
            />
        );
    }
}
