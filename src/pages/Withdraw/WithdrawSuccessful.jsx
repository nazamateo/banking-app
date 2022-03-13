import React from "react";
import { transactionObject, nameChecker } from "./WithdrawFunction";

//userInfo=transactionObject
//username=nameChecker
function SuccessWithdrawPage({ userInfo, username }) {
  return (
    <div>
      <caption>Withdraw Transaction Successful!</caption>
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

export default SuccessWithdrawPage;
