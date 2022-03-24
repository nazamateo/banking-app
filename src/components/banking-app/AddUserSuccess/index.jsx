import { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./AddUserSuccess.module.scss";
import { BankAccountsContext } from "../../../context/BankAccountContext";

function AddUserSuccess() {
  const { getBankAccountNumber } = useContext(BankAccountsContext);
  const accountNumber = +useParams().accountNumber;
  const account = getBankAccountNumber(accountNumber);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <i className="las la-check-circle" />
        <h1>Account Successfully Added!</h1>
      </div>
      <div className={styles.detailsContainer}>
        <h1>Account Details</h1>
        <p>
          <span>Name: </span>
          <span>{account.name}</span>
        </p>
        <p>
          <span>Email: </span>
          <span>{account.email}</span>
        </p>
        <p>
          <span>Birthday: </span>
          <span>{account.bday}</span>
        </p>
        <p>
          <span>Address: </span>
          <span>{account.address}</span>
        </p>
        <p>
          <span>Creation Date: </span>
          <span>{account.creationDate}</span>
        </p>
        <p>
          <span>Account Number: </span>
          <span>{account.accountNumber}</span>
        </p>
        <p>
          <span>Balance: </span>
          <span>₱{account.balance}</span>
        </p>
      </div>
    </div>
  );
}

export default AddUserSuccess;
