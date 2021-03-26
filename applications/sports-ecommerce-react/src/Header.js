import React from "react";

export default function Header(props) {
  return (
    <>
      <header className="header">
        <h1>{props.title}</h1>
      </header>

      <div className="login">
        <button id="signup-button" className="signup-button">
          <a href="signup">Sign up</a>
        </button>

        <button id="login-button" className="signup-button">
          <a href="login">Login</a>
        </button>
      </div>
    </>
  );
}
