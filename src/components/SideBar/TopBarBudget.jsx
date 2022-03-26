import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import styles from "../SideBar/TopBarBudget.module.scss";
import logo from "../../assets/images/bank-logo.png";

function TopBarBudget({ getLink }) {
  const getLinkSelected = e => {
    getLink(e.target.textContent);
    localStorage.setItem("selectedLink", e.target.textContent);
  };

  return (
    <nav className={styles.navtop}>
      <Logo link={logo} className={styles.logoContainer} />
      <h3>Digibank</h3>
      <ul className={styles.topbarlinks}>
        <li>
          <i class="las la-wallet" />
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

          <i class="las la-piggy-bank" />
          <NavLink
            to="/budget/deposit"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Deposit
          </NavLink>
        </li>
        <li>

          <i class="las la-file-invoice-dollar" />

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
            Add Billers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TopBarBudget;
