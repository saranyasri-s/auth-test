import React, { useState } from "react";
import classes from "./LogIn.module.css";
import { Link } from "react-router-dom";
function LogIn() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwdInputHandler = (e) => {
    setPwd(e.target.value);
  };
  return (
    <div className={classes.LogIn}>
      <form className={classes.form}>
        <h3>Login</h3>
        <div>
          <label htmlFor="#email">Email</label>
          <input
            id="#email"
            type="text"
            value={email}
            onChange={emailInputHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="#pwd">Password</label>
          <input
            id="#pwd"
            type="text"
            value={pwd}
            onChange={pwdInputHandler}
          ></input>
        </div>
        <div>
          <button className={classes.button}>Login</button>
        </div>
        <div className={classes.switching}>
          <p>New User?</p>
          <Link className={classes.link} to="/SignUp">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
