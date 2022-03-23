import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";
import Logo from "../../General/Logo/Logo";
import logo from "../../../assets/images/bank-logo.png";

function SideBarBudget({ getWidth, getLink }) {
  const widthRef = useRef();

  const getWidthSize = (e = "") => {
    e.preventDefault();
    getWidth(widthRef.current.offsetWidth);
  };

  const getLinkSelected = (e) => {
    getLink(e.target.textContent);
    localStorage.setItem("selectedLink", e.target.textContent);
  };

  useEffect(() => {
    getWidth(widthRef.current.offsetWidth);
    window.addEventListener("resize", getWidthSize);

    return () => {
      window.removeEventListener("resize", getWidthSize);
    };
  }, []);

  return (
    <nav className={styles.navSidebar} ref={widthRef}>
      <Logo link={logo} name="DigiBank" className={styles.logoContainer} />
      <ul className={styles.sideBarLinks}>
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

export default SideBarBudget;
