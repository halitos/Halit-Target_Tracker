import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import FormDeneme from "./components/FormDeneme";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((data) => data.json())
      .then((msg) => setGreeting(msg));
  }, []);

  useEffect(() => {
    fetch("/student_email")
      .then((data) => data.json())
      .then((data) => {
        setEmail(data[0].email);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <p>{greeting ? greeting.message : "loading"}</p>
        <p>{email ? `email from mock DB : ${email}` : "loading"}</p>
        <FormDeneme />
      </div>
    </div>
  );
}

export default App;
