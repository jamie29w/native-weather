import React from "react";
import { Component } from "react";
import WeatherViewComponent from "./Component";

export default class WeatherViewContainer extends Component {
    constructor() {
        super();
    }
    render() {
        return <WeatherViewComponent />;
    }
}
