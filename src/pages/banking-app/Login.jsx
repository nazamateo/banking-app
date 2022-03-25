import Login from "../../components/banking-app/Login";
import styles from "./MainPage/MainPage.module.scss";

function LoginPage({
  setIsAdminAuthenticated,
  isAdminAuthenticated,
  adminAccounts,
  setAdminAccounts,
}) {
  return (
    <div className={styles.logIn}>
      <Login
        setIsAdminAuthenticated={setIsAdminAuthenticated}
        isAdminAuthenticated={isAdminAuthenticated}
        adminAccounts={adminAccounts}
        setAdminAccounts={setAdminAccounts}
      />
    </div>
  );
}

export default LoginPage;
