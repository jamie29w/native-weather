import React from "react";
import LoginContainer from "./main/Login/Container";
import WeatherViewContainer from "./main/WeatherView/Container";
import "./styling/index.css";

export default class App extends React.Component {
    render() {
        return <WeatherViewContainer />;
    }
}
