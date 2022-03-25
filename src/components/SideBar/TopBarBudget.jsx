import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import styles from "../SideBar/TopBarBudget.module.scss";

function TopBarBudget({ getLink }) {
  const getLinkSelected = e => {
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
          <i className="las la-share" />
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
          <i className="las la-file-invoice" />
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
