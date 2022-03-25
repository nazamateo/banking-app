import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
<<<<<<<< HEAD:src/components/SideBar/TopBarBudget.jsx
import styles from "../SideBar/TopBarBudget.module.scss";
import Logo from "../../General/Logo/Logo";
import logo from "../../../assets/images/bank-logo.png";

function TopBarBudget({ getLink }) {
  const getLinkSelected = (e) => {
========
import styles from "./SideBar.module.scss";
import Logo from "../Logo";
import logo from "../../assets/images/bank-logo.png";

function SideBarBudget({ getWidth, getLink }) {
  const widthRef = useRef();

  const getWidthSize = (e = "") => {
    e.preventDefault();
    getWidth(widthRef.current.offsetWidth);
  };

  const getLinkSelected = e => {
>>>>>>>> 500f712c7814f3753b27f6047cf1ba12ec55e71f:src/components/SideBar/SideBarBudget.jsx
    getLink(e.target.textContent);
    localStorage.setItem("selectedLink", e.target.textContent);
  };

  return (
    <nav className={styles.navtop}>
      <ul className={styles.topbarlinks}>
        <li>
          <i className="las la-university" />
          <NavLink
            to="/budget/dashboard"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <i className="las la-users" />
          <NavLink
            to="/budget/deposit"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Income
          </NavLink>
        </li>
        <li>
          <i className="las la-share"></i>
          <NavLink
            to="/budget/transfer"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Expense
          </NavLink>
        </li>
        <li>
          <i className="las la-receipt" />
          <NavLink
            to="/budget/addbillers"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            AddBillers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopBarBudget;
