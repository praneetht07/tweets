import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoutes from "./routes/appRoutes";
// import store from './stores/configureStore';
import store from './stores/configureStore';

import "./styles/main.scss";

const connectedComponents = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(connectedComponents, document.getElementById("app"));
