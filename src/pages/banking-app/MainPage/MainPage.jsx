import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./MainPage.module.scss";

import SideBar from "../../../components/SideBar/SideBar";
import NavBar from "../../../components/NavBar/NavBar";

import FormPage from "../AddUserForm";
import AllUsersPage from "../AllUsers";
import TransferPage from "../Transfer";
import DepositPage from "../Deposit";
import DepositQrPage from "../DepositQr";
import DashboardPage from "../Dashboard";
import WithdrawPage from "../Withdraw";
import SuccessTransactionPage from "../TransactionComplete";
import NotFoundPage from "../NotFound";
import SuccessAddUserPage from "../AddUserSuccessful";
import IndividualUserPage from "../IndividualUser";
import EditFormPage from "../EditForm";

function MainPage({
  bankAccounts,
  setBankAccounts,
  adminAccounts,
  setAdminAccounts,
  isAdminAuthenticated,
  setIsAdminAuthenticated,
}) {
  const [sideBarWidth, setSideBarWidth] = useState(0);
  const [selectedLink, setSelectedLink] = useState("Dashboard");
  const location = useLocation();

  const getSideBarWidth = obtainedSideBarWidth => {
    setSideBarWidth(obtainedSideBarWidth);
  };

  const getSelectedLink = selectedLink => {
    setSelectedLink(selectedLink);
  };

  return (
    <div>
      <NavBar
        navBarWidth={sideBarWidth}
        linkSelected={selectedLink}
        accounts={adminAccounts}
        setAccounts={setAdminAccounts}
        setAuthentication={setIsAdminAuthenticated}
        isAuthenticated={isAdminAuthenticated}
      />
      <div className={styles.mainLayout}>
        <SideBar getWidth={getSideBarWidth} getLink={getSelectedLink} />

        <Routes location={location}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route
            path="users"
            element={<AllUsersPage bankAccounts={bankAccounts} />}
          />
          <Route
            path="users/:accountNumber"
            element={
              <IndividualUserPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="users/newaccount"
            element={
              <FormPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="users/newaccount/success/:accountNumber"
            element={<SuccessAddUserPage bankAccounts={bankAccounts} />}
          />
          <Route
            path="users/edit/:accountNumber"
            element={
              <EditFormPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="deposit"
            element={
              <DepositPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="deposit/qr"
            element={
              <DepositQrPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="withdraw"
            element={
              <WithdrawPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="transfer"
            element={
              <TransferPage
                bankAccounts={bankAccounts}
                setBankAccounts={setBankAccounts}
              />
            }
          />
          <Route
            path="complete/:transactionId"
            element={<SuccessTransactionPage bankAccounts={bankAccounts} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
