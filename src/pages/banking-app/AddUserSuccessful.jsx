import AddUserSuccess from "../../components/banking-app/AddUserSuccess/index";
import styles from "./MainPage/MainPage.module.scss";

function SuccessAddUserPage({ bankAccounts }) {
  return (
    <div className={styles.page}>
      <div className={styles.pageMainContent}>
        <AddUserSuccess bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default SuccessAddUserPage;
