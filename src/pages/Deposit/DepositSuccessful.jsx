import React from "react";
import { transactionObject, nameChecker } from "./DepositFunctions";

//userInfo=transactionObject
//username=nameChecker
function SuccessDepositPage({ userInfo, username }) {
  return (
    <div>
      <caption>Deposit Transaction Successful!</caption>
      <tr>
        <th>Name</th>
        <th>Account Number</th>
        <th>Transaction Date</th>
        <th>Old Balance</th>
        <th>New Balance</th>
      </tr>
      <td>{username.name}</td>
      <td>{username.accountNumber}</td>
      <td>{userInfo.transactionDate}</td>
      <td>{userInfo.oldBalance}</td>
      <td>{userInfo.newBalance}</td>
    </div>
  );
}

export default SuccessDepositPage;
