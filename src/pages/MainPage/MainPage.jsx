import React, { useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

const routes = [
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  { path: "users", element: <AllUsersPage /> },
  ,
  { path: "users/:accountNumber", element: <IndividualUserPage /> },
  { path: "users/newaccount", element: <FormPage /> },
  {
    path: "users/newaccount/success/:accountNumber",
    element: <SuccessAddUserPage />,
  },
  { path: "users/edit/:accountNumber", element: <EditFormPage /> },
  { path: "deposit", element: <DepositPage /> },
  { path: "withdraw", element: <WithdrawPage /> },
  { path: "transfer", element: <TransferPage /> },
  { path: "complete/:transactionId", element: <SuccessTransactionPage /> },
  { path: "*", element: <NotFoundPage /> },
];

function MainPage() {
  const [sideBarWidth, setSideBarWidth] = useState(0);
  const location = useLocation();
  const nodeRef = useRef(null);

  const getSideBarWidth = obtainedSideBarWidth => {
    const newWidth = obtainedSideBarWidth;
    setSideBarWidth(newWidth);
  };

  return (
    <div>
      <NavBar navBarWidth={sideBarWidth} />
      <div className="main-layout">
        <SideBar getWidth={getSideBarWidth} />
        <TransitionGroup className="page">
          <CSSTransition key={location.key} classNames="next" timeout={300}>
            <Routes location={location}>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  element={route.element}
                  nodeRef={nodeRef}
                />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default MainPage;
