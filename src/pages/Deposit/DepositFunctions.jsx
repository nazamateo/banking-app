import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateToday from "../../components/General/Helpers/DateToday";
import {
  getBankAccountName,
  updateBankAccountBalance,
} from "../../components/LocalStorage/LocalStorage";
import "./Deposit.scss";
import { v4 as uuidv4 } from "uuid";
import Popup from "../../components/General/Helpers/ErrorPopup";
import {
  NameDataListGenerator,
  AccntNumDataListGenerator,
} from "../../components/General/Helpers/Datalist";

//add value on options
export let transactionDetail;
export let nameChecker;

const DepositFunc = () => {
  const [name, setName] = useState("");
  const [transactionDate, setTransactionDate] = useState(DateToday);
  const [accountNumber, setAccountNumber] = useState("");
  const [deposit, setDeposit] = useState("");
  const [transactionId, setTransactionId] = useState(uuidv4());
  const [isOpen, setIsOpen] = useState(false);
  const [errormessage, setErrorMessage] = useState("");
  let navigate = useNavigate();

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  const DepositThis = e => {
    e.preventDefault();

    let nameChecker = getBankAccountName(name);

    if (!nameChecker || nameChecker.accountNumber !== parseInt(accountNumber)) {
      togglePopup();
      setErrorMessage("Account Name/Account Number does not match/exist");
    } else {
      transactionDetail = {
        accountName: name,
        accountNumber: accountNumber,
        transactionDate: transactionDate,
        transactionId: transactionId,
        action: "deposit",
        oldBalance: nameChecker.balance,
        newBalance: nameChecker.balance + parseInt(deposit),
      };

      updateBankAccountBalance(
        name,
        parseInt(accountNumber),
        parseInt(deposit),
        "deposit",
        transactionDetail
      );

      navigate(`/complete/${transactionId}`);

      setName("");
      setTransactionDate(DateToday());
      setAccountNumber("");
      setDeposit("");
      setTransactionId(uuidv4());
    }
  };

  return (
    <div>
      {isOpen && (
        <Popup content={<>{errormessage}</>} handleClose={togglePopup} />
      )}
      <form className="formd" onSubmit={DepositThis}>
        <div className="divname">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            list="namelist"
            pattern="[a-zA-Z\s]+"
            className="form-fields"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="off"
          />
          <datalist id="namelist">
            <NameDataListGenerator />
          </datalist>
        </div>

        <div className="acct">
          <label htmlFor="accountNumber" className="form-label">
            Account Number
          </label>
          <input
            type="number"
            list="listacct"
            className="form-fields"
            id="accountNumber"
            value={accountNumber}
            onChange={e => setAccountNumber(e.target.value)}
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

        <div className="divbal">
          <label htmlFor="deposit" className="form-label">
            Deposit Amount
          </label>
          <input
            type="number"
            pattern="[0-9.]+"
            className="form-fields"
            id="deposit"
            value={deposit}
            onChange={e => setDeposit(e.target.value)}
            required
            autoComplete="off"
          />
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DepositFunc;
