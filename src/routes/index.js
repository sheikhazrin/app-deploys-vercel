import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";

// import Route from "./RouteWrapper";
// import SignIn from "../pages/SignIn";

import Loading from "../components/Loading";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import Login from "../pages/Login";
import HomePage from "../pages/Home";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const DefaultRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <NavBar />
        <Component {...props} />
        <Footer />
      </>
    )}
  />
);

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <SideBar />
        <Component {...props} />
        <Footer />
      </>
    )}
  />
);

export default function Routes() {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <DefaultRoute path="/" component={HomePage} />
        <AuthRoute path="/dashboard" component={HomePage} />
      </Switch>
    </>
  );
}

// export default function Routes() {
//   return (
// <Switch></
//
//     // <Switch>
//     //   <Route path="/" exact component={Landing} />
//     //   <Route path="/login" component={Login} />

//     //   <Route path="/dashboard" component={Dashboard} isPrivate />
//     //   <Route path="/profile" component={Profile} isPrivate />

//     //   <Route component={Login} />
//     // </Switch>
//   );
// }
