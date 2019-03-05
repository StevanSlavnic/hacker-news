import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import reducerItems from "./store/reducers/itemsReducer";

const rootReducer = combineReducers({
  items: reducerItems
});

// Customizing the default theme of material-ui
const theme = createMuiTheme({
  palette: {
    primary: { main: "#75c89f" },
    secondary: { main: "#83a8d4" },
    text: {
      primary: "#272727",
      secondary: "#a5a5a5",
      disabled: "#a5a5a5"
    }
  },
  typography: {
    useNextVariants: true,
    fontSize: 14,
    fontFamily: "Montserrat, sans-serif",
    button: {
      fontSize: "1rem",
      fontWeight: 700
    }
  },
  shape: {
    borderRadius: 0
  }
});

// redux devtools variable https://github.com/zalmoxisus/redux-devtools-extension#usage with fallback option to default compose
const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// storing application state.
// applying middlewares as second argument of createStore function to enable async actions dispatching. Thunk is the lib handling the async part of action creators
// wrapping applyMiddleware function inside composeEnchancers to make it compatible with redux devtools
const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(/* logger, */ thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
