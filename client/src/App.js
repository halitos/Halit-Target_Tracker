import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FormDeneme from "./components/FormDeneme";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>
          <Route path="/selections">
            <FormDeneme />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
