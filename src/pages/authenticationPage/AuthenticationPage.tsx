import React, { useContext } from "react";
import SignUpForm, {
  AuthenticationConstants,
} from "components/forms/authForm/AuthForm";
import { AuthContext } from "contexts/AuthContext";
import { Redirect } from "react-router-dom";
//styles
import styles from "./AuthenticationPage.module.scss";
const AuthenticationPage = () => {
  const { currentUser, isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.container}>
      <SignUpForm
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
