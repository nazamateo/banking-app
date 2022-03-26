import React from "react";
import DashboardBudgetFunc from "../../../components/budget-app/Dashboard/BudgetDashboard";
import styles from "../MainPage/MainPage.module.scss";
//import "./dashboard.scss";

function DashboardBudget() {
  return (
    <div className={styles.page}>
      <DashboardBudgetFunc />
    </div>
  );
}

export default DashboardBudget;
