import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./MainPage.scss";

//COMPONENTS
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

//PAGES
import FormPage from "../UsersForm/DisplayForm";
import SuccessAddUser from "../UsersForm/AddUserSuccessful";
import AllUsersPage from "../Users/Users";
import TransferPage from "../Transfer/Transfer";
import DepositPage from "../Deposit/Deposit";
import SuccessDepositPage from "../Deposit/DepositSuccessful";
import DashboardPage from "../Dashboard/Dashboard";
import WithdrawPage from "../Withdraw/Withdraw";
import SuccessWithdrawPage from "../Withdraw/WithdrawSuccessful";
import SuccessTransferPage from "../Transfer/TransferSuccessful";

//Route

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
          <Route path="/" element={<DashboardPage />} />
          <Route path="users" element={<AllUsersPage />} />
          <Route path="users/newaccount" element={<FormPage />} />
          <Route path="users/newaccount/success" element={<SuccessAddUser />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="deposit/success" element={<SuccessDepositPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="withdraw/success" element={<SuccessWithdrawPage />} />
          <Route path="transfer" element={<TransferPage />} />
          <Route path="transfer/success" element={<SuccessTransferPage />} />
        </Routes>
      </div>
    </div>
  );
}

//lipat natin yung bawat successful page sa corresponding pages nila

//put <Route path=":transactionId" as children sa withdraw transfer and deposit>
// then sa window.location.pathName, doon istringliteral natin para mapunta sa mismong transaction id na page
export default MainPage;
