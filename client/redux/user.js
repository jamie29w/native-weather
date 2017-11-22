import axios from "axios";
import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";

const authUrl = "http://localhost:7000/auth/";
const weatherUrl = "http://localhost:7000/weather";

const LOGON = "LOGON";
const HANDLE_AUTH_ERR = "HANDLE_AUTH_ERR";

//HELPER FUNCTIONS
const logon = (success, user) => {
    return {
        type: LOGON,
        success,
        user
    };
};

const handleAuthErr = (key, errCode) => {
    return {
        type: HANDLE_AUTH_ERR,
        key,
        errCode
    };
};

const setToken = async (token) => {
    try {
          await AsyncStorage.setItem('@MySuperStore:token', token);
        } catch (error) {
          console.log(error);
        }
}


//ACTIONS
export const signup = (creds) => {
    return dispatch => {
        axios.post(authUrl + "signup", creds)
            .then(response => {
                let { token, user, success } = response.data;
                setToken(token);
                dispatch(logon(success, user));
                Actions.today();
            })
            .catch(err => {
                dispatch(handleAuthErr("signup", err.response.status));
            });
    };
};

export const signin = (creds) => {
    return dispatch => {
        axios.post(authUrl + "login", creds)
            .then(response => {
                let { token, user, success } = response.data;
                setToken(token);
                dispatch(logon(success, user));
                Actions.today();
            })
            .catch(err => {
                dispatch(handleAuthErr("signin", err.response.status));
            });
    };
};

export const verify = (history, pathname) => {
    return disptach => {
        axios
            .get(authUrl + "verify")
            .then(response => {
                let { success, user } = response.data;
                dispatch(logon(success, user));
                history.push(pathname);
            })
            .catch(err => {
                console.error(err);
            });
    };
};

export const clearAuthErrs = () => {
    return {
        type: "CLEAR_AUTH_ERRS"
    }
}

export const userActions = {
    signin,
    signup,
    verify,
    clearAuthErrs
    //add other actions after creating
};

//REDUCERS
let defaultState = {
    location: {
        longitude: "",
        latitude: ""
    },
    user: {
        firstName: "",
        username: "",
        password: "",
        locations: []
    },
    authErr: {
        signup: "",
        signin: ""
    },
    isAuthenticated: false
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGON:
            return {
                ...state,
                authErr: {
                    signup: "",
                    signin: ""
                },
                user: action.user,
                isAuthenticated: action.success
            };
        case HANDLE_AUTH_ERR:
            console.log(state.authErr);
            return {
                ...state,
                authErr: {
                    ...state.authErr,
                    [action.key]: action.errCode
                }
            };

        case "CLEAR_AUTH_ERRS":
            return {
                ...state,
                authErr: {
                    signup: "",
                    signin: ""
                }
            }
        default:
            return {
                ...state
            };
    }
};
