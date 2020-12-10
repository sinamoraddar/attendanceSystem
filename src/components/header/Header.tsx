import React, { useContext } from "react";
//third party components
import { Button } from "@material-ui/core";
//utils
import { AuthContext } from "utils/contexts/AuthContext";
//styles
import styles from "./Header.module.scss";
const Header = ({ onExit }: { onExit: () => any }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <h1>سامانه حضور و غیاب</h1>

      {currentUser.name !== "" ? (
        <>
          <Button
            color="secondary"
            variant="contained"
            className={styles.button}
            onClick={onExit}
          >
            خروج از سیستم
          </Button>
        </>
      ) : null}
    </header>
  );
};

export default Header;
