import React from "react";
import { Link } from "react-router-dom";

function ChooseLogin() {
  return (
    <div className="Choose">
      <h1>THIS IS HOMEPAGE</h1>
      <nav>
        <Link to="/login">Admin Login</Link>
        <Link to="/login/budget">Customer Login</Link>
      </nav>
    </div>
  );
}

export default ChooseLogin;
