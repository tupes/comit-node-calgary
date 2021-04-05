import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <h1>{props.title}</h1>
      </header>

      <div className="login">
        <button id="signup-button" className="signup-button">
          <Link to="signup">Signup</Link>
        </button>

        <button id="login-button" className="signup-button">
          <Link to="login">Login</Link>
        </button>
      </div>
    </>
  );
}
