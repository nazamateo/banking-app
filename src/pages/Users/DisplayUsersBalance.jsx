import React from "react";
import {getFromLocalStorage} from "./BankDetails";

const HeaderBalance = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Account Number</th>
      <th>Account Balance</th>
      <th>Add/Delete</th>
    </tr>
  );
};

const RowsBalance = ({ userInfo }) => {
  return userInfo.map((userInfo) => (
    <tr>
      <td>{userInfo.name}</td>
      <td>{userInfo.accountNumber}</td>
      <td>{userInfo.formattedbalance}</td>
      <td>svg/svg</td>
    </tr>
  ));
};

const TableBalance = () => {
  return (
    <table>
      <HeaderBalance />
      <RowsBalance userInfo={getFromLocalStorage} />
    </table>
  );
};
export default TableBalance;
