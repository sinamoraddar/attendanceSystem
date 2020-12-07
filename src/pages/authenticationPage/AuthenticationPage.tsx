import React, { useContext } from "react";
import LoginForm from "components/forms/loginForm/LoginForm";
import SignUpForm, {
  AuthenticationConstants,
} from "components/forms/signUpForm/SignUpForm";
import { AuthContext } from "contexts/AuthContext";

const AuthenticationPage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
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
