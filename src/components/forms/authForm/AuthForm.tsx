import React, { useCallback, useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { AuthContext } from "contexts/AuthContext";
import { Redirect } from "react-router-dom";
//styles
import styles from "./AuthForm.module.scss";
//constants
enum InputTypes {
  Name = "Name",
  PhoneNumber = "Phone number",
}
export enum AuthenticationConstants {
  AuthenticatedUser = "AuthenticatedUser",
  SignUp = "SignUp",
  LogIn = "LogIn",
}
type FormTypes = AuthenticationConstants.SignUp | AuthenticationConstants.LogIn;
interface FormInterface {
  type: FormTypes;
}
const SignUpForm = ({ type }: FormInterface) => {
  //context
  const {
    currentUser,
    setIsAuthenticated,
    isAuthenticated,
    signUpTheUser,
  } = useContext(AuthContext);
  //state
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //event handlers
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (type === AuthenticationConstants.SignUp) {
        signUpTheUser({ name, phoneNumber });
      } else {
        if (phoneNumber === currentUser.phoneNumber) {
          setIsAuthenticated(true);
        } else {
          alert("Invalid credentials");
        }
      }
    },
    [name, phoneNumber, setIsAuthenticated, currentUser, type, signUpTheUser]
  );

  const onInputChange = useCallback((label, e: any) => {
    const { value } = e.target;
    switch (label) {
      case InputTypes.Name: {
        setName(value);
        break;
      }
      case InputTypes.PhoneNumber: {
        setPhoneNumber(value);
        break;
      }
      default: {
      }
    }
  }, []);

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        {type === AuthenticationConstants.SignUp ? (
          <>
            <h2>ثبت نام</h2>
            <TextField
              autoFocus
              required
              id="standard-required"
              label={"نام"}
              value={name}
              onChange={onInputChange.bind(null, InputTypes.Name)}
              type="text"
            />
            <TextField
              required
              id="standard-required"
              label={"شماره تلفن"}
              type="number"
              value={phoneNumber}
              onChange={onInputChange.bind(null, InputTypes.PhoneNumber)}
            />
          </>
        ) : (
          <>
            <h2>ورود</h2>
            <TextField
              required
              id="standard-required"
              label={"شماره تلفن"}
              type="number"
              value={phoneNumber}
              autoFocus
              onChange={onInputChange.bind(null, InputTypes.PhoneNumber)}
            />
          </>
        )}

        <Button type="submit" variant="contained" color="secondary">
          {type}
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
