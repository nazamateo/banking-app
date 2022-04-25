import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";
import Logo from "../Logo";
import logo from "../../assets/images/bank-logo.png";

function SideBar({ getWidth, getLink }) {
  const widthRef = useRef();

  const getWidthSize = (e = "") => {
    e.preventDefault();
    getWidth(widthRef.current.offsetWidth);
  };

  const getLinkSelected = e => {
    getLink(e.target.textContent);
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
            to="/banking/dashboard"
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
            to="/banking/users"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Accounts
          </NavLink>
        </li>
        <li>
          <i className="las la-share"></i>
          <NavLink
            to="/banking/deposit"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Deposit
          </NavLink>
        </li>
        <li>
          <i className="las la-receipt" />
          <NavLink
            to="/banking/withdraw"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Withdraw
          </NavLink>
        </li>
        <li>
          <i className="las la-exchange-alt" />
          <NavLink
            to="/banking/transfer"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            onClick={getLinkSelected}
          >
            Transfer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
