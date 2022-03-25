import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../../utils/DateToday";
import { v4 as uuidv4 } from "uuid";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../General/Helpers/Datalist";
import styles from "./Withdraw.module.scss";
import FormInput from "../../forms/FormInput";
import {
  getBankAccountName,
  updateBankAccountBalance,
} from "../../../utils/bankAccounts";
import { transactionValidation } from "../../../utils/formValidation";

const WithdrawFunc = ({ bankAccounts, setBankAccounts }) => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [accountChecker, setAccountChecker] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const account = getBankAccountName(bankAccounts, name);
    if (!account) {
      setAccountChecker({ name: null, accountNumber: null, balance: null });
      return;
    }
    setAccountChecker(account);
  }, [name]);

  function stateResetter() {
    setName("");
    setTransactionDate(DateToday);
    setAccountNumber("");
    setWithdraw("");
    setTransactionId(uuidv4());
  }

  const logTransaction = e => {
    e.preventDefault();

    const errors = transactionValidation(
      accountChecker.name,
      name,
      accountChecker.accountNumber,
      accountNumber,
      withdraw,
      accountChecker.balance,
      "withdraw"
    );

    console.log(errors);

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      return;
    }

    const transactionObject = {
      accountName: name,
      accountNumber: accountNumber,
      transactionDate: transactionDate,
      transactionId: transactionId,
      action: "withdraw",
      oldBalance: accountChecker.balance,
      newBalance: accountChecker.balance - withdraw,
      mode: "OTC",
    };
    const updatedAccount = updateBankAccountBalance(
      bankAccounts,
      name,
      accountNumber,
      withdraw,
      "withdraw",
      transactionObject
    );

    setBankAccounts(updatedAccount);

    navigate(`/banking/complete/${transactionId}`);
    stateResetter();
  };
  return (
    <>
      <form className={styles.formd} onSubmit={logTransaction} noValidate>
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
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
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
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Transaction Date"
            value={transactionDate}
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
            label="Withdraw Amount (₱)"
            value={withdraw}
            autoComplete="off"
            onChange={e => setWithdraw(parseFloat(e.target.value))}
            required={true}
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

export default WithdrawFunc;
