import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./MainPage.scss";
import { getAdminAccounts } from "../../../services/LocalStorage";

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
import {
  getBankAccounts,
  updateBankAccounts,
  updateAdminAccounts,
} from "../../../services/LocalStorage";

function MainPage() {
  const [sideBarWidth, setSideBarWidth] = useState(0);
  const [selectedLink, setSelectedLink] = useState(
    localStorage.getItem("selectedLink")
  );
  const [username, setUsername] = useState("");
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());
  const [adminAccounts, setAdminAccounts] = useState(getAdminAccounts());

  const location = useLocation();

  useEffect(() => {
    updateBankAccounts(bankAccounts);
  }, [bankAccounts]);

  useEffect(() => {
    updateAdminAccounts(adminAccounts);
  }, [adminAccounts]);

  useEffect(() => {
    const getLoggedInName = () => {
      const loggedInAccount = adminAccounts.find(
        adminAccount => adminAccount.isLoggedIn === true
      );

      setUsername(loggedInAccount.username);
    };

    getLoggedInName();
  }, []);

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
        adminUsername={username}
        adminAccounts={adminAccounts}
        setAdminAccounts={setAdminAccounts}
      />
      <div className="main-layout">
        <SideBar getWidth={getSideBarWidth} getLink={getSelectedLink} />
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="next" timeout={500}>
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
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default MainPage;
