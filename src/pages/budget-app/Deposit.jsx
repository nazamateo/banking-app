import React from "react";
import DepositQR from "../../components/budget-app/DepositQR/index";
//import "./dashboard.scss";

function DepositBudget({ bankAccounts }) {
  return (
    <div className="page">
      <h1>Deposit via QR</h1>
      <DepositQR bankAccounts={bankAccounts} />
    </div>
  );
}

export default DepositBudget;
