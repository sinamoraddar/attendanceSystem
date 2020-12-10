import React, { useContext } from "react";
//third party components
import { Redirect } from "react-router-dom";
//components
import AuthForm from "components/authForm/AuthForm";
//styles
import styles from "./AuthenticationPage.module.scss";
//utils
import { AuthContext } from "utils/contexts/AuthContext";
import { AuthenticationConstants } from "utils/types";

const AuthenticationPage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <AuthForm
        type={
          currentUser.name === ""
            ? AuthenticationConstants.SignUp
            : AuthenticationConstants.LogIn
        }
      />
    </div>
  );
};

export default AuthenticationPage;
