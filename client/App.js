import React from "react";
import LoginContainer from "./main/Login/Container";
import Today from "./main/WeatherToday/Container";
import Forecast from "./main/WeatherForecast/Container";

import { StackNavigator } from "react-navigation";
import { userReducer } from "./redux/user";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(userReducer, applyMiddleware(thunk));

const WeatherApp = StackNavigator({
  Today: { screen: Today },
  Forecast: { screen: Forecast }
});

export default class App extends React.Component {
    render() {
    // console.log(this.props)
        return (
            <Provider store={store}>
                <WeatherApp/>
            </Provider>
        );
    }
}
