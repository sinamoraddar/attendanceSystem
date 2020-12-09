import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { nanoid } from "nanoid";
import AuthenticationPage from "pages/authenticationPage/AuthenticationPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import MainPage, { WorkTypes } from "pages/mainPage/MainPage";
import { AuthenticationConstants } from "components/forms/authForm/AuthForm";
import { initialCurrentUserState } from "contexts/AuthContext";
import DetailsPage from "pages/detailsPage/DetailsPage";

//styles
import styles from "./App.module.scss";
import { Avatar, Button } from "@material-ui/core";
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
export interface UserShape {
  name: string;
  phoneNumber: string;

  activityLog: {
    id: string;
    hasEntered: boolean;
    hasExited: boolean;
    entranceTime: Date | null;
    exitTime: Date | null;
    workType: WorkTypes | null;
    workDescription: string;
  }[];
}
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserShape>(
    initialCurrentUserState
  );
  const signUpTheUser = useCallback(
    ({ name, phoneNumber }: { name: string; phoneNumber: string }) => {
      setCurrentUser((currentUser) => ({
        ...currentUser,
        name,
        phoneNumber,
      }));
      setIsAuthenticated(true);
    },
    []
  );
  const SubmitEntrance = useCallback(
    ({ workType }: { workType: WorkTypes }) => {
      setCurrentUser((currentUser) => ({
        ...currentUser,
        activityLog: [
          ...currentUser.activityLog,
          {
            id: nanoid(),
            hasEntered: true,
            hasExited: false,
            entranceTime: new Date(),
            exitTime: null,
            workType,
            workDescription: "",
          },
        ],
      }));
    },
    []
  );
  const SubmitExit = useCallback(
    ({ workDescription }: { workDescription: string }) => {
      if (currentUser.activityLog.length > 0) {
        console.log("left");
        const now = moment();
        const lastTime = moment(
          currentUser.activityLog[currentUser.activityLog.length - 1]
            .entranceTime
        );
        if (!(now.diff(lastTime, "minute") > 10)) {
          setCurrentUser((currentUser) => {
            const newActivityLog = currentUser.activityLog.map(
              (activity, index, array) => {
                return index === array.length - 1
                  ? {
                      ...activity,
                      hasExited: true,
                      exitTime: new Date(),
                      workDescription,
                    }
                  : activity;
              }
            );
            return {
              ...currentUser,
              activityLog: newActivityLog,
            };
          });
        } else {
          alert(
            "خطا!برای ثبت خروج باید از آخرین ورود شما بیش از 10 دقیقه گذشته باشد"
          );
        }
      }
    },
    [currentUser]
  );
  //get the current user from local storage on the initial render
  useEffect(() => {
    let localUser = localStorage.getItem(
      AuthenticationConstants.AuthenticatedUser
    );
    if (localUser !== null) {
      setCurrentUser(JSON.parse(localUser));
    }
  }, []);
  useEffect(() => {
    if (currentUser.name !== "") {
      localStorage.setItem(
        AuthenticationConstants.AuthenticatedUser,
        JSON.stringify(currentUser)
      );
    }
    if (currentUser.activityLog.length > 0) {
      const lastActivityTime =
        currentUser.activityLog[currentUser.activityLog.length - 1]
          .entranceTime;
      if (lastActivityTime !== null) {
        console.log(
          moment(lastActivityTime).format("MMMM Do YYYY, h:mm:ss a"),
          WeekDays[new Date(lastActivityTime).getDay()]
        );
      }
    }
  }, [currentUser]);
  const OnExit = useCallback(() => {
    const confirmed = window.confirm(
      "در صورت خروج تمام اطلاعات شما پاک خواهد شد . آیا مطمئن هستید؟"
    );
    if (confirmed) {
      localStorage.removeItem(AuthenticationConstants.AuthenticatedUser);
      setCurrentUser(initialCurrentUserState);
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        setIsAuthenticated,
        signUpTheUser,
      }}
    >
      <Router>
        <header className={styles.header}>
          <h1>سامانه حضور و غیاب</h1>

          {currentUser.name !== "" ? (
            <>
              <Button
                color="secondary"
                variant="contained"
                className={styles.button}
                onClick={OnExit}
              >
                خروج از سیستم
              </Button>
            </>
          ) : null}
        </header>
        {currentUser.name !== "" && (
          <div className={styles.avatar}>
            <div>
              <span>{currentUser.name}</span>
              <Avatar>{currentUser.name.slice(0, 1).toUpperCase()}</Avatar>
            </div>
          </div>
        )}
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <MainPage {...{ SubmitEntrance, SubmitExit }} />}
          />
          <Route path="/details" exact component={DetailsPage} />
          <Route path="/authentication" exact component={AuthenticationPage} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
