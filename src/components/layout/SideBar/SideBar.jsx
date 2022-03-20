import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
import Logo from "../../General/Logo/Logo";
import logo from "../../../assets/images/placeholder.jpg";

function SideBar({ getWidth }) {
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
            to="dashboard"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <i className="las la-users" />
          <NavLink
            to="users"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Accounts
          </NavLink>
        </li>
        <li>
          <i className="las la-share"></i>
          <NavLink
            to="deposit"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Deposit
          </NavLink>
        </li>
        <li>
          <i className="las la-receipt" />
          <NavLink
            to="withdraw"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Withdraw
          </NavLink>
        </li>
        <li>
          <i className="las la-exchange-alt" />
          <NavLink
            to="transfer"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Transfer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
