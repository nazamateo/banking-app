import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateBankAccountBalance,
  getBankAccountName,
} from "../../../services/LocalStorage";
import DateToday from "../../General/Helpers/DateToday";
import { v4 as uuidv4 } from "uuid";
import Popup from "../../pop-up/ErrorPopup";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
import styles from "./Withdraw.module.scss";
import FormInput from "../../forms/FormInput";

const WithdrawFunc = () => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [nameChecker, setnameChecker] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setnameChecker(getBankAccountName(name));
  }, [name]);

  function togglePopup() {
    setIsOpen(true);
  }
  function clearErrors() {
    setIsOpen(false);
    setErrorMessage([]);
  }

  function errorHandler() {
    if (
      !nameChecker ||
      nameChecker.accountNumber !== accountNumber ||
      nameChecker.balance < withdraw ||
      withdraw < 0
    ) {
      if (!nameChecker) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Account Name does not exist",
        ]);
      }
      if (nameChecker.accountNumber !== accountNumber) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Account Number does not match",
        ]);
      }
      if (nameChecker.balance < withdraw) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Insufficient Balance",
        ]);
      }
      if (withdraw < 0) {
        togglePopup();
        setErrorMessage(displayerror => [
          ...displayerror,
          "Invalid Withdraw Amount",
        ]);
      }
      return true;
    }
    return false;
  }
  function stateResetter() {
    setName("");
    setTransactionDate(DateToday);
    setAccountNumber("");
    setWithdraw("");
    setTransactionId(uuidv4());
  }

  const logTransaction = e => {
    e.preventDefault();

    if (!errorHandler()) {
      const transactionObject = {
        accountName: name,
        accountNumber: accountNumber,
        transactionDate: transactionDate,
        transactionId: transactionId,
        action: "withdraw",
        oldBalance: nameChecker.balance,
        newBalance: nameChecker.balance - withdraw,
      };

      updateBankAccountBalance(
        name,
        accountNumber,
        withdraw,
        "withdraw",
        transactionObject
      );
      stateResetter();
      navigate(`/complete/${transactionId}`);
    }
  };
  return (
    <>
      {isOpen && (
        <Popup
          content={errormessage.map(displayed => {
            return <p>{displayed}</p>;
          })}
          handleClose={clearErrors}
        />
      )}
      <form className={styles.formd} onSubmit={logTransaction}>
        <div className={styles.divname}>
          <FormInput
            name="name"
            list="namelist"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
            pattern="[a-zA-Z\s]+"
            required={true}
          />
          <datalist id="namelist">
            <NameDataListGenerator />
          </datalist>
        </div>

        <div className={styles.acct}>
          <FormInput
            type="number"
            name="accountNumber"
            list="listacct"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Account Number"
            value={accountNumber}
            onChange={e => setAccountNumber(+e.target.value)}
            autoComplete="off"
            required={true}
          />
          <datalist id="listacct">
            <AccntNumDataListGenerator />
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

        <div className={styles.divbal}>
          <FormInput
            type="number"
            name="withdraw"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Withdraw Amount"
            value={withdraw}
            autoComplete="off"
            onChange={e => setWithdraw(+e.target.value)}
            required={true}
            pattern="[0-9.]+"
          />
        </div>

        <button type="submit" className={styles.submitd}>
          Submit
        </button>
      </form>
    </>
  );
};

export default WithdrawFunc;
