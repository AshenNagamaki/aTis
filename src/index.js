import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { App } from "./App";
import { reducer } from "./store/reducer";

import "./index.scss";

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
