import React, { useState } from "react";
import {
  LoadDataButton,
  getAdminAccounts,
} from "../../../services/LocalStorage";
import { useNavigate } from "react-router-dom";
import FormInput from "../../forms/FormInput";
import styles from "./Login.module.scss";
import Popup from "../../pop-up/ErrorPopup";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function togglePopup() {
    setIsOpen(!isOpen);
  }
  function clearErrors() {
    setIsOpen(!isOpen);
    setError([]);
  }

  function errorHandler() {
    if (password === "" || username === "") {
      if (password === "") {
        togglePopup();
        setError((displayerror) => [...displayerror, "Empty password field"]);
      }
      if (username === "") {
        togglePopup();
        setError((displayerror) => [...displayerror, "Empty username field"]);
      }
      return true;
    }
    return false;
  }

  const loginAuthentication = (username) => {
    const adminAccounts = JSON.parse(localStorage.getItem("adminAccounts"));

    const account = adminAccounts.find(
      (account) => account.username === username
    );

    account.isLoggedIn = true;

    const updatedAccounts = adminAccounts.map((adminAccount) =>
      adminAccount.username === username ? { ...account } : adminAccount
    );

    localStorage.setItem("adminAccounts", JSON.stringify(updatedAccounts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminAccounts = getAdminAccounts();
    if (!errorHandler()) {
      if (
        adminAccounts.find(
          (account) =>
            account.username === username && account.password === password
        )
      ) {
        localStorage.setItem("isAuthenticatedBank", "true");
        loginAuthentication(username);
        navigate("/banking/dashboard");
      } else {
        togglePopup();
        setError((displayerror) => [
          ...displayerror,
          "Invalid userame/password",
        ]);
        return;
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1>LOGIN</h1>
        <div className={styles.inputContainer}>
          <FormInput
            type="text"
            name="username"
            label="Username:"
            classNames={{ label: styles.label, input: styles.input }}
            placeholder="Username"
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <FormInput
            type="password"
            name="password"
            label="Password:"
            classNames={{ label: styles.label, input: styles.input }}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>
      </form>
      <LoadDataButton className={styles.loginBtn} />
      {isOpen && (
        <Popup
          content={error.map((displayed) => {
            return <p>{displayed}</p>;
          })}
          handleClose={clearErrors}
        />
      )}
    </>
  );
}

export default Login;
