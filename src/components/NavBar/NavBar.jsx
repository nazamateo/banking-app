import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../General/Logo/Logo";
import logo from "../../assets/images/placeholder.jpg";
import "./NavBar.scss";

function NavBar({ navBarWidth }) {
  let navigate = useNavigate();

  const signOut = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "");
    navigate("/login");
  };

  return (
    <nav className="top-nav" style={{ width: `calc(100% - ${navBarWidth}px)` }}>
      <i className="las la-bars" />
      <button type="button" onClick={signOut}>
        Sign Out
      </button>
      <ul className="nav-elements">
        <li>
          <i className="las la-bell"></i>
        </li>
        <li>
          <i className="las la-envelope" />
        </li>
        <Logo link={logo} name="abc123" />
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
