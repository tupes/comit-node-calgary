import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { handlePageSelection } = props;

  return (
    <>
      <header className="header">
        <h1>
          <Link to="/">Sports Store</Link>
        </h1>
      </header>

      <div className="login">
        <button
          id="signup-button"
          className="signup-button"
          onClick={handlePageSelection}
        >
          <Link to="/signup">Sign up</Link>
        </button>

        <button
          id="login-button"
          className="signup-button"
          onClick={handlePageSelection}
        >
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
}
