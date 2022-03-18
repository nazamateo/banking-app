import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getBankAccountNumber,
  getBankAccounts,
  getAdminAccounts,
} from "../../components/LocalStorage/LocalStorage";
import capitalizeFirstLetter from "../../components/General/Helpers/CapitalizeFirstLetter";
import "./individual-user.scss";
import Popup from "../../components/General/Helpers/ConfirmDelete";

function IndividualUser() {
  const bankAccount = getBankAccountNumber(Number(useParams().accountNumber));

  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());

  const [isOpen, setIsOpen] = useState(false);
  const [inputAdminPassword, setInputAdminPassword] = useState("");
  const [displayError, setDisplayError] = useState(
    "Please confirm delete account request"
  );
  let [num, setNum] = useState(3);
  const navigate = useNavigate();

  const deactivateAccount = (accountNumber) => {
    const newAccountList = bankAccounts.filter(
      (account) => account.accountNumber !== accountNumber
    );

    localStorage.setItem("bankAccounts", JSON.stringify(newAccountList));
    window.location.pathname = "/users";
  };

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  const confirmDelete = (e) => {
    e.preventDefault();
    const adminAccounts = getAdminAccounts().find(
      (adminAccount) =>
        adminAccount.isLoggedIn === true &&
        adminAccount.password === inputAdminPassword
    );

    if (!adminAccounts) {
      if (Number(num) > 0) {
        setNum(Number(num) - 1);
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
                onChange={(e) => setInputAdminPassword(e.target.value)}
                value={inputAdminPassword}
              />
              <button className="buttonu" onClick={confirmDelete}>
                Confirm Delete
              </button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
      <h1>STATEMENT OF ACCOUNT</h1>

      <p>Name: {bankAccount.name}</p>
      <p>E-mail: {bankAccount.email}</p>
      <p>Birthday: {bankAccount.bday}</p>
      <p>Address: {bankAccount.address}</p>
      <p>Creation Date: {bankAccount.creationDate}</p>
      <p>Account Number: {bankAccount.accountNumber}</p>
      <p>Balance: {bankAccount.balance}</p>

      <table className="statement">
        <thead>
          <tr>
            <td>Account Number</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Type</td>
            <td>Transaction ID</td>
          </tr>
        </thead>

        {bankAccount.transactionHistory.map((transaction, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{transaction.accountNumber}</td>
                <td>
                  {`₱${Math.abs(
                    transaction.newBalance - transaction.oldBalance
                  )}`}
                </td>
                <td>{transaction.transactionDate}</td>
                <td>{capitalizeFirstLetter(transaction.action)}</td>
                <td>{transaction.transactionId}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button className="buttonu" onClick={() => togglePopup()}>
        Delete
      </button>
    </>
  );
}

export default IndividualUser;
