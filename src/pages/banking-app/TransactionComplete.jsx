import SuccessTransaction from "../../components/banking-app/TransactionComplete/index";
import styles from "./MainPage/MainPage.module.scss";

function SuccessTransactionPage({ bankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>TRANSACTION COMPLETE</h1>
      <div className={`${styles.pageMainContent} ${styles.alignCenter}`}>
        <SuccessTransaction bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default SuccessTransactionPage;
