import React, { useEffect, useState } from "react";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import styles from "../Form/Form.module.scss";
import ProgressBar from "../../General/Helpers/Progressbar";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BudgetForm() {
  const [formValues, setFormValues] = useState([
    { description: "", number: "" },
  ]);
  const [amountSum, setAmountSum] = useState(0);
  let currentAppUser = getBudgetAppUSer();
  let budgetBalance = currentAppUser.balance;

  function ColorChanger() {}

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    ColorChanger();
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
    setFormValues([...formValues, { description: "", number: "" }]);
  };

  let removeFormFields = (i) => {
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

  let handleSubmit = (e) => {
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
                onChange={(e) => handleChange(index, e)}
              />
              <input
                className={styles.fieldcost}
                type="number"
                name="number"
                placeholder="AMOUNT"
                value={element.number || ""}
                onChange={(e) => handleChange(index, e)}
                onBlur={(e) => handleBlur(index, e)}
              />
              {index ? (
                <button
                  type="button"
                  className={styles.delete}
                  onClick={() => removeFormFields(index)}
                >
                  Delete
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
              Submit
            </button>
          </div>
        </form>
      </div>{" "}
      <h1 className={styles.hellow}>Hello {currentAppUser.name}!</h1>
      <h1 className={styles.hellow}>Your projected account balance is:</h1>
      <CircularProgressbar
        value={Math.round((100 * (budgetBalance - amountSum)) / budgetBalance)}
        text={Intl.NumberFormat("en-PH", {
          currency: "PHP",
          style: "currency",
        }).format(budgetBalance - amountSum)}
        styles={buildStyles({
          // Text size
          textSize: "15px",
        })}
      />
      ;
    </>
  );
}
export default BudgetForm;
/* <ProgressBar
        completed={Math.round(
          (100 * (budgetBalance - amountSum)) / budgetBalance
        )}
        budgetbalance={`₱${budgetBalance - amountSum}`}
      />*/
