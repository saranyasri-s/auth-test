import React, { useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import classes from "./NavBar.module.css";
import AuthContext from "../components/store/AuthContext";
function NavBar() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const LogoutHandler = () => {
    authCtx.logOut();
    history.replace("/LogIn");
  };
  return (
    <div className={classes.navBar}>
      <h3>AuthTest</h3>
      <div>
        {authCtx.isLoggedIn ? (
          <Link
            to="/LogIn"
            onClick={LogoutHandler}
            className={classes.logOutButton}
          >
            LogOut
          </Link>
        ) : (
          <>
            {" "}
            <NavLink
              to="/LogIn"
              className={classes.button}
              activeClassName={classes.active}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/SignUp"
              className={classes.button}
              activeClassName={classes.active}
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
