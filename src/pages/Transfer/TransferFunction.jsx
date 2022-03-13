import React from "react";
import { useState } from "react";
//import { getFromLocalStorage } from "../Users/DisplayUsersdeposit";
import DateToday from "../../components/General/Helpers/DateToday";
import {
  getBankAccountName,
  transferBankAccountBalance,
} from "../../components/LocalStorage/LocalStorage";
import "./Transfer.scss";
import { v4 as uuidv4 } from "uuid";

//add value on options

const TransferFunc = () => {
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [fromName, setfromName] = useState("");
  const [fromAccountNumber, setfromAccountNumber] = useState("");
  const [toName, setToName] = useState("");
  const [toAccountNumber, settoAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());

  const TransferThis = e => {
    e.preventDefault();

    //user already exists
    let fromnameChecker = getBankAccountName(fromName);
    console.log(fromnameChecker); //object

    if (fromnameChecker == null) {
      alert("sender does not exist");
    } else {
      if (fromnameChecker.accountNumber !== parseInt(fromAccountNumber)) {
        alert("sender does not exist");
      } else {
        let tonameChecker = getBankAccountName(toName);
        if (tonameChecker == null) {
          alert("reciever does not exist");
        } else {
          if (tonameChecker.accountNumber !== parseInt(toAccountNumber)) {
            alert("reciever does not exist");
          } else {
            if (fromnameChecker.balance < parseInt(amount)) {
              alert("insufficient balance");
            } else {
              let sendertransactionObject = {
                transactionDate: transactionDate,
                action: "transfer",
                transactionId: transactionId,
                reciever: toName,
                oldBalance: fromnameChecker.balance,
                newBalance: fromnameChecker.balance - parseInt(amount),
              };

              let recievertransactionObject = {
                transactionDate: transactionDate,
                action: "transfer",
                transactionId: transactionId,
                sender: fromName,
                oldBalance: tonameChecker.balance,
                newBalance: tonameChecker.balance + parseInt(amount),
              };

              transferBankAccountBalance(
                toName,
                parseInt(toAccountNumber),
                fromName,
                parseInt(fromAccountNumber),
                parseInt(amount),
                sendertransactionObject,
                recievertransactionObject
              );

              //transferBankAccountBalance(toaccountName, toaccountNumber,fromaccountName, fromaccountNumber, amount)
              setTransactionDate(DateToday);
              setfromName("");
              setfromAccountNumber("");
              setToName("");
              settoAccountNumber("");
              setAmount("");
              setTransactionId(uuidv4());
            }
          }
        }
      }
    }
  };
  return (
    <form className="formt" onSubmit={TransferThis}>
      <div className="fromdivname">
        <label htmlFor="fromname" className="form-label">
          From
        </label>
        <input
          type="text"
          pattern="[a-zA-Z\s]+"
          className="form-fields"
          id="fromname"
          value={fromName}
          onChange={e => setfromName(e.target.value)}
          required
        />
      </div>

      <div className="fromacct">
        <label htmlFor="fromaccountNumber" className="form-label">
          From Account Number
        </label>
        <input
          type="text"
          pattern="[0-9.]+"
          className="form-fields"
          id="fromaccountNumber"
          value={fromAccountNumber}
          onChange={e => setfromAccountNumber(e.target.value)}
          required
        />
      </div>

      <div className="todivname">
        <label htmlFor="toname" className="form-label">
          To
        </label>
        <input
          type="text"
          pattern="[a-zA-Z\s]+"
          className="form-fields"
          id="toname"
          value={toName}
          onChange={e => setToName(e.target.value)}
          required
        />
      </div>

      <div className="toacct">
        <label htmlFor="toaccountNumber" className="form-label">
          To Account Number
        </label>
        <input
          type="text"
          pattern="[0-9.]+"
          className="form-fields"
          id="toaccountNumber"
          value={toAccountNumber}
          onChange={e => settoAccountNumber(e.target.value)}
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
        />
      </div>

      <div className="divamount">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          pattern="[0-9.]+"
          className="form-fields"
          id="amount"
          value={amount}
          onChange={e => setAmount(parseInt(e.target.value))}
          required
        />
      </div>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default TransferFunc;
