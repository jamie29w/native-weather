import React, { Component } from "react";
import axios from "axios";
import WeatherComponent from "./Component";

export default class WeatherContainer extends Component {
    constructor() {
        super();
        this.state = {
            current: {},
            daily: {
                data: [
                    {
                        temperatureHigh: "",
                        temperatureLow: ""
                    }
                ]
            },
            highTempToday: 0,
            lowTempToday: 0,
            hourly: {}
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
            });
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        return (
            <WeatherComponent
                current={this.state.current}
                daily={this.state.daily}
            />
        );
    }
}
