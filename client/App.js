import React from "react";
import LoginContainer from "./main/Login/Container";
import Today from "./main/WeatherToday/Container";
import Forecast from "./main/WeatherForecast/Container";

// REDUX \\
import { userReducer } from "./redux/user";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
const store = createStore(userReducer, applyMiddleware(thunk));
store.subscribe(()=>{
    console.log(store.getState());
})

// ROUTING \\
import { Router, Stack, Scene } from "react-native-router-flux";
const WeatherApp = () => (
  <Router>
    <Stack key="root">
        <Scene key="login" component={LoginContainer} title="Login" initial={true} back={false}/>
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
