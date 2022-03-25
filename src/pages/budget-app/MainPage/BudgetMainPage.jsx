import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./MainPage.module.scss";

//COMPONENTS
import NavBar from "../../../components/NavBar/NavBar";

import DashboardBudget from "../Dashboard/BudgetDashboard";
import TransferBudget from "../Transfer/Transfer";
import DepositBudget from "../Deposit";
import AddBillers from "../AddBillers/AddBillers";

import TopBarBudget from "../../../components/SideBar/TopBarBudget";

//import BudgetTable from "../BudgetTable/BudgetTable";
//import NotFoundPage from "../../banking-app/NotFound";

//PAGES

function BudgetMainPage({
  bankAccounts,
  setBankAccounts,
  isUserAuthenticated,
  setIsUserAuthenticated,
}) {
  const [selectedLink, setSelectedLink] = useState(
    localStorage.getItem("selectedLink")
  );

  const location = useLocation();

  const getSelectedLink = selectedLink => {
    setSelectedLink(selectedLink);
  };

  return (
    <>
      <NavBar
        linkSelected={selectedLink}
        accounts={bankAccounts}
        setAccounts={setBankAccounts}
        setAuthentication={setIsUserAuthenticated}
        isAuthenticated={isUserAuthenticated}
      />
      <TopBarBudget getLink={getSelectedLink} />
      <div className={styles.mainLayout}>
        <Routes location={location}>
          <Route path="dashboard" element={<DashboardBudget />} />
          <Route path="transfer" element={<TransferBudget />} />
          <Route path="addbillers" element={<AddBillers />} />
          <Route
            path="deposit"
            element={<DepositBudget bankAccounts={bankAccounts} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default BudgetMainPage;
