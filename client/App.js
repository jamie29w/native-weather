import React from "react";
import LoginContainer from "./main/Login/Container";
import WeatherContainer from "./main/Forecast/Container";

export default class App extends React.Component {
    render() {
        return <WeatherContainer />;
    }
}
