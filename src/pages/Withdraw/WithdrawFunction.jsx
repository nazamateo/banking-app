import React from "react";
import { useState } from "react";
//import { getFromLocalStorage } from "../Users/DisplayUsersdeposit";
import {updateBankAccountBalance} from "../../components/LocalStorage/LocalStorage"
import DateToday from "../../components/General/Helpers/DateToday";
import "../Deposit/Deposit.scss";

//add value on options

const WithdrawFunc = () => {
    const [name, setName] = useState("");
    const [transactionDate, settransactionDate] = useState(DateToday);
    const [accountNumber, setaccountNumber] = useState("");
    const [deposit, setdeposit] = useState("");

    const WithdrawThis = e => {
      e.preventDefault();
      updateBankAccountBalance(setName,setaccountNumber,setdeposit,"withdraw")
      setName("");
      settransactionDate(DateToday);
      setaccountNumber("");
      setdeposit("");
    };
    return (
      <form className="formd" onSubmit={WithdrawThis}>
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

        <div className="acct">
          <label for="accountNumber" className="form-label">
            Account Number
          </label>
          <input
            type="text"
            className="form-fields"
            id="accountNumber"
            value={accountNumber}
            onChange={e => setaccountNumber(e.target.value)}
          />
        </div>
  
        <div className="divdate">
          <label for="transactionDate" className="form-label">
            Transaction Date
          </label>
          <input
            type="text"
            className="form-fields"
            id="transactionDate"
            value={transactionDate}
            disabled
            onChange={e => settransactionDate(e.target.value)}
          />
        </div>
  
        <div className="divbal">
          <label for="deposit" className="form-label">
            Withdraw Amount
          </label>
          <input
            type="text"
            className="form-fields"
            id="deposit"
            value={deposit}
            onChange={e => setdeposit(e.target.value)}
          />
        </div>
  
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    );
  };
  
  export default WithdrawFunc;


