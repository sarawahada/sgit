import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/contact" component={() => <h1>contact</h1>} />
        <Route exact path="/about" component={() => <h1>about</h1>} />
      </Switch>
    </div>
  );
}

export default App;
