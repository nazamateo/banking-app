import React from "react";
import AddBiller from "../../../components/budget-app/AddBillers/index";
import styles from "../MainPage/MainPage.module.scss";

function AddBillers() {
  return (
    <div className={styles.page}>
      <AddBiller />
    </div>
  );
}

export default AddBillers;
