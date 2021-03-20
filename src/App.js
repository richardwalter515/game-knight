import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./components/footer";
import Navigation from "./components/nav";
import Scoreboard from './components/scoreboard';

function App() {
  return (
    <div>
      <Navigation />
      <Scoreboard />
      <Footer />
    </div>
  );
}

export default App;
