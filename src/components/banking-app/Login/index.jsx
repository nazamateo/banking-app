import React, { useEffect, useState } from "react";
import { getAdminAccounts } from "../../../services/LocalStorage";
import { useNavigate } from "react-router-dom";
import FormInput from "../../forms/FormInput";
import styles from "./Login.module.scss";
import Logo from "../../Logo";
import logo from "../../../assets/images/bank-logo-white.png";
import { loginValidation } from "../../../utils/formValidation";
import { updateAdminAuthentication } from "../../../services/LocalStorage";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticatedBank");

    if (isAuth === true) {
      navigate("/banking/dashboard", { replace: true });
    }
  }, []);

  const loginAuthentication = username => {
    const adminAccounts = JSON.parse(localStorage.getItem("adminAccounts"));

    const account = adminAccounts.find(
      account => account.username === username
    );

    account.isLoggedIn = true;

    const updatedAccounts = adminAccounts.map(adminAccount =>
      adminAccount.username === username ? { ...account } : adminAccount
    );

    localStorage.setItem("adminAccounts", JSON.stringify(updatedAccounts));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = loginValidation(username, password, getAdminAccounts());
    console.log(errors);
    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    updateAdminAuthentication(true);
    loginAuthentication(username);
    navigate("/banking/dashboard");
  };

  return (
    <>
      <div className={styles.header}>
        <Logo link={logo} name="DigiBank" className={styles.logoContainer} />
        <p>Admin Dashboard</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
        <h1>LOGIN</h1>
        <div className={styles.inputContainer}>
          <FormInput
            type="text"
            name="username"
            label="Username:"
            classNames={{ label: styles.label, input: styles.input }}
            placeholder="Username"
            autoComplete="off"
            onChange={e => setUserName(e.target.value)}
            value={username}
            error={errors.username}
          />
        </div>
        <div className={styles.inputContainer}>
          <FormInput
            type="password"
            name="password"
            label="Password:"
            classNames={{ label: styles.label, input: styles.input }}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            error={errors.password}
          />
        </div>

        <button type="submit" className={styles.loginBtn}>
          Log In
        </button>
      </form>
    </>
  );
}

export default Login;
