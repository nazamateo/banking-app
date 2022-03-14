import React, { useState } from "react";
import {
  LoadDataButton,
  getAdminAccounts,
} from "../../components/LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Popup from "../../components/General/Helpers/ErrorPopup";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

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
      togglePopup();
      setError("Empty username/password field");
    } else if (
      adminAccounts.find(
        account =>
          account.username === username && account.password === password
      )
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      togglePopup();
      setError("Invalid username/password");
      return;
    }
  };

  return (
    <div className="log-in">
      <form onSubmit={handleSubmit} className="form-login">
        <h1>LOGIN</h1>
        <div className="input-login">
          <label htmlFor="username" className="label-login">
            Username:{" "}
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={handleUsernameChange}
            autocomplete="off"
          />
        </div>
        <div className="input-login">
          <label htmlFor="password" className="label-login">
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
      </form>
      <LoadDataButton />
      {isOpen && (
        <Popup
          content={
            <>
              <b>{error}</b>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default LoginPage;
