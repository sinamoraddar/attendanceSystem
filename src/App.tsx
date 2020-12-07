import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import AuthenticationPage from "pages/authenticationPage/AuthenticationPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import MainPage from "pages/mainPage/MainPage";
import { AuthenticationConstants } from "components/forms/signUpForm/SignUpForm";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState({ name: "", phoneNumber: "" });
  const history = useHistory();
  useEffect(() => {
    let localUser = localStorage.getItem(
      AuthenticationConstants.AuthenticatedUser
    );
    if (localUser !== null) {
      setCurrentUser(JSON.parse(localUser));
    }
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);
  const OnExit = useCallback(() => {
    localStorage.removeItem(AuthenticationConstants.AuthenticatedUser);
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, setIsAuthenticated }}
    >
      <Router>
        <button onClick={OnExit}>خروج</button>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/authentication" exact component={AuthenticationPage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
