import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "utils/contexts/AuthContext";
import { RouteInterface } from "./PrivateRoute";
import { Routes } from "utils/types";
const PublicRoute = ({
  children,
  component: Component,
  path,
  ...rest
}: RouteInterface) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        !isAuthenticated ? (
          children || <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: Routes.Home,
            }}
          />
        )
      }
    />
  );
};
export default PublicRoute;
