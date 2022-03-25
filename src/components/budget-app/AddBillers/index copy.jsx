import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../forms/FormInput";
import styles from "../../banking-app/AddUserForm/UsersForm.module.scss";
import { getBudgetAppUSer } from "../../../services/BudgetAppFunctions";
import { getBankAccounts } from "../../../services/LocalStorage";

const BillersForm = () => {
  const [bankname, setBankName] = useState("");
  const [billerAccountName, setBillerAccountName] = useState("");
  const [billerAccountNum, setBillerAccountNum] = useState("");

  function stateResetter() {
    setBankName("");
    setBillerAccountName("");
    setBillerAccountNum("");
  }

  const AddBiller = (e) => {
    e.preventDefault();
    let bankAccounts = getBankAccounts();
    let currentAppUser = getBudgetAppUSer();
    const index = currentAppUser.accountNumber;

    const billerObject = {
      bankname: bankname,
      billeraccountname: billerAccountName,
      billeraccountnum: billerAccountNum,
    };
    currentAppUser.billersArray.push(billerObject);
    bankAccounts[index] = currentAppUser;
    localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    stateResetter();
  };

  return (
    <>
      <form className={styles.form} onSubmit={AddBiller}>
        <div className={styles.divname}>
          <FormInput
            name="name"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Bank Name"
            value={bankname}
            onChange={(e) => setBankName(e.target.value)}
            autoComplete="off"
            pattern="[a-zA-Z\s]+"
            required={true}
          />
        </div>

        <div className={styles.divemail}>
          <FormInput
            name="name"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Biller Account Name"
            value={billerAccountName}
            onChange={(e) => setBillerAccountName(e.target.value)}
            autoComplete="off"
            pattern="[a-zA-Z\s]+"
            required={true}
          />
        </div>

        <div className={styles.divage}>
          <FormInput
            name="name"
            type="text"
            classNames={{
              label: styles.label,
              input: styles.field,
            }}
            label="Biller Account Number"
            value={billerAccountNum}
            onChange={(e) => setBillerAccountNum(e.target.value)}
            autoComplete="off"
            required={true}
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default BillersForm;
