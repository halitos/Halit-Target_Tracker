import React from "react";
import profile from "../images/profile.jpg";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Link to="/">
          <img
            alt="profile"
            src={profile}
            width="80"
            height="auto"
            className="d-inline-block align-top rounded"
          />
        </Link>
      </Navbar.Brand>
      <div className="container">
        <h1 className="header-title text-light mx-2">My Target Tracker</h1>
        <div className="link-box text-white">
          <a href="#sign-in">Login</a>
          <span className="separator mx-2">|</span>
          <a href="#sign-up">Signup</a>{" "}
        </div>
      </div>
    </Navbar>
  );
}
