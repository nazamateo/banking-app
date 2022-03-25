import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";
import logo from "../../assets/images/placeholder.jpg";
import styles from "./NavBar.module.scss";

function NavBar({
  navBarWidth = 0,
  linkSelected,
  accounts,
  setAccounts,
  setAuthentication,
  isAuthenticated,
}) {
  const navigate = useNavigate();
  const [loggedInName, setLoggedInName] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const getLoggedInName = () => {
      const loggedInAccount = accounts.find(
        bankAccount => bankAccount.isLoggedIn === true
      );

      if (loggedInAccount.username) {
        setLoggedInName(loggedInAccount.username);
        return;
      }
      setLoggedInName(loggedInAccount.email);
    };

    getLoggedInName();
  }, []);

  const [isShown, setIsShown] = useState(false);

  const signOut = e => {
    e.preventDefault();
    const loggedInAccount = accounts.find(
      account => account.isLoggedIn === true
    );

    loggedInAccount.isLoggedIn = false;

    let updatedAccounts;

    if (loggedInAccount.username) {
      updatedAccounts = accounts.map(account =>
        account.username === loggedInAccount.username
          ? { ...loggedInAccount }
          : account
      );
    } else {
      updatedAccounts = accounts.map(account =>
        account.email === loggedInAccount.email
          ? { ...loggedInAccount }
          : account
      );
    }

    setAccounts(updatedAccounts);
    setAuthentication(false);
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
            name={loggedInName}
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
