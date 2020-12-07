import { AuthContext } from "utils/contexts/AuthContext";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Routes } from "utils/types";

export interface RouteInterface {
  children?: any;
  component?: any;
  path: any;
  exact?: boolean;
  render?: any;
}
const PrivateRoute = ({
  children,
  component: Component,
  ...rest
}: RouteInterface) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          children || <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: Routes.Authentication,
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
