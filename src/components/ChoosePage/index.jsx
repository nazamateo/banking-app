import { LoadDataButton } from "../../services/LocalStorage";
import { Link } from "react-router-dom";
import styles from "./ChoosePage.module.scss";
import Logo from "../Logo";
import logo from "../../assets/images/bank-logo-white.png";

function ChooseLogin() {
  return (
    <>
      <Logo name="DigiBank" className={styles.logoContainer} link={logo} />
      <nav className={styles.navLink}>
        <Link to="/banking/login">
          <i className="las la-user-cog" />
          Admin Login
        </Link>
        <Link to="/budget/login">
          <i className="las la-user" />
          User Login
        </Link>
      </nav>

      <LoadDataButton className={styles.loadBtn} />
    </>
  );
}

export default ChooseLogin;
