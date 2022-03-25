import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//import "./MainPage.scss";

//COMPONENTS
import NavBar from "../../../components/layout/NavBar/NavBar";

import DashboardBudget from "../Dashboard/BudgetDashboard";
import TransferBudget from "../Transfer/Transfer";
import DepositBudget from "../Deposit/Deposit";
import AddBillers from "../AddBillers/AddBillers";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import TopBarBudget from "../../../components/layout/SideBar/TopBarBudget";
//import BudgetTable from "../BudgetTable/BudgetTable";
//import NotFoundPage from "../../banking-app/NotFound";

//PAGES

const ROUTESBUDGET = [
  {
    path: "/dashboard",
    element: <DashboardBudget />,
  },
  {
    path: "/transfer",
    element: <TransferBudget />,
  },
  {
    path: "/deposit",
    element: <DepositBudget />,
  },
  { path: "/addbillers", element: <AddBillers /> },
  // { path: "users/:accountNumber", element: <IndividualUserPage /> },
];

function BudgetMainPage() {
  const [sideBarWidth, setSideBarWidth] = useState(0);
  const [selectedLink, setSelectedLink] = useState(
    localStorage.getItem("selectedLink")
  );
  const [username, setUsername] = useState("");
  const location = useLocation();

  const getLoggedInName = () => {
    setUsername(getBudgetAppUSer().name);
  };

  useEffect(() => {
    getLoggedInName();
  }, []);

  const getSelectedLink = (selectedLink) => {
    setSelectedLink(selectedLink);
  };

  return (
    <div>
      <NavBar
        navBarWidth={sideBarWidth}
        linkSelected={selectedLink}
        adminUsername={username}
      />
      <TopBarBudget getLink={getSelectedLink} />
      <div className="main-layout">
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="next" timeout={500}>
            <Routes location={location}>
              {ROUTESBUDGET.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default BudgetMainPage;
