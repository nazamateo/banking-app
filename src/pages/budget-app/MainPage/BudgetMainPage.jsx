import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//import "./MainPage.scss";

//COMPONENTS
//import SideBar from "../../../components/SideBar/SideBar";
import SideBarBudget from "../../../components/General/SideBarBudget/SideBarBudget";
import NavBar from "../../../components/NavBar/NavBar";

//PAGES
//import FormPage from "../UsersForm/DisplayForm";
//import AllUsersPage from "../Users/Users";
//import TransferPage from "../Transfer/Transfer";
//import DepositPage from "../Deposit/Deposit";
//import DashboardPage from "../Dashboard/Dashboard";
//import WithdrawPage from "../Withdraw/Withdraw";
//import SuccessTransactionPage from "../Success/TransactionComplete";
//import NotFoundPage from "../NotFound/NotFound";
//import SuccessAddUserPage from "../UsersForm/AddUserSuccessful";
import IndividualUserPage from "../../banking-app/IndividualUser/IndividualUser";
import EditFormPage from "../../banking-app/EditUserDetails/EditForm";
//import EditFormPage from "../EditUserDetails/EditForm";

import DashboardBudget from "../Dashboard/Dashboard";
import BudgetTable from "../BudgetTable/BudgetTable";

import ExpenseForm from "../ExpenseForm/Expense";
import IncomeForm from "../IncomeForm/Income";
import NotFoundPage from "../../banking-app/NotFound/NotFound";

//PAGES

const ROUTES = [
  {
    path: "/dashboardbudget",
    element: <DashboardBudget />,
  },
  { path: "users/:accountNumber", element: <IndividualUserPage /> },
  { path: "users/:accountnumber/:type/:category", element: <BudgetTable /> },

  { path: "/expense:/category", element: <ExpenseForm /> },
  { path: "/income:/category", element: <IncomeForm /> },

  { path: "*", element: <NotFoundPage /> },
];

function MainPage() {
  const [sideBarWidth, setSideBarWidth] = useState(0);
  const location = useLocation();

  const getSideBarWidth = (obtainedSideBarWidth) => {
    const newWidth = obtainedSideBarWidth;
    setSideBarWidth(newWidth);
  };

  return (
    <div>
      <NavBar navBarWidth={sideBarWidth} />
      <div className="main-layout">
        <SideBarBudget getWidth={getSideBarWidth} />
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="next" timeout={500}>
            <Routes location={location}>
              {ROUTES.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default MainPage;
