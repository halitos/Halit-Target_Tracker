import React, { useEffect, useState } from "react";
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
      <header className="App-header">
        <p>{greeting ? greeting.message : "loading"}</p>
      </header>
    </div>
  );
}

export default App;
