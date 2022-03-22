import React, { useEffect, useState } from "react";
import InputFields from "./FormDiv";
import styles from "../Form/Form.module.scss";

const BudgetForm = () => {
  function stateResetter() {}

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="button" className={styles.add}>
          Add
        </button>
        <br></br>
        <br></br>
        <br></br>
        <InputFields />
        <InputFields />

        <h1 className={styles.total}>TOTAL</h1>
        <h1 className={styles.amountsum}>SUM</h1>
        <br></br>
        <br></br>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default BudgetForm;
