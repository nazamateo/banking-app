import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
import Logo from "../Logo/Logo";
import logo from "../../../assets/images/placeholder.jpg";

function SideBarBudget({ getWidth }) {
  const widthRef = useRef();

  const getWidthSize = (e = "") => {
    e.preventDefault();
    getWidth(widthRef.current.offsetWidth);
  };

  useEffect(() => {
    getWidth(widthRef.current.offsetWidth);
    window.addEventListener("resize", getWidthSize);

    return () => {
      window.removeEventListener("resize", getWidthSize);
    };
  }, []);

  return (
    <nav className="nav-sidebar" ref={widthRef}>
      <Logo link={logo} name="Digibank" />
      <ul className="nav-links-sidebar">
        <li>
          <i className="las la-university" />
          <NavLink
            to="/dashboardbudget"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            DashboardBudget
          </NavLink>
        </li>
        <li>
          <i className="las la-exchange-alt" />
          <NavLink
            to="/income:/category"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            IncomeForm
          </NavLink>
        </li>

        <li>
          <i className="las la-exchange-alt" />
          <NavLink
            to="/expense:/category"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            ExpenseForm
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBarBudget;
