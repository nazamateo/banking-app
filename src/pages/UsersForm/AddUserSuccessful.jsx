import React from "react";
import { useParams } from "react-router-dom";
import { getBankAccountNumber } from "../../components/LocalStorage/LocalStorage";

function SuccessAddUserPage() {
  const accountNumber = parseInt(useParams().accountNumber);
  const account = getBankAccountNumber(accountNumber);

  return (
    <div className="page">
      <h1>Account Successfully Added!</h1>
      <div>
        <p>Name: {account.name} </p>
        <p>Email: {account.email}</p>
        <p>Age: {account.age}</p>
        <p>Address: {account.address}</p>
        <p>Creation Date: {account.creationDate}</p>
        <p>Account Number: {account.accountNumber}</p>
        <p>Balance: {account.formattedbalance}</p>
      </div>
    </div>
  );
}

export default SuccessAddUserPage;
