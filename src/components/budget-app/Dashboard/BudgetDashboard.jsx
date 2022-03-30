import React from "react";
import { useState } from "react";
import styles from "./BudgetDashboard.module.scss";
import BudgetForm from "../Form/Index";
import Logo from "../../../components/Logo";
import logo from "../../../assets/images/bank-logo-lightblue.png";

function DashboardBudgetFunc() {
  return (
    <div className="page">
      <Logo link={logo} name="DigiBank" className={styles.logoContainer} />
    </div>
  );
}

export default DashboardBudgetFunc;
