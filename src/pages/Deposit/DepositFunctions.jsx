import React from "react";
import { useState } from "react";
//import { getFromLocalStorage } from "../Users/DisplayUsersdeposit";
import DateToday from "../../components/General/Helpers/DateToday";
import {updateBankAccountBalance} from "../../components/LocalStorage/LocalStorage"
import "./Deposit.scss";

//add value on options

const DepositFunc = () => {
    const [name, setName] = useState("");
    const [transactionDate, settransactionDate] = useState(DateToday);
    const [accountNumber, setaccountNumber] = useState("");
    const [deposit, setdeposit] = useState("");


    const DepositThis = e => {
      e.preventDefault();
      updateBankAccountBalance(name,accountNumber,deposit,"deposit")
      setName("");
      settransactionDate(DateToday);
      setaccountNumber("");
      setdeposit("");
    };
    return (
      <form className="formd" onSubmit={DepositThis}>
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
            Deposit Amount
          </label>
          <input
            type="text"
            className="form-fields"
            id="deposit"
            value={deposit}
            onChange={e => setdeposit(parseInt(e.target.value))}
          />
        </div>
  
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    );
  };
  
  export default DepositFunc;


