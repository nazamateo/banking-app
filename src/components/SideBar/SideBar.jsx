import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
import Logo from "../General/Logo/Logo";
import "../../assets/images/placeholder.jpg";

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
      <Logo link="https://via.placeholder.com/48" name="Digibank" />
      <ul className="nav-links-sidebar">
        <li>
          <i className="las la-university"> </i>
          <NavLink
            to="dashboard"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <i className="las la-users"></i>
          <NavLink
            to="users"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Accounts
          </NavLink>
        </li>
        <NavLink
          to="deposit"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Deposit
        </NavLink>
        <NavLink
          to="withdraw"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Withdraw
        </NavLink>
        <NavLink
          to="transfer"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Transfer
        </NavLink>
      </ul>
    </nav>
  );
}

export default SideBar;
