import React from "react";
import "./SideBar.scss";
import Logo from "../General/Logo/Logo";
import "../../assets/images/placeholder.jpg";

// to be removed, this must be in login page, for testing purposes only.
import { LoadDataButton } from "../LocalStorage/LocalStorage";

function NavList({ list, href }) {
  return (
    <li>
      <a href={href}>{list}</a>
    </li>
  );
}

function SideBar() {
  return (
    <nav className="nav-sidebar">
      <Logo link="https://via.placeholder.com/48" name="Digibank" />
      <ul>
        <NavList list="Dashboard" href="#" />
        <NavList list="Users" href="#" />
        <NavList list="Deposit" href="#" />
        <NavList list="Withdraw" href="#" />
        <NavList list="Transfer" href="#" />
      </ul>
      <LoadDataButton />
    </nav>
  );
}

export default SideBar;
