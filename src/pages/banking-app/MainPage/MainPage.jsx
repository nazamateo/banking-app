import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./MainPage.scss";
import { getAdminAccounts } from "../../../services/LocalStorage";

//COMPONENTS
import SideBar from "../../../components/layout/SideBar/SideBar";
import NavBar from "../../../components/layout/NavBar/NavBar";

//PAGES
import FormPage from "../AddUserForm";
import AllUsersPage from "../AllUsers";
import TransferPage from "../Transfer";
import DepositPage from "../Deposit";
import DashboardPage from "../Dashboard";
import WithdrawPage from "../Withdraw";
import SuccessTransactionPage from "../TransactionComplete";
import NotFoundPage from "../NotFound";
import SuccessAddUserPage from "../AddUserSuccessful";
import IndividualUserPage from "../IndividualUser";
import EditFormPage from "../EditForm";

const ROUTES = [
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
  const [selectedLink, setSelectedLink] = useState(
    localStorage.getItem("selectedLink")
  );
  const [username, setUsername] = useState("");
  const location = useLocation();

  const getLoggedInName = () => {
    const loggedInAccount = getAdminAccounts().find(
      adminAccount => adminAccount.isLoggedIn === true
    );

    setUsername(loggedInAccount.username);
  };

  useEffect(() => {
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
      />
      <div className="main-layout">
        <SideBar getWidth={getSideBarWidth} getLink={getSelectedLink} />
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
