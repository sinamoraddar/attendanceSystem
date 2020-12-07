import { createContext } from "react";
interface AuthInterface {
  isAuthenticated: boolean;
  currentUser: { name: any; phoneNumber: any };
  setIsAuthenticated: any;
}

export const AuthContext = createContext<AuthInterface>({
  isAuthenticated: false,
  currentUser: { name: "", phoneNumber: "" },
  setIsAuthenticated: () => {},
});
