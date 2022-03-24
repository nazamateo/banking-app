import React, { useState, useEffect, useContext } from "react";
import DateToday from "../../General/Helpers/DateToday";
import styles from "./Transfer.module.scss";
import { v4 as uuidv4 } from "uuid";
import Popup from "../../pop-up/ErrorPopup";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
import FormInput from "../../forms/FormInput";
import { BankAccountsContext } from "../../../context/BankAccountContext";

const TransferFunc = () => {
  const { transferBankAccountBalance, getBankAccountName, bankAccounts } =
    useContext(BankAccountsContext);
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [fromName, setfromName] = useState("");
  const [fromAccountNumber, setfromAccountNumber] = useState("");
  const [toName, setToName] = useState("");
  const [toAccountNumber, settoAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fromNameChecker, setFromNameChecker] = useState("");
  const [toNameChecker, setToNameChecker] = useState("");

  useEffect(() => {
    setFromNameChecker(getBankAccountName(fromName));
  }, [fromName]);

  useEffect(() => {
    setToNameChecker(getBankAccountName(toName));
  }, [toName]);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function clearErrors() {
    setIsOpen(!isOpen);
    setErrorMessage([]);
  }

  function errorHandler() {
    if (
      fromNameChecker == null ||
      fromNameChecker.accountNumber !== fromAccountNumber ||
      toNameChecker == null ||
      toNameChecker.accountNumber !== toAccountNumber ||
      fromNameChecker.balance < amount ||
      fromNameChecker.name === toNameChecker.name ||
      amount < 0
    ) {
      if (
        fromNameChecker == null ||
        fromNameChecker.accountNumber !== fromAccountNumber
      ) {
        togglePopup();
        setErrorMessage(displayerror => [...displayerror, "Sender not found"]);
      }
      if (
        toNameChecker == null ||
        toNameChecker.accountNumber !== toAccountNumber
      ) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Receiver not found",
        ]);
      }
      if (fromNameChecker.balance < amount) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Insufficient sender balance",
        ]);
      }
      if (fromNameChecker.name === toNameChecker.name) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Invalid transaction, sender and receiver same account",
        ]);
      }
      if (amount < 0) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Invalid Transfer Amount",
        ]);
      }
      return true;
    }
    return false;
  }
  function stateResetter() {
    setTransactionDate(DateToday);
    setfromName("");
    setfromAccountNumber("");
    setToName("");
    settoAccountNumber("");
    setAmount("");
    setTransactionId(uuidv4());
  }

  const logTransaction = e => {
    e.preventDefault();

    if (!errorHandler()) {
      const senderTransactionObject = {
        transactionDate,
        action: "transfer",
        transactionId,
        receiver: toName,
        receiverAccountNumber: toAccountNumber,
        oldBalance: fromNameChecker.balance,
        newBalance: fromNameChecker.balance - amount,
        mode: "OTC",
      };
      const receiverTransactionObject = {
        transactionDate,
        action: "transfer",
        transactionId,
        sender: fromName,
        senderAccountNumber: fromAccountNumber,
        oldBalance: toNameChecker.balance,
        newBalance: toNameChecker.balance + amount,
        mode: "OTC",
      };
      transferBankAccountBalance(
        toName,
        toAccountNumber,
        fromName,
        fromAccountNumber,
        amount,
        senderTransactionObject,
        receiverTransactionObject
      );
      stateResetter();
    }
  };
  return (
    <>
      {isOpen && (
        <Popup
          content={errorMessage.map(displayed => {
            return <p>{displayed}</p>;
          })}
          handleClose={clearErrors}
        />
      )}
      <form className={styles.formt} onSubmit={logTransaction}>
        <div className={styles.fromdivname}>
          <FormInput
            name="fromName"
            list="namelist"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="From"
            value={fromName}
            onChange={e => setfromName(e.target.value)}
            autoComplete="off"
            pattern="[a-zA-Z\s]+"
            required={true}
          />
          <datalist id="namelist">
            <NameDataListGenerator accounts={bankAccounts} />
          </datalist>
        </div>

        <div className={styles.fromacct}>
          <FormInput
            type="number"
            name="fromAccountNumber"
            list="listacct"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="From Account Number"
            value={fromAccountNumber}
            onChange={e => setfromAccountNumber(+e.target.value)}
            autoComplete="off"
            required={true}
          />
          <datalist id="listacct">
            <AccntNumDataListGenerator accounts={bankAccounts} />
          </datalist>
        </div>

        <div className={styles.todivname}>
          <FormInput
            name="toName"
            list="namelist"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="To"
            value={toName}
            onChange={e => setToName(e.target.value)}
            autoComplete="off"
            pattern="[a-zA-Z\s]+"
            required={true}
          />
          <datalist id="namelist">
            <NameDataListGenerator accounts={bankAccounts} />
          </datalist>
        </div>

        <div className={styles.toacct}>
          <FormInput
            type="number"
            name="toAccountNumber"
            list="listacct"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="To Account Number"
            value={toAccountNumber}
            onChange={e => settoAccountNumber(+e.target.value)}
            autoComplete="off"
            required={true}
          />
          <datalist id="listacct">
            <AccntNumDataListGenerator accounts={bankAccounts} />
          </datalist>
        </div>

        <div className={styles.divdate}>
          <FormInput
            type="text"
            name="transactionDate"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Transaction Date"
            value={transactionDate}
            autoComplete="off"
            disabled={true}
          />
        </div>

        <div className={styles.divamount}>
          <FormInput
            type="number"
            name="amount"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Amount (₱)"
            value={amount}
            autoComplete="off"
            onChange={e => setAmount(+e.target.value)}
            required={true}
            pattern="[0-9.]+"
          />
        </div>

        <button type="submit" className={styles.submitt}>
          Submit
        </button>
      </form>
    </>
  );
};

export default TransferFunc;
