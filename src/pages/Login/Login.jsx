import React, { useState } from "react";
import { LoadDataButton } from "../../components/LocalStorage/LocalStorage";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = e => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    // pseudocode
    // call the function that will check if the credential matches the adminaccount in localstorage,
    // if not matched, return an error!
  };

  return (
    <div>
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
        required
      />
      <button type="button">Log In</button>
    </div>
  );
}

export default LoginPage;
