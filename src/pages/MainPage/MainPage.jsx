import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./MainPage.scss";

//COMPONENTS
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

//PAGES
import FormPage from "../UsersForm/DisplayForm";
import AllUsersPage from "../Users/Users";
import TransferPage from "../Transfer/Transfer";
import DepositPage from "../Deposit/Deposit";
import DashboardPage from "../Dashboard/Dashboard";
import WithdrawPage from "../Withdraw/Withdraw";
import SuccessTransactionPage from "../Success/TransactionComplete";
import NotFoundPage from "../NotFound/NotFound";
import SuccessAddUserPage from "../UsersForm/AddUserSuccessful";
import IndividualUserPage from "../IndividualUser/IndividualUser";
import EditFormPage from "../EditUserDetails/EditForm";

function MainPage() {
  const [sideBarWidth, setSideBarWidth] = useState(0);

  const getSideBarWidth = obtainedSideBarWidth => {
    const newWidth = obtainedSideBarWidth;
    setSideBarWidth(newWidth);
  };

  return (
    <div>
      <NavBar navBarWidth={sideBarWidth} />
      <div className="main-layout">
        <SideBar getWidth={getSideBarWidth} />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="users" element={<AllUsersPage />} />
          <Route path="users/:accountNumber" element={<IndividualUserPage />} />
          <Route path="users/newaccount" element={<FormPage />} />
          <Route
            path="users/newaccount/success/:accountNumber"
            element={<SuccessAddUserPage />}
          />
          <Route path="users/edit/:accountNumber" element={<EditFormPage />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="transfer" element={<TransferPage />} />
          <Route
            path="complete/:transactionId"
            element={<SuccessTransactionPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;

//pseudo

/*create another routing for edit forms.
get url params again to edit form
fix index routing

do not use async function, localStorage is a synchronous API.
*/
