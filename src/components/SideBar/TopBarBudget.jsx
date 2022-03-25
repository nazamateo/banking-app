import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import styles from "../SideBar/TopBarBudget.module.scss";

function TopBarBudget({ getLink }) {
  const getLinkSelected = (e) => {
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
