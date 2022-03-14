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

import DashboardPage from "../Dashboard/Dashboard";
import WithdrawPage from "../Withdraw/Withdraw";
import SuccessTransactionPage from "../Success/TransactionComplete";
import NotFoundPage from "../NotFound/NotFound";
import SuccessAddUserPage from "../UsersForm/AddUserSuccessful";

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
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="users" element={<AllUsersPage />} />
          {/* <Route path="users/:accountNumber" element={</>} /> */}
          <Route path="users/newaccount" element={<FormPage />} />
          <Route
            path="users/newaccount/success/:accountNumber"
            element={<SuccessAddUserPage />}
          />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="transfer" element={<TransferPage />} />
          <Route
            path="success/:transactionId"
            element={<SuccessTransactionPage />}
          />

          {/* <Route path="transaction-success/:transacId" element={</>} />< */}
        </Routes>
      </div>
    </div>
  );
}

//lipat natin yung bawat successful page sa corresponding pages nila

//put <Route path=":transactionId" as children sa withdraw transfer and deposit>
// then sa window.location.pathName, doon istringliteral natin para mapunta sa mismong transaction id na page

//Success page isang component na lang tapos dapat may parameter don kung anong action yung ginawa
export default MainPage;
