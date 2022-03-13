import React from "react";
import "./NavBar.scss";

function NavBar({ navBarWidth }) {
  return (
    <nav className="top-nav" style={{ width: `calc(100% - ${navBarWidth}px)` }}>
      <ul>Top Nav Bar</ul>
    </nav>
  );
}

export default NavBar;
