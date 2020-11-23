import React from "react";
import { Switch } from "react-router-dom";
import Route from "./RouteConf";

// import SignIn from "../pages/SignIn";
import Login from "../pages/Login";
import Landing from "../pages/Home";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route component={Login} />
    </Switch>
  );
}
