import React from "react";
import { useState } from "react";
//import { getFromLocalStorage } from "../Users/DisplayUsersdeposit";
import {
  updateBankAccountBalance,
  getBankAccountName,
} from "../../components/LocalStorage/LocalStorage";
import DateToday from "../../components/General/Helpers/DateToday";
import "../Deposit/Deposit.scss";
import { v4 as uuidv4 } from "uuid";

//add value on options
export let nameChecker;
export let transactionObject;

const WithdrawFunc = () => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());

  const WithdrawThis = e => {
    e.preventDefault();

    //user already exists
    nameChecker = getBankAccountName(name);
    console.log(nameChecker); //object

    if (nameChecker == null) {
      alert("user does not exist");
    } else {
      if (nameChecker.accountNumber !== parseInt(accountNumber)) {
        alert("user does not exist");
      } else {
        if (nameChecker.balance < parseInt(withdraw)) {
          alert("insufficient balance");
        } else {
          transactionObject = {
            transactionDate: transactionDate,
            transactionId: transactionId,
            action: "withdraw",
            oldBalance: nameChecker.balance,
            newBalance: nameChecker.balance - parseInt(withdraw),
          };

          updateBankAccountBalance(
            name,
            parseInt(accountNumber),
            parseInt(withdraw),
            "withdraw",
            transactionObject
          );

          setName("");
          setTransactionDate(DateToday);
          setAccountNumber("");
          setWithdraw("");
          setTransactionId(uuidv4());
        }
      }
    }
  };
  return (
    <form className="formd" onSubmit={WithdrawThis}>
      <div className="divname">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          pattern="[a-zA-Z\s]+"
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
          type="text"
          pattern="[0-9.]+"
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
          type="text"
          pattern="[0-9.]+"
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
