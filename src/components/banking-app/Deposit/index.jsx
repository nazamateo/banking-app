import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../General/Helpers/DateToday";
import {
  getBankAccountName,
  updateBankAccountBalance,
} from "../../../services/LocalStorage";
import { v4 as uuidv4 } from "uuid";
import Popup from "../../pop-up/ErrorPopup";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
import FormInput from "../../forms/FormInput";
import styles from "./Deposit.module.scss";

const DepositFunc = () => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [deposit, setDeposit] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  const [nameChecker, setNameChecker] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setNameChecker(getBankAccountName(name));
  }, [name]);

  function togglePopup() {
    setIsOpen(!isOpen);
  }
  function clearErrors() {
    setIsOpen(!isOpen);
    setErrorMessage([]);
  }

  function stateResetter() {
    setName("");
    setTransactionDate(DateToday());
    setAccountNumber("");
    setDeposit("");
    setTransactionId(uuidv4());
  }

  function errorHandler() {
    if (
      !nameChecker ||
      nameChecker.accountNumber !== accountNumber ||
      deposit < 0
    ) {
      if (!nameChecker) {
        togglePopup();
        setErrorMessage((displayerror) => [
          ...displayerror,
          "Account Name does not exist",
        ]);
      }
      if (nameChecker.accountNumber !== accountNumber) {
        togglePopup();
        setErrorMessage((displayerror) => [
          ...displayerror,
          "Account Number does not match",
        ]);
      }
      if (deposit < 0) {
        togglePopup();
        setErrorMessage((displayerror) => [
          ...displayerror,
          "Invalid deposit amount",
        ]);
      }
      return true;
    }
    return false;
  }

  const logTransaction = (e) => {
    e.preventDefault();

    if (!errorHandler()) {
      const transactionDetail = {
        accountName: name,
        accountNumber: accountNumber,
        transactionDate: transactionDate,
        transactionId: transactionId,
        action: "deposit",
        oldBalance: nameChecker.balance,
        newBalance: nameChecker.balance + deposit,
        mode: "over the counter",
      };
      updateBankAccountBalance(
        name,
        accountNumber,
        deposit,
        "deposit",
        transactionDetail
      );
      stateResetter();
      navigate(`/banking/complete/${transactionId}`);
    }
  };

  return (
    <>
      {isOpen && (
        <Popup
          content={errormessage.map((displayed) => {
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setAccountNumber(+e.target.value)}
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
            name="deposit"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Deposit Amount"
            value={deposit}
            autoComplete="off"
            onChange={(e) => setDeposit(+e.target.value)}
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

export default DepositFunc;
