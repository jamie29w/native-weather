import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";
import WeatherForecastComponent from "./Component";
import DayComponent from "./DayComponent";

export default class WeatherForecastContainer extends Component {
    constructor() {
        super();
        this.state = {
            current: {
                temperature: "",
                icon: ""
            },
            weeklySummary: "",
            daily: {
                data: [
                    {
                        temperatureHigh: "",
                        temperatureLow: ""
                    }
                ]
            }
        };
        this.genDailyForecast = this.genDailyForecast.bind(this);
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            this.getWeather(
                position.coords.latitude,
                position.coords.longitude
            );
        });
    }

    genDailyForecast() {
        return this.state.daily.data.map((day, i) => {
            console.log(day);
            return <DayComponent key={day.time + i} day={day} i={i} />;
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
        console.log(this.state.daily.data);
        return (
            <WeatherForecastComponent
                current={this.state.current}
                daily={this.state.daily}
                genDailyForecast={this.genDailyForecast}
            />
        );
    }
}
