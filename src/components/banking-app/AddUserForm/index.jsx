import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../General/Helpers/DateToday";
import {
  getBankAccountName,
  getBankAccounts,
  addUser,
} from "../../../services/LocalStorage";
import Popup from "../../pop-up/ErrorPopup";
import FormInput from "../../forms/FormInput";
import styles from "./UsersForm.module.scss";
const accountNumCount =
  getBankAccounts()[getBankAccounts().length - 1].accountNumber;
const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setCreationDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState(accountNumCount + 1);
  const [balance, setBalance] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [nameChecker, setNameChecker] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setNameChecker(getBankAccountName(name));
  }, [name]);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function stateResetter() {
    setName("");
    setEmail("");
    setBday("");
    setAddress("");
    setCreationDate(DateToday);
    setAccountNumber(accountNumCount + 1);
    setBalance("");
  }

  const addUserdata = e => {
    e.preventDefault();

    if (!nameChecker) {
      const userObject = {
        name: name,
        email: email,
        bday: bday,
        address: address,
        creationDate: creationDate,
        accountNumber: accountNumber,
        balance: balance,
        transactionHistory: [],
      };

      addUser(userObject);
      stateResetter();
      navigate(`success/${accountNumber}`);
    } else {
      togglePopup();
      setErrorMessage("User already exists");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={addUserdata}>
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
            onChange={e => setBalance(+e.target.value)}
            autoComplete="off"
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
      {isOpen && (
        <Popup
          content={
            <>
              <b>{errormessage}</b>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default UserForm;
