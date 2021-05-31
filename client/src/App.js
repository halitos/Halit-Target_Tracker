import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import FormDeneme from "./components/Dashboard";
import Greeting from "./components/Greeting";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <FormDeneme />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
