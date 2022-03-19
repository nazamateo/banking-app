import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../General/Logo/Logo";
import logo from "../../assets/images/placeholder.jpg";
import "./NavBar.scss";

function NavBar({ navBarWidth }) {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  const showMenu = () => {};

  const signOut = e => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "");
    navigate("/login");
  };

  return (
    <nav className="top-nav" style={{ width: `calc(100% - ${navBarWidth}px)` }}>
      <i className="las la-bars" />

      <ul className="nav-elements">
        <li>
          <i className="las la-bell" />
        </li>
        <li>
          <i className="las la-envelope" />
        </li>
        <li onClick={showMenu}>
          <Logo link={logo} name="abc123" />
        </li>
        <li>
          <button type="button" onClick={signOut} id="sign-out-btn">
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

//NOTES

/* gagawa ng isang state na isClicked
 so sa kapag kinlick mo yung menu icon babaguhin mo yung state and then 
 sa className gawa ng ternary operator 
 
 className=`${isClicked ? 'active' : 'hide'}` 
 
 or parang ganito 

 className={({ isActive }) => (isActive ? "active" : "inactive")}
 */

//onMouseEnter, show the class, display:flex the signout link
//onMouseLeave, do not show the class, display:none?
