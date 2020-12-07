import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthContext";

const MainPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <div>main page </div>
  ) : (
    <Redirect to="/authentication" />
  );
};

export default MainPage;
