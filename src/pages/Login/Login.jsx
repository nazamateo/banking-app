import React, { useState } from "react";
import {
  LoadDataButton,
  getAdminAccounts,
} from "../../components/LocalStorage/LocalStorage";

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
      window.location.pathname = "/";
    } else {
      setError("Invalid username/password");
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Log In</button>
        <LoadDataButton />
        <p>{error}</p>
      </form>
    </div>
  );
}

export default LoginPage;
