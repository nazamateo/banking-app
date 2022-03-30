import IndividualUser from "../../components/banking-app/IndividualUser/index";
import styles from "./MainPage/MainPage.module.scss";
function IndividualUserPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>STATEMENT OF ACCOUNT</h1>

      <IndividualUser
        bankAccounts={bankAccounts}
        setBankAccounts={setBankAccounts}
      />
    </div>
  );
}

export default IndividualUserPage;
