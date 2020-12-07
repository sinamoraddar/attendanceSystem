import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";
import { RouteInterface } from "./PrivateRoute";
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
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};
export default PublicRoute;
