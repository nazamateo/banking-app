import React, { useState } from "react";
import {
  LoadDataButton,
  getBankAccounts,
} from "../../../services/LocalStorage";
import { useNavigate } from "react-router-dom";
//import "./login.scss";
import Popup from "../../../components/pop-up/ErrorPopup";

function BudgetLoginPage() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }
  function clearErrors() {
    setIsOpen(!isOpen);
    setError([]);
  }

  function errorHandler() {
    if (password === "" || email === "") {
      if (password === "") {
        togglePopup();
        setError(displayerror => [...displayerror, "Empty password field"]);
      }
      if (email === "") {
        togglePopup();
        setError(displayerror => [...displayerror, "Empty email field"]);
      }
      return true;
    }
    return false;
  }

  const handleemailChange = e => {
    setemail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const loginAuthentication = email => {
    const userAccounts = JSON.parse(localStorage.getItem("bankAccounts"));

    const account = userAccounts.find(account => account.email === email);

    account.isLoggedIn = true;

    const updatedAccounts = userAccounts.map(adminAccount =>
      adminAccount.email === email ? { ...account } : adminAccount
    );

    localStorage.setItem("bankAccounts", JSON.stringify(updatedAccounts));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userAccounts = getBankAccounts();
    if (!errorHandler()) {
      if (
        userAccounts.find(
          account => account.email === email && account.password === password
        )
      ) {
        localStorage.setItem("isAuthenticated", "true");
        loginAuthentication(email);
        navigate("/dashboardbudget");
      } else {
        togglePopup();
        setError(displayerror => [...displayerror, "Invalid userame/password"]);
        return;
      }
    }
  };

  return (
    <div className="log-in">
      <form onSubmit={handleSubmit} className="form-login">
        <h1>LOGIN</h1>
        <div className="input-login">
          <label htmlFor="email" className="label-login">
            email:
          </label>
          <input
            type="text"
            placeholder="email"
            id="email"
            name="email"
            onChange={handleemailChange}
            autoComplete="off"
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
          content={error.map(displayed => {
            return <p>{displayed}</p>;
          })}
          handleClose={clearErrors}
        />
      )}
    </div>
  );
}

export default BudgetLoginPage;
