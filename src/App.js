import classes from "./App.module.css";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./components/SignUp";
function App() {
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
