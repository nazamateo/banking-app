import Logo from "../../General/Logo/Logo";
import logo from "../../../assets/images/bank-logo-white.png";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  return <Logo link={logo} name="DigiBank" className={styles.logoContainer} />;
}

export default Dashboard;
