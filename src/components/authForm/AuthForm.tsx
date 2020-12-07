import React, { useCallback, useContext, useState } from "react";
//third party components
import { Button, TextField } from "@material-ui/core";
import { Redirect } from "react-router-dom";
//contexts
import { AuthContext } from "utils/contexts/AuthContext";
import {
  AuthenticationConstants,
  FormInterface,
  InputTypes,
} from "utils/types";
//styles
import styles from "./AuthForm.module.scss";

//component
const AuthForm = ({ type }: FormInterface) => {
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
          alert("اطلاعات نا معتبر است");
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

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        {type === AuthenticationConstants.SignUp ? (
          <>
            <h2>ثبت نام</h2>
            <TextField
              autoFocus
              required
              id="standard-required"
              label={InputTypes.Name}
              value={name}
              onChange={onInputChange.bind(null, InputTypes.Name)}
              type="text"
            />
            <TextField
              required
              id="standard-required"
              label={InputTypes.PhoneNumber}
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
              label={InputTypes.PhoneNumber}
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

export default AuthForm;
