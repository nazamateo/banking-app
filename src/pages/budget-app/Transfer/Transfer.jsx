import React from "react";
import BudgetForm from "../../../components/budget-app/Form/Index";
import styles from "../MainPage/MainPage.module.scss";
//import "./dashboard.scss";

function TransferBudget() {
  return (
    <div className={styles.page}>
      <BudgetForm />
    </div>
  );
}

export default TransferBudget;
