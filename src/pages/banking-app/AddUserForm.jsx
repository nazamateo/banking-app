import React from "react";
import UserForm from "../../components/banking-app/AddUserForm";
import styles from "./MainPage/MainPage.module.scss";

function FormPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>ADD BANK ACCOUNT FORM</h1>
      <div className={styles.pageMainContent}>
        <UserForm
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default FormPage;
