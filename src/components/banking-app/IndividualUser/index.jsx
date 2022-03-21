import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getBankAccountNumber,
  getBankAccounts,
  getAdminAccounts,
} from "../../../services/LocalStorage";
import capitalizeFirstLetter from "../../General/Helpers/CapitalizeFirstLetter";
import styles from "./individual-user.module.scss";
import Popup from "../../General/Helpers/ConfirmDelete";

const BANK_ACCOUNTS = getBankAccounts();

function IndividualUser() {
  const bankAccount = getBankAccountNumber(+useParams().accountNumber);
  const [isOpen, setIsOpen] = useState(false);
  const [inputAdminPassword, setInputAdminPassword] = useState("");
  const [displayError, setDisplayError] = useState(
    "Please confirm delete account request"
  );
  let [num, setNum] = useState(3);
  const navigate = useNavigate();

  const deactivateAccount = accountNumber => {
    const newAccountList = BANK_ACCOUNTS.filter(
      account => account.accountNumber !== accountNumber
    );

    localStorage.setItem("bankAccounts", JSON.stringify(newAccountList));
    window.location.pathname = "/users";
  };

  function togglePopup(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  const confirmDelete = e => {
    e.preventDefault();
    const adminAccounts = getAdminAccounts().find(
      adminAccount =>
        adminAccount.isLoggedIn === true &&
        adminAccount.password === inputAdminPassword
    );

    if (!adminAccounts) {
      if (+num > 0) {
        setNum(+num - 1);
      } else {
        localStorage.setItem("isAuthenticated", "");
        navigate("/login");
      }
      setDisplayError(
        `Incorrect password. Please try again. Retries left:${num}`
      );
      return;
    }

    deactivateAccount(bankAccount.accountNumber);
  };

  return (
    <>
      {isOpen && (
        <Popup
          content={
            <>
              <p>{displayError}</p>
              <input
                type="password"
                placeholder="Enter admin password"
                onChange={e => setInputAdminPassword(e.target.value)}
                value={inputAdminPassword}
              />
              <button className={styles.buttonu} onClick={confirmDelete}>
                Confirm Delete
              </button>
            </>
          }
          handleClose={togglePopup}
        />
      )}

      <p>Name: {bankAccount.name}</p>
      <p>E-mail: {bankAccount.email}</p>
      <p>Birthday: {bankAccount.bday}</p>
      <p>Address: {bankAccount.address}</p>
      <p>Creation Date: {bankAccount.creationDate}</p>
      <p>Account Number: {bankAccount.accountNumber}</p>
      <p>Balance: {bankAccount.balance}</p>

      <table className={styles.statement}>
        <thead>
          <tr>
            <td>Amount</td>
            <td>Date</td>
            <td>Type</td>
            <td>Transaction ID</td>
            <td>Old Balance</td>
            <td>New Balance</td>
          </tr>
        </thead>

        {bankAccount.transactionHistory.map((transaction, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>
                  {`₱${Math.abs(
                    transaction.newBalance - transaction.oldBalance
                  )}`}
                </td>
                <td>{transaction.transactionDate}</td>
                <td>{capitalizeFirstLetter(transaction.action)}</td>
                <td>{transaction.transactionId}</td>
                <td>{`₱${transaction.oldBalance}`}</td>
                <td>{`₱${transaction.newBalance}`}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button className={styles.buttonu} onClick={togglePopup}>
        Delete
      </button>
    </>
  );
}

export default IndividualUser;
