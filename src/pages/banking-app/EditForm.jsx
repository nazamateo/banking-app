import EditForm from "../../components/banking-app/EditUser/index";
import styles from "./MainPage/MainPage.module.scss";
function EditFormPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>EDIT ACCOUNT DETAILS FORM</h1>
      <div className={styles.pageMainContent}>
        <EditForm
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default EditFormPage;
