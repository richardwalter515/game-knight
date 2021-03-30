import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Dice from "./components/dice";
import Footer from "./components/footer";
import Home from "./components/home";
import Navigation from "./components/nav";
import Scoreboard from './components/scoreboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>

          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route exact path={"/Dice"}>
            <Dice />
          </Route>

          <Route exact path={"/Scoreboard"}>
            <Scoreboard />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
