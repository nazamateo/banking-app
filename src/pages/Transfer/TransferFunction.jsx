import React from "react";
import { useState } from "react";
//import { getFromLocalStorage } from "../Users/DisplayUsersdeposit";
import DateToday from "../../components/General/Helpers/DateToday";
import {transferBankAccountBalance} from "../../components/LocalStorage/LocalStorage"
import "./Transfer.scss"

//add value on options

const TransferFunc = () => {
    const [transactionDate, settransactionDate] = useState(DateToday);
    const [fromName, setfromName] = useState("");
    const [fromAccountNumber, setfromAccountNumber] = useState("");
    const [toName, settoName] = useState("");
    const [toAccountNumber, settoAccountNumber] = useState("");
    const [amount, setamount] = useState("");


    const TransferThis = e => {
      e.preventDefault();
      transferBankAccountBalance(
        toName,
        parseInt(toAccountNumber),
        fromName,
        parseInt(fromAccountNumber),
        parseInt(amount)
      );

      //transferBankAccountBalance(toaccountName, toaccountNumber,fromaccountName, fromaccountNumber, amount)
      settransactionDate(DateToday);
      setfromName("");
      setfromAccountNumber("");
      settoName("");
      settoAccountNumber("");
      setamount("");
    };
    return (
      <form className="formt" onSubmit={TransferThis}>
        <div className="fromdivname">
          <label for="fromname" className="form-label">
            From
          </label>
          <input
            type="text"
            className="form-fields"
            id="fromname"
            value={fromName}
            onChange={e => setfromName(e.target.value)}
          />
        </div> 

        <div className="fromacct">
          <label for="fromaccountNumber" className="form-label">
            From Account Number
          </label>
          <input
            type="text"
            className="form-fields"
            id="fromaccountNumber"
            value={fromAccountNumber}
            onChange={e => setfromAccountNumber(e.target.value)}
          />
        </div>


        <div className="todivname">
          <label for="toname" className="form-label">
            To
          </label>
          <input
            type="text"
            className="form-fields"
            id="toname"
            value={toName}
            onChange={e => settoName(e.target.value)}
          />
        </div>


        <div className="toacct">
          <label for="toaccountNumber" className="form-label">
            To Account Number
          </label>
          <input
            type="text"
            className="form-fields"
            id="toaccountNumber"
            value={toAccountNumber}
            onChange={e => settoAccountNumber(e.target.value)}
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
  
        <div className="divamount">
          <label for="amount" className="form-label">
            Amount
          </label>
          <input
            type="text"
            className="form-fields"
            id="amount"
            value={amount}
            onChange={e => setamount(parseInt(e.target.value))}
          />
        </div>
  
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    );
  };
  
  export default TransferFunc;


