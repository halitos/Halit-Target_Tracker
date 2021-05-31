import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        ></input>
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        ></input>
      </div>
      <Link to="/dashboard">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Link>
    </form>
  );
};

export default LoginPage;
