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
            hourly: {},
            iconPath: "../../assets/cloud.svg"
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

    getIcon() {
        switch (this.state.current.icon) {
            case "clear-day":
                return "clear-day";
            default:
                let iconPath = "../../assets/cloud.svg";
        }

        this.setState({
            ...prevState,
            iconPath
        });
    }

    componentDidMount() {
        this.getLocation();
        // this.getIcon();
    }

    render() {
        return (
            <WeatherComponent
                current={this.state.current}
                daily={this.state.daily}
                iconPath={this.state.iconPath}
            />
        );
    }
}
