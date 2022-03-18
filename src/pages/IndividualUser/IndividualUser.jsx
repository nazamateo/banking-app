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

function IndividualUserPage() {
  const bankAccount = getBankAccountNumber(parseInt(useParams().accountNumber));
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());
  const [isOpen, setIsOpen] = useState(false);
  const [inputAdminPassword, setInputAdminPassword] = useState("");
  const navigate = useNavigate();

  const deactivateAccount = (accountNumber) => {
    const newAccountList = bankAccounts.filter(
      (account) => account.accountNumber !== accountNumber
    );

    localStorage.setItem("bankAccounts", JSON.stringify(newAccountList));
    setBankAccounts(newAccountList);
    navigate("/users");
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

    if (!adminAccounts.length) {
      //lagay mo na dito yung error
      return;
    }

    deactivateAccount(bankAccount.accountNumber);
  };

  return (
    <div className="page">
      {isOpen && (
        <Popup
          content={
            <>
              <p>Please confirm delete account request</p>
              <input
                type="password"
                placeholder="Enter admin password"
                onChange={(e) => setInputAdminPassword(e.target.value)}
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

        {bankAccount.transactionHistory.map((transaction) => {
          return (
            <tbody>
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
      <button className="buttonu" onClick={togglePopup}>
        Delete
      </button>
    </div>
  );
}

export default IndividualUserPage;
