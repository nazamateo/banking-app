import React from "react";
import "./NavBar.scss";

function NavBar({ navBarWidth }) {
  const signOut = e => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "");
    window.location.pathname = "/login";
  };

  return (
    <nav className="top-nav" style={{ width: `calc(100% - ${navBarWidth}px)` }}>
      <ul>Top Nav Bar</ul>
      <button type="button" onClick={e => signOut(e)}>
        Sign Out
      </button>
    </nav>
  );
}

export default NavBar;
