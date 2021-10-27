import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwdInputHandler = (e) => {
    setPwd(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(pwd);
    console.log(email);
  };
  return (
    <div className={classes.LogIn}>
      <form onSubmit={submitHandler} className={classes.form}>
        <h3>SignUp</h3>
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
          <button className={classes.button} type="submit">
            {" "}
            SignUp
          </button>
        </div>
        <div className={classes.switching}>
          <p>Already have an account?</p>
          <Link className={classes.link} to="/LogIn">
            LogIn
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
