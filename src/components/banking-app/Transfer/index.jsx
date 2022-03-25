import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../../utils/DateToday";
import styles from "./Transfer.module.scss";
import { v4 as uuidv4 } from "uuid";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
import FormInput from "../../forms/FormInput";
import {
  getBankAccountName,
  transferBankAccountBalance,
} from "../../../utils/bankAccounts";
import { transactionValidation } from "../../../utils/formValidation";

const TransferFunc = ({ bankAccounts, setBankAccounts }) => {
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [fromName, setfromName] = useState("");
  const [fromAccountNumber, setfromAccountNumber] = useState("");
  const [toName, setToName] = useState("");
  const [toAccountNumber, settoAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [fromAccountChecker, setFromAccountChecker] = useState("");
  const [toAccountChecker, setToAccountChecker] = useState("");
  const [fromErrors, setFromErrors] = useState({});
  const [toErrors, setToErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const account = getBankAccountName(bankAccounts, fromName);
    if (!account) {
      setFromAccountChecker({ name: null, accountNumber: null, balance: null });
      return;
    }
    setFromAccountChecker(account);
  }, [fromName]);

  useEffect(() => {
    const account = getBankAccountName(bankAccounts, toName);
    if (!account) {
      setToAccountChecker({ name: null, accountNumber: null });
      return;
    }
    setToAccountChecker(account);
  }, [toName]);

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

    const fromErrors = transactionValidation(
      fromAccountChecker.name,
      fromName,
      fromAccountChecker.accountNumber,
      fromAccountNumber,
      amount,
      fromAccountChecker.balance,
      "withdraw",
      toAccountChecker.accountNumber
    );

    const toErrors = transactionValidation(
      toAccountChecker.name,
      toName,
      toAccountChecker.accountNumber,
      toAccountNumber,
      "",
      "",
      "",
      fromAccountChecker.accountNumber
    );

    if (
      Object.values(fromErrors).some(error => error !== null) &&
      Object.values(toErrors).some(error => error !== null)
    ) {
      setFromErrors(fromErrors);
      setToErrors(toErrors);
      return;
    }

    const senderTransactionObject = {
      transactionDate,
      action: "transfer",
      transactionId,
      receiver: toName,
      receiverAccountNumber: toAccountNumber,
      oldBalance: fromAccountChecker.balance,
      newBalance: fromAccountChecker.balance - amount,
      mode: "OTC",
    };
    const receiverTransactionObject = {
      transactionDate,
      action: "transfer",
      transactionId,
      sender: fromName,
      senderAccountNumber: fromAccountNumber,
      oldBalance: toAccountChecker.balance,
      newBalance: toAccountChecker.balance + amount,
      mode: "OTC",
    };
    const updatedAccounts = transferBankAccountBalance(
      bankAccounts,
      toName,
      toAccountNumber,
      fromName,
      fromAccountNumber,
      amount,
      senderTransactionObject,
      receiverTransactionObject
    );

    setBankAccounts(updatedAccounts);

    navigate(`/banking/complete/${transactionId}`);
    stateResetter();
  };
  return (
    <>
      <form className={styles.formt} onSubmit={logTransaction} noValidate>
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
            required={true}
            error={fromErrors.name}
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
            onChange={e => setfromAccountNumber(parseFloat(e.target.value))}
            autoComplete="off"
            required={true}
            error={fromErrors.accountNumber}
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
            required={true}
            error={toErrors.name}
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
            onChange={e => settoAccountNumber(parseFloat(e.target.value))}
            autoComplete="off"
            required={true}
            error={toErrors.accountNumber}
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
            onChange={e => setAmount(parseFloat(e.target.value))}
            required={true}
            error={fromErrors.amount}
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
