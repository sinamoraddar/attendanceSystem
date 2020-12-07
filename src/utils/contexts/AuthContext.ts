import { createContext } from "react";
import { UserShape } from "utils/types";

export const initialCurrentUserState: UserShape = {
  name: "",
  phoneNumber: "",
  activityLog: [],
};

interface AuthInterface {
  isAuthenticated: boolean;
  currentUser: UserShape;
  setIsAuthenticated: any;
  signUpTheUser: ({
    name,
    phoneNumber,
  }: {
    name: string;
    phoneNumber: string;
  }) => void;
}

export const AuthContext = createContext<AuthInterface>({
  isAuthenticated: false,
  currentUser: initialCurrentUserState,
  setIsAuthenticated: () => {},
  signUpTheUser: () => {},
});
