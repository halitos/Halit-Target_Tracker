import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Greeting() {
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
    <div className="container">
      <p>{greeting ? greeting.message : "loading"}</p>
      <p>{email ? `email from mock DB : ${email}` : "loading"}</p>
      <Link to="/selections">
        <button className="btn-lg btn-info">See Selections</button>
      </Link>
    </div>
  );
}
