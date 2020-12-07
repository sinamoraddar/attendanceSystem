import { TextField } from "@material-ui/core";
import React from "react";

const LoginForm = () => {
  return (
    <form>
      {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      {/* </form> */}
    </form>
  );
};

export default LoginForm;
