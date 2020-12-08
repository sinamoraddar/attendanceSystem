import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
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
import MainPage, { WorkTypes } from "pages/mainPage/MainPage";
import { AuthenticationConstants } from "components/forms/authForm/AuthForm";
export enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
export interface EntranceShape {
  workType: WorkTypes;
  workDescription: string;
}
interface UserShape {
  name: string;
  phoneNumber: string;
  hasEntered: boolean;
  lastActivityTime: Date | null;
  workType: WorkTypes | null;
  workDescription: string | null;
}
const initialCurrentUserState = {
  name: "",
  phoneNumber: "",
  hasEntered: false,
  lastActivityTime: null,
  workType: null,
  workDescription: null,
};
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserShape>(
    initialCurrentUserState
  );
  const SubmitEntrance = useCallback(
    ({ workType, workDescription }: EntranceShape) => {
      console.log(workType, workDescription);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        hasEntered: true,
        lastActivityTime: new Date(),
        workDescription,
        workType,
      }));
    },
    []
  );
  const SubmitExit = useCallback(() => {
    console.log("left");
    setCurrentUser((currentUser) => ({
      ...currentUser,
      hasEntered: false,
      lastActivityTime: new Date(),
      workType: null,
      workDescription: null,
    }));
  }, []);
  useEffect(() => {
    let localUser = localStorage.getItem(
      AuthenticationConstants.AuthenticatedUser
    );
    if (localUser !== null) {
      setCurrentUser(JSON.parse(localUser));
    }
  }, [isAuthenticated]);
  useEffect(() => {
    if (currentUser.name !== "") {
      localStorage.setItem(
        AuthenticationConstants.AuthenticatedUser,
        JSON.stringify(currentUser)
      );
    }
    if (currentUser.lastActivityTime !== null) {
      console.log(
        moment(currentUser.lastActivityTime).format("MMMM Do YYYY, h:mm:ss a"),
        WeekDays[new Date(currentUser.lastActivityTime).getDay()]
      );
    }
  }, [currentUser]);
  const OnExit = useCallback(() => {
    localStorage.removeItem(AuthenticationConstants.AuthenticatedUser);
    setCurrentUser(initialCurrentUserState);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, setIsAuthenticated }}
    >
      <Router>
        {currentUser.name !== "" ? (
          <button onClick={OnExit}> خروج از سیستم</button>
        ) : null}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <MainPage {...{ SubmitEntrance, SubmitExit }} />}
          />
          <Route path="/authentication" exact component={AuthenticationPage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
