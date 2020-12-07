import React, { useContext } from "react";
import LoginForm from "components/forms/loginForm/LoginForm";
import SignUpForm, {
  AuthenticationConstants,
} from "components/forms/signUpForm/SignUpForm";
import { AuthContext } from "contexts/AuthContext";
import { Redirect } from "react-router-dom";

const AuthenticationPage = () => {
  const { currentUser, isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div>
      {currentUser.name}
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
