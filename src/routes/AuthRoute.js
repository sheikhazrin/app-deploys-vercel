import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { loginContext } from "../services/loginContext";
import appRoute from "./appRoute";

const AuthRoute = ({ path, component: Component, render, ...rest }) => {
  const { checkAuth } = useContext(loginContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!checkAuth())
          return (
            <Redirect
              to={{
                pathname: appRoute.LOGIN,
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};
export default AuthRoute;
