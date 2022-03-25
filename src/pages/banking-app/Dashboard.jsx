import Dashboard from "../../components/banking-app/Dashboard/index";
import styles from "./MainPage/MainPage.module.scss";

function DashboardPage() {
  return (
    <div className={styles.page}>
      <Dashboard />
    </div>
  );
}

export default DashboardPage;
