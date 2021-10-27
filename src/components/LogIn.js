import React, { useState, useContext } from "react";
import classes from "./LogIn.module.css";
import { Link } from "react-router-dom";
import AuthContext from "./store/AuthContext";
import { useHistory } from "react-router-dom";
function LogIn() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwd, setPwd] = useState("");
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwdInputHandler = (e) => {
    setPwd(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(pwd);
    console.log(email);

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError("* Enter valid email");
    }
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError("");
    }

    if (pwd.trim().length < 7) {
      setPwdError("* Enter password of more than 7 characters");
    }
    if (pwd.trim().length >= 7) {
      setPwdError("");
    }
    let isInputValid =
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      pwd.trim().length >= 7;
    if (isInputValid) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmrKm9DzSb4KKXMS1xYqNktzIudRi8g6c",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pwd,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        alert(
          "Authentication failed! Please enter correct email id and password"
        );
      } else {
        const data = await response.json();
        console.log(data);
        const IdToken = data.idToken;
        console.log(IdToken);
        authCtx.logIn(data.idToken);
        history.push("/Welcome");
      }
      setPwd("");
      setEmail("");
    }
  };
  return (
    <div className={classes.LogIn}>
      <form onSubmit={submitHandler} className={classes.form}>
        <h3>Login</h3>
        <div>
          <label htmlFor="#email">Email</label>
          <input
            id="#email"
            type="text"
            value={email}
            onChange={emailInputHandler}
          ></input>
          <p style={{ color: "red" }}>{emailError}</p>
        </div>
        <div>
          <label htmlFor="#pwd">Password</label>
          <input
            id="#pwd"
            type="text"
            value={pwd}
            onChange={pwdInputHandler}
          ></input>
          <p style={{ color: "red" }}>{pwdError}</p>
        </div>
        <div>
          <button type="submit" className={classes.button}>
            Login
          </button>
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
