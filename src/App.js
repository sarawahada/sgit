import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Homepage from "./Homepage";
import Contact from "./contact";
import About from "./about";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/logiciels" component={() => <h1>logiciels</h1>} />

      </Switch>
    </div>
  );
}

export default App;
