import { createContext } from "react";
interface AuthInterface {
  isAuthenticated: boolean;
  currentUser: { name: any; phoneNumber: any; hasEntered: boolean };
  setIsAuthenticated: any;
}

export const AuthContext = createContext<AuthInterface>({
  isAuthenticated: false,
  currentUser: { name: "", phoneNumber: "", hasEntered: false },
  setIsAuthenticated: () => {},
});
