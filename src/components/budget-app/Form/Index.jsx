import React, { useEffect, useState } from "react";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import styles from "../Form/Form.module.scss";
import ProgressBar from "../../General/Helpers/Progressbar";
import { BillerDataListGenerator } from "../../General/Helpers/Datalist";
import Popup from "../../General/Helpers/ConfirmExpense";
import { getBankAccounts } from "../../../services/LocalStorage";
import DateToday from "../../../utils/DateToday";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BudgetForm() {
  const [formValues, setFormValues] = useState([
    { description: "", number: "", account: "" },
  ]);
  const [amountSum, setAmountSum] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [inputAdminPassword, setInputAdminPassword] = useState("");
  const [displayError, setDisplayError] = useState(
    "Please transaction request"
  );
  let [num, setNum] = useState(3);
  let [currentAppUser, setCurrentAppUser] = useState(getBudgetAppUSer());
  let [budgetBalance, setBudgetBalance] = useState(currentAppUser.balance);

  const confirmExpense = index => {
    let bankAccounts = getBankAccounts();
    let newFormValues = formValues;
    let thisExpense = parseInt(newFormValues[index].number);

    const indexofuser = currentAppUser.accountNumber - 1;

    currentAppUser.balance -= thisExpense;

    let reciever = bankAccounts.find(bankAccount => {
      return bankAccount.name === newFormValues[index].account;
    });

    let transactionaction;
    let currentAppUserTransactionObject;
    let recieverTransactionObject;
    if (!reciever) {
      transactionaction = "expense";
      currentAppUserTransactionObject = {
        transactionDate: DateToday(),
        action: transactionaction,
        transactionId: newFormValues[index].description,
        receiver: newFormValues[index].account.split(/-(.*)/)[0],
        receiverAccountNumber: newFormValues[index].account.split(/-(.*)/)[1],
        oldBalance: currentAppUser.balance + thisExpense,
        newBalance: currentAppUser.balance,
        mode: "ONLINE",
      };
    } else {
      const indexofreciever = reciever.accountNumber - 1;
      transactionaction = "transfer";
      recieverTransactionObject = {
        transactionDate: DateToday(),
        action: transactionaction,
        transactionId: newFormValues[index].description,
        sender: currentAppUser.name,
        senderAccountNumber: currentAppUser.accountNumber,
        oldBalance: reciever.balance,
        newBalance: reciever.balance + thisExpense,
        mode: "ONLINE",
      };

      reciever.balance = reciever.balance + thisExpense;
      reciever.transactionHistory.unshift(recieverTransactionObject);
      bankAccounts[indexofreciever] = reciever;
      currentAppUserTransactionObject = {
        transactionDate: DateToday(),
        action: transactionaction,
        transactionId: newFormValues[index].description,
        receiver: newFormValues[index].account,
        receiverAccountNumber: reciever.accountNumber,
        oldBalance: currentAppUser.balance + thisExpense,
        newBalance: currentAppUser.balance,
        mode: "ONLINE",
      };
    }

    currentAppUser.transactionHistory.unshift(currentAppUserTransactionObject);
    bankAccounts[indexofuser] = currentAppUser;

    localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    setBudgetBalance(currentAppUser.balance);
    removeFormFields(index);
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let handleBlur = (i, e) => {
    let filteredArray = [];
    let newFormValues = [...formValues];
    var total = 0;
    for (i = 0; i < newFormValues.length; i++) {
      filteredArray.push(+newFormValues[i].number);
    }
    for (var numbers in filteredArray) {
      total += filteredArray[numbers];
    }
    setAmountSum(total);
  };
  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { description: "", number: "", account: "" },
    ]);
  };

  let removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    let filteredArray = [];
    var total = 0;
    for (i = 0; i < newFormValues.length; i++) {
      filteredArray.push(+newFormValues[i].number);
    }
    for (var numbers in filteredArray) {
      total += filteredArray[numbers];
    }
    setFormValues(newFormValues);
    setAmountSum(total);
  };

  let handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <>
      <div className={styles.form}>
        <h1 className={styles.expensesheading}>MY EXPENSES</h1>
        <form onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className={index} key={index}>
              <input
                className={styles.field}
                type="text"
                name="description"
                placeholder="DESCRIPTION"
                value={element.description || ""}
<<<<<<< HEAD
                onChange={(e) => handleChange(index, e)}
                autoComplete="off"
=======
                onChange={e => handleChange(index, e)}
>>>>>>> 500f712c7814f3753b27f6047cf1ba12ec55e71f
              />
              <input
                className={styles.field}
                type="text"
                list="accountlist"
                name="account"
                placeholder="BILLER"
                value={element.account || ""}
<<<<<<< HEAD
                onChange={(e) => handleChange(index, e)}
                autoComplete="off"
=======
                onChange={e => handleChange(index, e)}
>>>>>>> 500f712c7814f3753b27f6047cf1ba12ec55e71f
              />
              <datalist id="accountlist">
                <BillerDataListGenerator />
              </datalist>
              <input
                className={styles.fieldcost}
                type="number"
                name="number"
                placeholder="AMOUNT"
                value={element.number || ""}
                onChange={e => handleChange(index, e)}
                onBlur={e => handleBlur(index, e)}
              />
              <button
                type="button"
                className={styles.delete}
                onClick={() => confirmExpense(index)}
              >
                Confirm
              </button>
              {index ? (
                <button
                  type="button"
                  className={styles.delete}
                  onClick={() => removeFormFields(index)}
                >
                  Del
                </button>
              ) : null}
            </div>
          ))}
          <div className="total-section">
            <p className={styles.total}>TOTAL</p>
            <p className={styles.amountsum}>
              {Intl.NumberFormat("en-PH", {
                currency: "PHP",
                style: "currency",
              }).format(amountSum)}
            </p>
          </div>

          <div className="button-section">
            <button
              className={styles.add}
              type="button"
              onClick={() => addFormFields()}
            >
              Add
            </button>
            <button className={styles.submit} type="submit">
              Withdraw
            </button>
          </div>
        </form>
      </div>{" "}
      <div className={styles.statcontainer}>
        <h1 className={styles.hellow}>Hello {currentAppUser.name}!</h1>
        <h1 className={styles.hellow}>
          Your bank account balance is:
          {Intl.NumberFormat("en-PH", {
            currency: "PHP",
            style: "currency",
          }).format(currentAppUser.balance)}
        </h1>
        <h1 className={styles.hellow}>Your projected account balance is:</h1>
        <CircularProgressbar
          value={Math.round(
            (100 * (budgetBalance - amountSum)) / budgetBalance
          )}
          text={Intl.NumberFormat("en-PH", {
            currency: "PHP",
            style: "currency",
          }).format(budgetBalance - amountSum)}
          styles={buildStyles({
            // Text size
            textSize: "15px",
          })}
        />
      </div>
    </>
  );
}
export default BudgetForm;
