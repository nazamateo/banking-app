import WithdrawFunc from "../../components/banking-app/Withdraw/index";
import styles from "./MainPage/MainPage.module.scss";

function WithdrawPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>WITHDRAW FORM</h1>
      <div className={styles.pageMainContent}>
        <WithdrawFunc
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default WithdrawPage;
