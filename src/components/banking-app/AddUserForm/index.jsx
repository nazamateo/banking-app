import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../../utils/DateToday";
import FormInput from "../../forms/FormInput";
import styles from "./UsersForm.module.scss";
import { addUser } from "../../../utils/bankAccounts";
import { newAccountValidation } from "../../../utils/formValidation";

const UserForm = ({ bankAccounts, setBankAccounts }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setCreationDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState(
    bankAccounts[bankAccounts.length - 1].accountNumber + 1
  );
  const [balance, setBalance] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function stateResetter() {
    setName("");
    setEmail("");
    setBday("");
    setAddress("");
    setCreationDate(DateToday);
    setAccountNumber(accountNumber + 1);
    setBalance("");
  }

  const addUserData = e => {
    e.preventDefault();

    const errors = newAccountValidation(name, email, bday, address, balance);

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    const userObject = {
      name,
      email,
      bday,
      address,
      creationDate,
      accountNumber,
      balance,
      transactionHistory: [],
    };

    const updatedAccounts = addUser(bankAccounts, userObject);
    setBankAccounts(updatedAccounts);
    navigate(`success/${accountNumber}`);
    stateResetter();
  };

  return (
    <>
      <form className={styles.form} onSubmit={addUserData} noValidate>
        <div className={styles.divname}>
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
            error={errors.name}
          />
        </div>

        <div className={styles.divemail}>
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
            error={errors.email}
          />
        </div>

        <div className={styles.diveage}>
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
            autoComplete="off"
            required={true}
            error={errors.bday}
          />
        </div>

        <div className={styles.divaddr}>
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
            error={errors.address}
          />
        </div>

        <div className={styles.divdate}>
          <FormInput
            type="text"
            name="creationDate"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Creation Date"
            value={creationDate}
            disabled={true}
          />
        </div>

        <div className={styles.acct}>
          <FormInput
            type="text"
            name="accountNumber"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Account Number"
            value={accountNumber}
            disabled={true}
          />
        </div>
        <div className={styles.divbal}>
          <FormInput
            type="number"
            name="balance"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Balance"
            value={balance}
            onChange={e => setBalance(parseFloat(e.target.value))}
            autoComplete="off"
            error={errors.balance}
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
