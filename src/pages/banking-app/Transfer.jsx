import TransferFunc from "../../components/banking-app/Transfer/index";
import styles from "./MainPage/MainPage.module.scss";

function TransferPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>TRANSFER FORM</h1>
      <div className={styles.pageMainContent}>
        <TransferFunc
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default TransferPage;
