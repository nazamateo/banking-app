import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
//import "./MainPage.scss";

//COMPONENTS
import NavBar from "../../../components/layout/NavBar/NavBar";

import DashboardBudget from "../Dashboard/BudgetDashboard";
//import BudgetTable from "../BudgetTable/BudgetTable";
//import NotFoundPage from "../../banking-app/NotFound";

//PAGES

const ROUTESBUDGET = [
  {
    path: "/dashboard",
    element: <DashboardBudget />,
  },
  // { path: "users/:accountNumber", element: <IndividualUserPage /> },
];

function BudgetMainPage() {
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
