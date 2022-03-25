import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../forms/FormInput";
import styles from "./Login.module.scss";
import Logo from "../../Logo";
import logo from "../../../assets/images/bank-logo-white.png";
import { loginValidation } from "../../../utils/formValidation";
import LogInFormContainer from "../../LogInFormContainer/LoginFormContainer";
import Button from "../../button/Button";

function Login({
  setIsAdminAuthenticated,
  isAdminAuthenticated,
  adminAccounts,
  setAdminAccounts,
}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdminAuthenticated) {
      navigate("/banking/dashboard");
    }
  }, [isAdminAuthenticated]);

  const loginAuthentication = username => {
    const account = adminAccounts.find(
      account => account.username === username
    );

    account.isLoggedIn = true;

    const updatedAccounts = adminAccounts.map(adminAccount =>
      adminAccount.username === username ? { ...account } : adminAccount
    );

    setAdminAccounts(updatedAccounts);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = loginValidation(username, password, adminAccounts);

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    loginAuthentication(username);

    setIsAdminAuthenticated(true);
  };

  return (
    <>
      <div className={styles.header}>
        <Logo link={logo} name="DigiBank" className={styles.logoContainer} />
        <p>Admin Dashboard</p>
      </div>
      <LogInFormContainer handleSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <FormInput
            type="text"
            name="username"
            label="Username:"
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
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            error={errors.password}
          />
        </div>

        <Button text="Log In" />
      </LogInFormContainer>
    </>
  );
}

export default Login;
