import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import {createBrowserHistory} from 'history';
import { Provider } from "react-redux";
import store from "./App/stateManagment/store/store";
import "semantic-ui-css/semantic.min.css";
import {  Router } from "react-router-dom";

export const history = createBrowserHistory();
ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Router history={history}>
        <App/>
      </Router>
    </Provider>
  </React.Fragment>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
