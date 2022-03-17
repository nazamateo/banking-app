import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../components/General/Helpers/DateToday";
import {
  getBankAccountName,
  transferBankAccountBalance,
} from "../../components/LocalStorage/LocalStorage";
import "./Transfer.scss";
import { v4 as uuidv4 } from "uuid";

import Popup from "../../components/General/Helpers/ErrorPopup";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../components/General/Helpers/Datalist";

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
  let navigate = useNavigate();

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function clearErrors() {
    setIsOpen(!isOpen);
    setErrorMessage([]);
  }

  const TransferThis = e => {
    e.preventDefault();

    let fromNameChecker = getBankAccountName(fromName);
    let tonameChecker = getBankAccountName(toName);

    if (
      fromNameChecker == null ||
      fromNameChecker.accountNumber !== parseInt(fromAccountNumber)
    ) {
      togglePopup();
      setErrorMessage(displayerror => [...displayerror, "Sender not found"]);
    }
    if (
      tonameChecker == null ||
      tonameChecker.accountNumber !== parseInt(toAccountNumber)
    ) {
      togglePopup();
      setErrorMessage(displayerror => [...displayerror, "Reciever not found"]);
    }
    if (fromNameChecker.balance < parseInt(amount)) {
      togglePopup();
      setErrorMessage(displayerror => [
        ...displayerror,
        "Insufficient sender balance",
      ]);
    }
    if (fromNameChecker.name === tonameChecker.name) {
      togglePopup();
      setErrorMessage(displayerror => [
        ...displayerror,
        "Invalid transaction, sender and reciever same account",
      ]);
    }
    if (parseInt(amount) < 0) {
      togglePopup();
      setErrorMessage(displayerror => [
        ...displayerror,
        "Invalid Transfer Amount",
      ]);
    } else {
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

      navigate(`/complete/${transactionId}`);

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
      {isOpen && (
        <Popup
          content={errormessage.map(displayed => {
            return <p>{displayed}</p>;
          })}
          handleClose={clearErrors}
        />
      )}
      <form className="formt" onSubmit={TransferThis}>
        <div className="fromdivname">
          <label htmlFor="fromname" className="form-label">
            From
          </label>
          <input
            list="namelist"
            pattern="[a-zA-Z\s]+"
            className="form-fields"
            id="fromname"
            value={fromName}
            onChange={e => setfromName(e.target.value)}
            required
            autoComplete="off"
          />
          <datalist id="namelist">
            <NameDataListGenerator />
          </datalist>
        </div>

        <div className="fromacct">
          <label htmlFor="fromaccountNumber" className="form-label">
            From Account Number
          </label>
          <input
            type="number"
            list="listacct"
            className="form-fields"
            id="fromaccountNumber"
            value={fromAccountNumber}
            onChange={e => setfromAccountNumber(e.target.value)}
            required
            autoComplete="off"
          />
          <datalist id="listacct">
            <AccntNumDataListGenerator />
          </datalist>
        </div>

        <div className="todivname">
          <label htmlFor="toname" className="form-label">
            To
          </label>
          <input
            list="namelist"
            pattern="[a-zA-Z\s]+"
            className="form-fields"
            id="toname"
            value={toName}
            onChange={e => setToName(e.target.value)}
            required
            autoComplete="off"
          />
          <datalist id="namelist">
            <NameDataListGenerator />
          </datalist>
        </div>

        <div className="toacct">
          <label htmlFor="toaccountNumber" className="form-label">
            To Account Number
          </label>
          <input
            type="number"
            list="listacct"
            className="form-fields"
            id="toaccountNumber"
            value={toAccountNumber}
            onChange={e => settoAccountNumber(e.target.value)}
            required
            autoComplete="off"
          />
          <datalist id="listacct">
            <AccntNumDataListGenerator />
          </datalist>
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
            type="number"
            pattern="[0-9.]+"
            className="form-fields"
            id="amount"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value))}
            required
            autoComplete="off"
          />
        </div>

        <button type="submit" className="submitt">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransferFunc;
