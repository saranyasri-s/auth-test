import classes from "./App.module.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={classes.App}>
      <header>
        <NavBar></NavBar>
      </header>
      <main></main>
    </div>
  );
}

export default App;
