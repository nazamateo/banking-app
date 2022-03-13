import React from "react";
import { useState } from "react";
import DateToday from "../../components/General/Helpers/DateToday";
import { getFromLocalStorage } from "../Users/DisplayUsersBalance";
import "./UsersForm.scss";

const UserForm = () => {
  var accountNumCount = (getFromLocalStorage.length)+1;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [creationDate, setcreationDate] = useState(DateToday);
  const [accountNumber, setaccountNumber] = useState(accountNumCount);
  const [balance, setbalance] = useState("");
  const addUserdata = e => {
    e.preventDefault();
    const addThis = {
      name: name,
      email: email,
      age: age,
      address: address,
      creationDate: creationDate,
      accountNumber: accountNumber,
      balance: balance,
      formattedbalance: Intl.NumberFormat("en-PH", {
        currency: "PHP",
        style: "currency",
      }).format(balance),
    };
    getFromLocalStorage.push(addThis);

    localStorage.setItem(
      "bankAccounts",
      JSON.stringify(getFromLocalStorage)
    );

    setName("");
    setEmail("");
    setAge("");
    setAddress("");
    setcreationDate(DateToday);
    setaccountNumber(accountNumCount);
    setbalance("");
  };
  return (
    <form className="form" onSubmit={addUserdata}>
      <div className="divname">
        <label for="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-fields"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="divemail">
        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-fields"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="divage">
        <label for="age" className="form-label">
          Age
        </label>
        <input
          type="text"
          className="form-fields"
          id="age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>

      <div className="divaddr">
        <label for="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-fields"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>

      <div className="divdate">
        <label for="creationDate" className="form-label">
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
        <label for="accountNumber" className="form-label">
          Account Number
        </label>
        <input
          type="text"
          className="form-fields"
          id="accountNumber"
          value={accountNumCount}
          disabled
          onChange={e => setaccountNumber(e.target.value)}
        />
      </div>
      <div className="divbal">
        <label for="balance" className="form-label">
          Balance
        </label>
        <input
          type="text"
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
  );
};

export default UserForm;
