import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../../utils/DateToday";
import { v4 as uuidv4 } from "uuid";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
import FormInput from "../../forms/FormInput";
import ScanQr from "./ScanQr";
import styles from "./Deposit.module.scss";
import {
  updateBankAccountBalance,
  getBankAccountName,
} from "../../../utils/bankAccounts";
import { transactionValidation } from "../../../utils/formValidation";

const DepositFunc = ({ bankAccounts, setBankAccounts }) => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [deposit, setDeposit] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [accountChecker, setAccountChecker] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const account = getBankAccountName(bankAccounts, name);
    if (!account) {
      setAccountChecker({ name: null, accountNumber: null });
      return;
    }
    setAccountChecker(account);
  }, [name]);

  function stateResetter() {
    setName("");
    setTransactionDate(DateToday());
    setAccountNumber("");
    setDeposit("");
    setTransactionId(uuidv4());
  }

  const logTransaction = e => {
    e.preventDefault();

    const errors = transactionValidation(
      accountChecker.name,
      name,
      accountChecker.accountNumber,
      accountNumber,
      deposit
    );

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    const transactionDetail = {
      accountName: name,
      accountNumber,
      transactionDate,
      transactionId,
      action: "deposit",
      oldBalance: accountChecker.balance,
      newBalance: accountChecker.balance + deposit,
      mode: "OTC",
    };

    const updatedAccount = updateBankAccountBalance(
      bankAccounts,
      name,
      accountNumber,
      deposit,
      "deposit",
      transactionDetail
    );

    setBankAccounts(updatedAccount);

    navigate(`/banking/complete/${transactionId}`);

    stateResetter();
  };

  return (
    <>
      <div className={styles.scanQrContainer}>
        <ScanQr />
      </div>
      <form className={styles.formd} onSubmit={logTransaction} noValidate>
        <div className={styles.divname}>
          <FormInput
            name="name"
            list="namelist"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="off"
            required={true}
            error={errors.name}
          />
          <datalist id="namelist">
            <NameDataListGenerator accounts={bankAccounts} />
          </datalist>
        </div>
        <div className={styles.acct}>
          <FormInput
            type="number"
            name="accountNumber"
            list="listacct"
            label="Account Number"
            value={accountNumber}
            onChange={e => setAccountNumber(parseFloat(e.target.value))}
            autoComplete="off"
            required={true}
            error={errors.accountNumber}
          />
          <datalist id="listacct">
            <AccntNumDataListGenerator accounts={bankAccounts} />
          </datalist>
        </div>

        <div className={styles.divdate}>
          <FormInput
            type="text"
            name="transactionDate"
            label="Transaction Date"
            value={transactionDate}
            disabled={true}
          />
        </div>

        <div className={styles.divbal}>
          <FormInput
            type="number"
            name="deposit"
            label="Deposit Amount (₱)"
            value={deposit}
            autoComplete="off"
            onChange={e => setDeposit(parseFloat(e.target.value))}
            required={true}
            pattern="[0-9.]+"
            error={errors.amount}
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
