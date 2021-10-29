import React, { useContext } from "react";
import classes from "./App.module.css";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp";
import WelcomePage from "./components/WelcomePage";
import AuthContext from "./components/store/AuthContext";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className={classes.App}>
      <header>
        <div className={classes.background}></div>
        <NavBar></NavBar>
      </header>
      <main>
        <h1>Best todo list App to enhance your productivity</h1>

        <Switch>
          <Route path="/" exact>
            <p>Log in to add todo</p>
          </Route>
          <Route path="/LogIn">
            <LogIn></LogIn>
          </Route>
          <Route path="/SignUp">
            <SignUp></SignUp>
          </Route>

          {authCtx.isLoggedIn ? (
            <Route path="/welcome">
              <WelcomePage></WelcomePage>
            </Route>
          ) : null}
          <Route path="*">
            <p style={{ color: "red", textAlign: "center" }}> Page not found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
