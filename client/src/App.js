import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import FormDeneme from "./components/FormDeneme";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((data) => data.json())
      .then((msg) => setGreeting(msg));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <p>{greeting ? greeting.message : "loading"}</p>
        <FormDeneme />
      </div>
    </div>
  );
}

export default App;
