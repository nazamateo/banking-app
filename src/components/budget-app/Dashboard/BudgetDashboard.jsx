import React from "react";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import BudgetForm from "../Form/Index";
//import "./dashboard.scss";

function DashboardBudgetFunc() {
  let currentAppUser = getBudgetAppUSer();
  let budgetBalance = currentAppUser.balance;

  console.log(currentAppUser);
  return (
    <div className="page">
      <h1>₱{budgetBalance}</h1>
      <h1>Hello</h1>
      <BudgetForm />
    </div>
  );
}

export default DashboardBudgetFunc;
