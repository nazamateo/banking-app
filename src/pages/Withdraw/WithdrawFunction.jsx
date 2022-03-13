import React from "react";
import { useState } from "react";
//import { getFromLocalStorage } from "../Users/DisplayUsersdeposit";
import { updateBankAccountBalance } from "../../components/LocalStorage/LocalStorage";
import DateToday from "../../components/General/Helpers/DateToday";
import "../Deposit/Deposit.scss";

//add value on options

const WithdrawFunc = () => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [withdraw, setWithdraw] = useState("");

  const WithdrawThis = e => {
    e.preventDefault();
    updateBankAccountBalance(
      name,
      parseInt(accountNumber),
      parseInt(withdraw),
      "withdraw"
    );
    setName("");
    setTransactionDate(DateToday);
    setAccountNumber("");
    setWithdraw("");
  };
  return (
    <form className="formd" onSubmit={WithdrawThis}>
      <div className="divname">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text" pattern="[a-zA-Z]+" 
          className="form-fields"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="acct">
        <label htmlFor="accountNumber" className="form-label">
          Account Number
        </label>
        <input
          type="text" pattern="[0-9.]+"
          className="form-fields"
          id="accountNumber"
          value={accountNumber}
          onChange={e => setAccountNumber(e.target.value)}
          required
        />
      </div>

      <div className="divdate">
        <label htmlFor="transactionDate" className="form-label">
          Transaction Date
        </label>
        <input
          type="text"
          className="form-fields"
          id="transactionDate"
          value={transactionDate}
          disabled
          onChange={e => setTransactionDate(e.target.value)}
          required
        />
      </div>

      <div className="divbal">
        <label htmlFor="deposit" className="form-label">
          Withdraw Amount
        </label>
        <input
          type="text" pattern="[0-9.]+"
          className="form-fields"
          id="withdraw"
          value={withdraw}
          onChange={e => setWithdraw(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default WithdrawFunc;
