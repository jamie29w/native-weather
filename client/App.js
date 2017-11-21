import React from "react";
import LoginContainer from "./main/Login/Container";
import WeatherTodayContainer from "./main/WeatherToday/Container";
import WeatherForecastContainer from "./main/WeatherForecast/Container";

import { userReducer } from "./redux/user";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(userReducer, applyMiddleware(thunk));
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <WeatherForecastContainer />
            </Provider>
        );
    }
}
