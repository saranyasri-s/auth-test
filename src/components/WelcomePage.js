import React from "react";
import classes from "./WelcomePage.module.css";
function WelcomePage() {
  return (
    <div className={classes.WelcomePage}>
      <h3>Authentication is successful</h3>
      <p> Welcome to ABC</p>
    </div>
  );
}

export default WelcomePage;
