import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../components/General/Helpers/DateToday";
// import { getFromLocalStorage } from "../Users/DisplayUsersBalance";
import {
  getBankAccountName,
  getBankAccounts,
} from "../../components/LocalStorage/LocalStorage";

import "./UsersForm.scss";
import Popup from "../../components/General/Helpers/ErrorPopup";

export let addThis;

const UserForm = () => {
  let accountNumCount =
    getBankAccounts()[getBankAccounts().length - 1].accountNumber;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bday, setBday] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setCreationDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState(accountNumCount + 1);
  const [balance, setBalance] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function togglePopup() {
    setIsOpen(!isOpen);
  }
  //onsubmit dapat mag rerender si DisplayUserBalance para maupdate yung accountnumber
  const addUserdata = e => {
    e.preventDefault();

    let nameChecker = getBankAccountName(name);
    console.log(nameChecker);

    if (!nameChecker) {
      addThis = {
        name: name,
        email: email,
        bday: bday,
        address: address,
        creationDate: creationDate,
        accountNumber: parseInt(accountNumber),
        balance: parseInt(balance),
        transactionHistory: [],
        formattedbalance: Intl.NumberFormat("en-PH", {
          currency: "PHP",
          style: "currency",
        }).format(balance),
      };

      let bankAccounts = getBankAccounts();
      bankAccounts.push(addThis);

      localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));

      navigate(`success/${accountNumber}`);

      setName("");
      setEmail("");
      setBday("");
      setAddress("");
      setCreationDate(DateToday);
      setAccountNumber(accountNumCount + 1);
      setBalance("");
    } else {
      togglePopup();
      setErrorMessage("User already exists");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={addUserdata}>
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
            autoComplete="off"
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
            disabled
            onChange={e => setCreationDate(e.target.value)}
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
            value={accountNumCount + 1}
            disabled
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
            onChange={e => setBalance(e.target.value)}
            autoComplete="off"
          />
        </div>

        <button type="submit" className="submit">
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
    </div>
  );
};

export default UserForm;
