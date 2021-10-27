import React from "react";
import classes from "./NavBar.module.css";
function NavBar() {
  const LogoutHandler = () => {
    console.log("logout");
  };
  return (
    <div className={classes.navBar}>
      <h3>AuthTest</h3>
      <div>
        <button onClick={LogoutHandler} className={classes.logOutButton}>
          LogOut
        </button>
      </div>
    </div>
  );
}

export default NavBar;
