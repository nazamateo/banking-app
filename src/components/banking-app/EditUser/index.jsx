import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBankAccounts } from "../../../services/LocalStorage";
import FormInput from "../../forms/FormInput";
import styles from "./EditUser.module.scss";

const EditForm = () => {
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();
  const accountNumber = +useParams().accountNumber;

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
          <FormInput
            name="name"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
            pattern="[a-zA-Z\s]+"
            required={true}
          />
        </div>

        <div className="divemail">
          <FormInput
            name="email"
            type="email"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="off"
            required={true}
          />
        </div>

        <div className="divage">
          <FormInput
            name="birthday"
            type="date"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Birthday"
            value={bday}
            onChange={e => setBday(e.target.value)}
            required={true}
          />
        </div>

        <div className="divaddr">
          <FormInput
            name="address"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            autoComplete="off"
            required={true}
          />
        </div>

        <div className="divdate">
          <FormInput
            name="creationDate"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Creation Date"
            value={creationDate}
            disabled={true}
          />
        </div>

        <div className="acct">
          <FormInput
            name="accountNumber"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Account Number"
            value={accountNumber}
            disabled={true}
          />
        </div>

        <div className="divbal">
          <FormInput
            name="balance"
            type="number"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Balance (₱)"
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
