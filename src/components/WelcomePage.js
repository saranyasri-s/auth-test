import React from "react";
import classes from "./WelcomePage.module.css";
function WelcomePage() {
  return (
    <div className={classes.WelcomePage}>
      <h3>Authentication is successful</h3>
      <p>Add new Todo</p>
      <input type="text"></input>
    </div>
  );
}

export default WelcomePage;
