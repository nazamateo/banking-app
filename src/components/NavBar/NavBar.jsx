import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import logo from "../../assets/images/placeholder.jpg";
import styles from "./NavBar.module.scss";

function NavBar({ navBarWidth, linkSelected, adminUsername }) {
  const navigate = useNavigate();

  const [isShown, setIsShown] = useState(false);

  const signOut = e => {
    e.preventDefault();
    localStorage.setItem("isAuthenticatedBank", false);
    navigate("/");
  };

  return (
    <nav
      className={styles.topNav}
      style={{ width: `calc(100% - ${navBarWidth}px)` }}
    >
      <p className={styles.title}>{linkSelected}</p>

      <ul className={styles.navElementsContainer}>
        <li>
          <i className="las la-bell" />
        </li>
        <li>
          <i className="las la-envelope" />
        </li>
        <li
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={`${styles.navElements} ${
            isShown ? styles.active : styles.inactive
          }`}
        >
          <Logo
            link={logo}
            name={adminUsername}
            className={styles.logoContainer}
          />
          {isShown && (
            <div className={styles.showMenu}>
              <p onClick={signOut}>
                <i className="las la-power-off"></i>Sign Out
              </p>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
