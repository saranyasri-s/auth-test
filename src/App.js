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
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/LogIn"></Redirect>
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
          <Route path="*" >
            <p style={{ color: "red", textAlign: "center" }}> Page not found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
