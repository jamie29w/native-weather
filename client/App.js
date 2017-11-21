import React from "react";
import LoginContainer from "./main/Login/Container";
import WeatherViewContainer from "./main/WeatherView/Container";
// import "./styling/index.css";

import { userReducer } from "./redux/user";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(userReducer, applyMiddleware(thunk));
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}><LoginContainer /></Provider>
        );
    }
}
