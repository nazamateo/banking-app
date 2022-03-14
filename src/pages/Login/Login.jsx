import React, { useState } from "react";
import {
  LoadDataButton,
  getAdminAccounts,
} from "../../components/LocalStorage/LocalStorage";
import "./login.scss";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = e => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const adminAccounts = getAdminAccounts();

    if (username === "" || password === "") {
      setError("Empty username/password field");
    } else if (
      adminAccounts.find(
        account =>
          account.username === username && account.password === password
      )
    ) {
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/dashboard";
    } else {
      setError("Invalid username/password");
      return;
    }
  };

  return (
    <div className="log-in">
      <form onSubmit={handleSubmit} className="form-login">
        <h1>LOGIN</h1>
        <div className="input-login">
          <label htmlFor="username" class="label-login">
            Username:{" "}
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-login">
          <label htmlFor="password" class="label-login">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn-login">
          Log In
        </button>
        <p>{error}</p>
      </form>
      <LoadDataButton />
    </div>
  );
}

export default LoginPage;
