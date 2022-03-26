import DepositFunc from "../../components/banking-app/Deposit/index";
import styles from "./MainPage/MainPage.module.scss";
function DepositPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>DEPOSIT FORM</h1>
      <div className={styles.pageMainContent}>
        <DepositFunc
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default DepositPage;
