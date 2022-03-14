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

import Popup from "../../components/General/Helpers/ErrorPopup";

//add value on options

const TransferFunc = () => {
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [fromName, setfromName] = useState("");
  const [fromAccountNumber, setfromAccountNumber] = useState("");
  const [toName, setToName] = useState("");
  const [toAccountNumber, settoAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
 
   function togglePopup () {
    setIsOpen(!isOpen);
  }
  const TransferThis = e => {
    e.preventDefault();

    let fromNameChecker = getBankAccountName(fromName)
    let tonameChecker = getBankAccountName(toName)

    if ((fromNameChecker == null) || fromNameChecker.accountNumber !== parseInt(fromAccountNumber)){
      togglePopup()
      setErrorMessage("Sender not found");} 
    else if ((tonameChecker == null) ||(tonameChecker.accountNumber !== parseInt(toAccountNumber))) {
      togglePopup()
      setErrorMessage("Reciever not found")}
    else if (fromNameChecker.balance < parseInt(amount)) {
      togglePopup()
      setErrorMessage("Insufficient balance")} 
    else {
              let senderTransactionObject = {
                transactionDate: transactionDate,
                action: "transfer",
                transactionId: transactionId,
                receiver: toName,
                receiverAccountNumber: parseInt(toAccountNumber),
                oldBalance: fromNameChecker.balance,
                newBalance: fromNameChecker.balance - parseInt(amount),
              };

              let receiverTransactionObject = {
                transactionDate: transactionDate,
                action: "transfer",
                transactionId: transactionId,
                sender: fromName,
                senderAccountNumber: parseInt(fromAccountNumber),
                oldBalance: tonameChecker.balance,
                newBalance: tonameChecker.balance + parseInt(amount),
              };

              transferBankAccountBalance(
                toName,
                parseInt(toAccountNumber),
                fromName,
                parseInt(fromAccountNumber),
                parseInt(amount),
                senderTransactionObject,
                receiverTransactionObject
              );
              
              window.location.pathname = `/success/${transactionId}`;

              setTransactionDate(DateToday);
              setfromName("");
              setfromAccountNumber("");
              setToName("");
              settoAccountNumber("");
              setAmount("");
              setTransactionId(uuidv4());
            }
  };
  return (

    <div>
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
    {isOpen && <Popup
    content={<>
      <b>{errormessage}</b>
    </>}
    handleClose={togglePopup}
  />}
    
    </div>
  );
};

export default TransferFunc;
