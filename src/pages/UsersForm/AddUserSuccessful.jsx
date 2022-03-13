import React from "react";
import { addThis } from "./UsersForm";

//userinfo=addThis
function SuccessAddUser({ userInfo }) {
  return (
    <div>
      <caption>Account Successfully Added!</caption>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Address</th>
        <th>Creation Date</th>
        <th>Account Number</th>
        <th>Initial Balance</th>
      </tr>
      <td>{userInfo.name}</td>
      <td>{userInfo.email}</td>
      <td>{userInfo.age}</td>
      <td>{userInfo.address}</td>
      <td>{userInfo.creationDate}</td>
      <td>{userInfo.accountNumber}</td>
      <td>{userInfo.formattedbalance}</td>
    </div>
  );
}

export default SuccessAddUser;
