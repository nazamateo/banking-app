import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBankAccounts } from "../../../services/LocalStorage";

import "./Editform.scss";

const EditForm = () => {
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();
  const accountNumber = parseInt(useParams().accountNumber);

  const getAccountDetails = () => {
    const selectedBankAccount = bankAccounts.find(
      bankAccount => bankAccount.accountNumber === accountNumber
    );

    setName(selectedBankAccount.name);
    setEmail(selectedBankAccount.email);
    setBday(selectedBankAccount.bday);
    setAddress(selectedBankAccount.address);
    setCreationDate(selectedBankAccount.creationDate);
    setBalance(selectedBankAccount.balance);
  };

  useEffect(() => {
    getAccountDetails();
  }, []);

  const handleSubmitData = e => {
    e.preventDefault();
    const selectedUser = bankAccounts.find(
      user => user.accountNumber === accountNumber
    );

    selectedUser.name = name;
    selectedUser.email = email;
    selectedUser.bday = bday;
    selectedUser.address = address;

    const updatedUsers = bankAccounts.map(account =>
      account.accountNumber === accountNumber ? { ...selectedUser } : account
    );

    setBankAccounts(updatedUsers);
    localStorage.setItem("bankAccounts", JSON.stringify(updatedUsers));

    navigate(`/users`);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmitData}>
        <div className="divname">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            pattern="[a-zA-Z\s]+"
            type="text"
            className="form-fields"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        <div className="divemail">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-fields"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        <div className="divage">
          <label htmlFor="age" className="form-label">
            Birthday
          </label>
          <input
            type="date"
            className="form-fields"
            id="age"
            value={bday}
            onChange={e => setBday(e.target.value)}
            required
          />
        </div>

        <div className="divaddr">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-fields"
            id="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        <div className="divdate">
          <label htmlFor="creationDate" className="form-label">
            Creation Date
          </label>
          <input
            type="text"
            className="form-fields"
            id="creationDate"
            value={creationDate}
            disabled={true}
          />
        </div>

        <div className="acct">
          <label htmlFor="accountNumber" className="form-label">
            Account Number
          </label>
          <input
            type="text"
            className="form-fields"
            id="accountNumber"
            value={accountNumber}
            disabled={true}
          />
        </div>
        <div className="divbal">
          <label htmlFor="balance" className="form-label">
            Balance
          </label>
          <input
            type="number"
            pattern="[0-9.]+"
            className="form-fields"
            id="balance"
            value={balance}
            disabled={true}
          />
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditForm;
