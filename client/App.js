import React from "react";
import LoginContainer from "./main/Login/Container";
import WeatherContainer from "./main/Weather/Container";

export default class App extends React.Component {
    render() {
        return <WeatherContainer />;
    }
}
