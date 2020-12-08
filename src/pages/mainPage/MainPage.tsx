import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthContext";

const MainPage = ({
  SubmitEntrance,
  SubmitExit,
}: {
  SubmitEntrance: () => void;
  SubmitExit: () => void;
}) => {
  const { isAuthenticated, currentUser } = useContext(AuthContext);

  return isAuthenticated ? (
    <div>
      {currentUser.hasEntered ? (
        <button onClick={SubmitExit}>ثبت خروج از شرکت</button>
      ) : (
        <button onClick={SubmitEntrance}>ثبت ورود به شرکت</button>
      )}
    </div>
  ) : (
    <Redirect to="/authentication" />
  );
};

export default MainPage;
