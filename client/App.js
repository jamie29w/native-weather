import React from "react";
import LoginContainer from "./main/Login/Container";
import Today from "./main/WeatherToday/Container";
import Forecast from "./main/WeatherForecast/Container";

// import { StackNavigator } from "react-navigation";

// REDUX \\
import { userReducer } from "./redux/user";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(userReducer, applyMiddleware(thunk));

// ROUTING \\
// const WeatherApp = StackNavigator({
//   Today: { screen: Today },
//   Forecast: { screen: Forecast }
// });
import { Router, Stack, Scene } from "react-native-router-flux";

const WeatherApp = () => (
  <Router>
    <Stack key="root">
        <Scene key="login" component={LoginContainer} title="Login" initial={true}/>
        <Scene key="today" component={Today} title="Today"/>
        <Scene key="forecast" component={Forecast} title="Extended Forecast"/>
    </Stack>
  </Router>
);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <WeatherApp/>
            </Provider>
        );
    }
}
