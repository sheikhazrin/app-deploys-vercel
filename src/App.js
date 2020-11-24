import React, { Suspense, lazy } from "react";
// import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

import theme from "./themes";
import LoginProvider from "./services/loginContext";

import AppRoute from "./routes/appRoute";

import AuthRoute from "./routes/AuthRoute";
import PublicRoute from "./routes/PublicRoute";

import Loading from "./components/Loading";

import { ThemeProvider } from "@material-ui/core/styles";
import { Paper, CssBaseline } from "@material-ui/core";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Pic = lazy(() => import("./pages/Pic"));
const UnknownPage = lazy(() => import("./pages/404"));

// import history from "./services/History";

// import "./App.css";
// import GlobalStyles from "./styles/";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <LoginProvider>
            <Switch>
              <PublicRoute exact path={AppRoute.HOME} component={Home} />
              <AuthRoute
                exact
                path={AppRoute.DASHBOARD}
                component={Dashboard}
              />
              <PublicRoute exact path={AppRoute.LOGIN} component={Login} />
              <AuthRoute exact path={AppRoute.PROFILE} component={Profile} />
              <PublicRoute exact path={AppRoute.HELP} component={Pic} />
              {/* <AuthRoute exact path={AppRoute.SETTINGS} component={Settings} />
            <AuthRoute exact path={AppRoute.EDITOR} component={Maker} /> */}
              <Route path="*" component={UnknownPage} />
            </Switch>
          </LoginProvider>
        </Paper>
      </ThemeProvider>
    </Suspense>
  );
}
export default App;
