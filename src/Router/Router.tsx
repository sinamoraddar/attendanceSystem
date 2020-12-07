import React, { useContext, useState, useCallback, useEffect } from "react";
//third party components
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Avatar,
} from "@material-ui/core";
import { BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
//components
import PublicRoute from "Router/PublicRoute";
import PrivateRoute from "Router/PrivateRoute";
import Header from "components/header/Header";
//pages
import AuthenticationPage from "pages/authenticationPage/AuthenticationPage";
import MainPage from "pages/mainPage/MainPage";
import ReportsPage from "pages/reportsPage/ReportsPage";
//utils
import {
  AuthContext,
  initialCurrentUserState,
} from "utils/contexts/AuthContext";
import { AuthenticationConstants, Routes } from "utils/types";
//styles
import styles from "App.module.scss";

//component
const Router = ({
  SubmitEntrance,
  SubmitExit,
  setCurrentUser,
  dialogMessage,
  setDialogMessage,
}: {
  SubmitEntrance: any;
  SubmitExit: any;
  setCurrentUser: any;
  dialogMessage: any;
  setDialogMessage: any;
}) => {
  //context
  const { isAuthenticated, currentUser, setIsAuthenticated } = useContext(
    AuthContext
  );
  //state
  const [
    isConfirmationDialogVisible,
    setIsConfirmationDialogVisible,
  ] = useState<boolean>(false);
  const [linkValue, setLinkValue] = useState(0);

  //callbacks
  const handleCancel = useCallback(() => {
    setIsConfirmationDialogVisible(false);
  }, []);
  const handleOk = useCallback(() => {
    setIsConfirmationDialogVisible(false);
    localStorage.removeItem(AuthenticationConstants.AuthenticatedUser);
    setCurrentUser(initialCurrentUserState);
    setIsAuthenticated(false);
  }, [setCurrentUser, setIsAuthenticated]);
  const onExit = useCallback(() => {
    setIsConfirmationDialogVisible(true);
  }, []);
  //life cycle hooks
  useEffect(() => {
    if (isAuthenticated) {
      setDialogMessage("شما با موفقیت وارد شدید");
    }
  }, [isAuthenticated, setDialogMessage]);
  useEffect(() => {
    //handle dialog visibility
    let timeout: NodeJS.Timeout;
    if (dialogMessage) {
      setTimeout(() => {
        setDialogMessage("");
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [dialogMessage, setDialogMessage]);
  return (
    <BrowserRouter>
      <Header {...{ onExit }} />
      {currentUser.name !== "" && (
        <div className={styles.avatar}>
          <div>
            <span>{currentUser.name}</span>
            <Avatar>{currentUser.name.slice(0, 1).toUpperCase()}</Avatar>
          </div>
        </div>
      )}
      <Switch>
        <PrivateRoute path={Routes.Home} exact>
          <MainPage {...{ SubmitEntrance, SubmitExit }} />
        </PrivateRoute>
        <PrivateRoute path={Routes.Reports} exact component={ReportsPage} />
        <PublicRoute
          path={Routes.Authentication}
          exact
          component={AuthenticationPage}
        />
        {/* If no match is found redirect to the home page */}
        <Redirect to={Routes.Home} />
      </Switch>
      {isAuthenticated && (
        <BottomNavigation
          value={linkValue}
          onChange={(event, newValue) => {
            setLinkValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            component={Link}
            to={Routes.Home}
            label="خانه"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="لیست گزارش ها"
            component={Link}
            to={Routes.Reports}
            icon={<ListAltIcon />}
          ></BottomNavigationAction>
        </BottomNavigation>
      )}

      <Dialog aria-labelledby="simple-dialog-title" open={dialogMessage !== ""}>
        <DialogTitle id="simple-dialog-title">{dialogMessage}</DialogTitle>
      </Dialog>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="md"
        aria-labelledby="confirmation-dialog-title"
        open={isConfirmationDialogVisible}
      >
        <DialogTitle id="confirmation-dialog-title">
          در صورت خروج تمام اطلاعات شما پاک خواهد شد . آیا مطمئن هستید؟
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={handleCancel} color="primary">
            خیر
          </Button>
          <Button onClick={handleOk} color="primary">
            بله
          </Button>
        </DialogActions>
      </Dialog>
    </BrowserRouter>
  );
};

export default Router;
