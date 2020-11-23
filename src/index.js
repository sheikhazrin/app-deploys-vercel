import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import * as serviceWorker from "./serviceWorker";
const element = (
  <Auth0Provider
    domain="careetor.us.auth0.com"
    clientId="xRnWO6IOXqUhZUvF1ptofy6dN660oler"
    redirectUri="{window.location.origin}"
  >
    <App />
  </Auth0Provider>
);
ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
