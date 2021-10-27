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
    }
    const data = await response.json();
    console.log(data);
    const IdToken = data.idToken;
    console.log(IdToken);
    authCtx.logIn(data.idToken);
    history.replace("/Welcome");
    setPwd("");
    setEmail("");
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
