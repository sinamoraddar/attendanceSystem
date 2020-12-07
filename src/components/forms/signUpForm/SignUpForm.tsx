import React, { useCallback, useContext, useState } from "react";
import { TextField } from "@material-ui/core";
import { AuthContext } from "contexts/AuthContext";
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
  const { currentUser } = useContext(AuthContext);
  //state
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //event handlers
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert(`${name} ${phoneNumber}`);
      localStorage.setItem(
        AuthenticationConstants.AuthenticatedUser,
        JSON.stringify({ name, phoneNumber })
      );
    },
    [name, phoneNumber]
  );
  const onInputChange = useCallback((label, e: any) => {
    console.log(e.target.value, label);
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
    <form onSubmit={onSubmit}>
      {type === AuthenticationConstants.SignUp ? (
        <>
          sign up
          <TextField
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
          Log in
          <TextField
            required
            id="standard-required"
            label={InputTypes.PhoneNumber}
            type="number"
            value={phoneNumber}
            onChange={onInputChange.bind(null, InputTypes.PhoneNumber)}
          />
        </>
      )}

      <button type="submit">ثبت نام</button>
    </form>
  );
};

export default SignUpForm;
