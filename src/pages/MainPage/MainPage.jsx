import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./MainPage.scss";

//COMPONENTS
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";

//PAGES
import FormPage from "../UsersForm/DisplayForm";
import AllUsersPage from "../Users/Users";

//PROTOTYPE
import TransferPage from "../Transfer/Transfer";
import DepositPage from "../Deposit/Deposit";
import DashboardPage from "../Dashboard/Dashboard";
import WithdrawPage from "../Withdraw/Withdraw";

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
          <Route path="/" element={<FormPage/>} />
          <Route path="users" element={<AllUsersPage />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="withdraw" element={<WithdrawPage />} />
          <Route path="transfer" element={<TransferPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;
