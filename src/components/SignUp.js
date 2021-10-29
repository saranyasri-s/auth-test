import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import AuthContext from "./store/AuthContext";
import { useHistory } from "react-router-dom";
function SignUp() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmrKm9DzSb4KKXMS1xYqNktzIudRi8g6c",
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
        alert("something went wrong");
      } else {
        const data = await response.json();
        alert("Sign up successful ,Log in using your credentials");
        history.replace("/SignIn");
      }
      setPwd("");
      setEmail("");
    }
  };
  const backdropClickHandler = () => {
    history.replace("/");
  };
  return (
    <>
      <div className={classes.backdrop} onClick={backdropClickHandler}></div>
      <div className={classes.LogIn}>
        <form onSubmit={submitHandler} className={classes.form}>
          <h3>Sign Up</h3>
          <div>
            <label htmlFor="#email">Email</label>
            <input
              id="#email"
              type="text"
              value={email}
              onChange={emailInputHandler}
            ></input>
            <p
              style={{
                color: "red",
                margin: "0.1rem 0 1rem 0",
                textAlign: "left",
              }}
            >
              {emailError}
            </p>
          </div>
          <div>
            <label htmlFor="#pwd">Password</label>
            <input
              id="#pwd"
              type="password"
              value={pwd}
              onChange={pwdInputHandler}
            ></input>
            <p
              style={{
                color: "red",
                margin: "0.1rem 0 1rem 0",
                textAlign: "left",
              }}
            >
              {pwdError}
            </p>
          </div>
          <div>
            <button className={classes.button} type="submit">
              Sign Up
            </button>
          </div>
          <section className={classes.switching}>
            <span>Already have an account?</span>
            <Link className={classes.link} to="/SignIn">
              LogIn
            </Link>
          </section>
        </form>
      </div>
    </>
  );
}

export default SignUp;
