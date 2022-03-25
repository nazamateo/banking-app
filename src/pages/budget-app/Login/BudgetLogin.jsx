import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emailPasswordValidation } from "../../../utils/formValidation";
import FormInput from "../../../components/forms/FormInput";
import LogInFormContainer from "../../../components/LogInFormContainer/LoginFormContainer";
import Button from "../../../components/button/Button";

function BudgetLoginPage({
  setIsUserAuthenticated,
  isUserAuthenticated,
  bankAccounts,
  setBankAccounts,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserAuthenticated) {
      navigate("/budget/dashboard");
    }
  }, [isUserAuthenticated]);

  const loginAuthentication = email => {
    const account = bankAccounts.find(account => account.email === email);

    account.isLoggedIn = true;

    const updatedAccounts = bankAccounts.map(bankAccount =>
      bankAccount.email === email ? { ...account } : bankAccount
    );

    setBankAccounts(updatedAccounts);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = emailPasswordValidation(email, password, bankAccounts);

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    loginAuthentication(email);

    setIsUserAuthenticated(true);
  };

  return (
    <div className="log-in">
      <LogInFormContainer handleSubmit={handleSubmit}>
        <div className="input-login">
          <FormInput
            name="email"
            label="Email:"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            autoComplete="off"
            error={errors.email}
          />
        </div>
        <div className="input-login">
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
    </div>
  );
}

export default BudgetLoginPage;
