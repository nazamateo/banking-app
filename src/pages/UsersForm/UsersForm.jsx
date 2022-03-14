import React from "react";
import { useState } from "react";
import DateToday from "../../components/General/Helpers/DateToday";
// import { getFromLocalStorage } from "../Users/DisplayUsersBalance";
import {
  getBankAccountName,
  getBankAccounts,
} from "../../components/LocalStorage/LocalStorage";
import { useNavigate } from "react-router-dom";
import "./UsersForm.scss";
import Popup from "../../components/General/Helpers/ErrorPopup";

export let addThis;

const UserForm = () => {
  var accountNumCount = getBankAccounts().length;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setcreationDate] = useState(DateToday);
  const [accountNumber, setaccountNumber] = useState(accountNumCount + 1);
  const [balance, setbalance] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
 
   function togglePopup () {
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
        age: age,
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


      window.location.pathname = `users/newaccount/success/${accountNumber}`;

      setName("");
      setEmail("");
      setAge("");
      setAddress("");
      setcreationDate(DateToday);
      setaccountNumber(accountNumCount + 1);
      setbalance("");
    } else {
      togglePopup()
      setErrorMessage("User already exists");}
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
          required
        />
      </div>

      <div className="divage">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          pattern="[0-9.]+"
          className="form-fields"
          id="age"
          value={age}
          onChange={e => setAge(e.target.value)}
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
          onChange={e => setcreationDate(e.target.value)}
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
          type="text"
          pattern="[0-9.]+"
          className="form-fields"
          id="balance"
          value={balance}
          onChange={e => setbalance(e.target.value)}
        />
      </div>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
    {isOpen && <Popup
    content={<>
      <b>{errormessage}</b>
    </>}
    handleClose={togglePopup}
  />}
    </div>
  );
};

export default UserForm;
