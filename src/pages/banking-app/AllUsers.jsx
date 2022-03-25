import TableBalance from "../../components/banking-app/AllUsers/DisplayUsersBalance";
import BalanceTableHeader from "../../components/banking-app/AllUsers/BalanceTableHeader";
import styles from "./MainPage/MainPage.module.scss";

function AllUsersPage({ bankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>ACCOUNT LIST</h1>
      <div className={styles.pageMainContent}>
        <BalanceTableHeader />
        <TableBalance bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default AllUsersPage;
