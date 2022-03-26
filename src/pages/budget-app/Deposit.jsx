import React from "react";
import DepositQR from "../../components/budget-app/DepositQR/index";
import styles from "../budget-app/MainPage/MainPage.module.scss";

function DepositBudget({ bankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Deposit via QR</h1>
      <div className={styles.pageMainContent}>
        <DepositQR bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default DepositBudget;
