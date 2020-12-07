import React, { useCallback, useEffect, useState } from "react";
//third party components
import moment from "moment";
import { nanoid } from "nanoid";
//utils
import {
  AuthContext,
  initialCurrentUserState,
} from "utils/contexts/AuthContext";
import { UserShape, WorkTypes, AuthenticationConstants } from "utils/types";
//styles
import "./App.module.scss";
import Router from "Router/Router";

function App() {
  //state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserShape>(
    initialCurrentUserState
  );
  const [dialogMessage, setDialogMessage] = useState<string>("");

  //callbacks
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
  const submitEntrance = useCallback(
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
  const submitExit = useCallback(
    ({ workDescription }: { workDescription: string }) => {
      if (currentUser.activityLog.length > 0) {
        const now = moment();
        const lastTime = moment(
          currentUser.activityLog[currentUser.activityLog.length - 1]
            .entranceTime
        );
        //let the user exit if it's been more than 10 minutes since their last entrance
        if (now.diff(lastTime, "minute") > 10) {
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
          setDialogMessage(
            "خطا!برای ثبت خروج باید از آخرین ورود شما بیش از 10 دقیقه گذشته باشد"
          );
        }
      }
    },
    [currentUser]
  );
  //life cycle hooks
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
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        setIsAuthenticated,
        signUpTheUser,
      }}
    >
      <Router
        {...{
          SubmitEntrance: submitEntrance,
          SubmitExit: submitExit,
          setCurrentUser,
          dialogMessage,
          setDialogMessage,
        }}
      />
    </AuthContext.Provider>
  );
}

export default App;
