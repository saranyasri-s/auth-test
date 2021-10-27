import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
function NavBar() {
  const LogoutHandler = () => {
    console.log("logout");
  };
  return (
    <div className={classes.navBar}>
      <h3>AuthTest</h3>
      <div>
        <Link
          to="/LogIn"
          onClick={LogoutHandler}
          className={classes.logOutButton}
        >
          LogOut
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
