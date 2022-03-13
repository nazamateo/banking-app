import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
import Logo from "../General/Logo/Logo";
import "../../assets/images/placeholder.jpg";

// to be removed, this must be in login page, for testing purposes only.
import { LoadDataButton } from "../LocalStorage/LocalStorage";

function SideBar({ getWidth }) {
  const widthRef = useRef();

  const getWidthSize = (e = "") => {
    e.preventDefault();
    getWidth(widthRef.current.offsetWidth);
  };

  useEffect(() => {
    window.addEventListener("load", getWidthSize);
    window.addEventListener("resize", getWidthSize);

    return () => {
      window.removeEventListener("load", getWidthSize);
      window.removeEventListener("resize", getWidthSize);
    };
  }, []);

  return (
    <nav className="nav-sidebar" ref={widthRef}>
      <Logo link="https://via.placeholder.com/48" name="Digibank" />
      <ul className="nav-links-sidebar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="users"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Users
        </NavLink>
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
      <LoadDataButton />
    </nav>
  );
}

export default SideBar;
