import React from "react";
import DepositQR from "../../components/budget-app/DepositQR/index";
//import "./dashboard.scss";

function DepositBudget({ bankAccounts }) {
  return (
    <div className="page">
      <DepositQR bankAccounts={bankAccounts} />
    </div>
  );
}

export default DepositBudget;
