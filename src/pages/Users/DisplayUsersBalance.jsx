import React from "react";

var getFromLocalStorage = JSON.parse(localStorage.getItem("userdetails"));
const HeaderBalance = () => {
  return (
    <tr>
      <th>Name</th>
      <th>Account Number</th>
      <th>Account Balance</th>
      <th>Action</th>
    </tr>
  );
};

const RowsBalance = ({ userInfo }) => {
  return userInfo.map((userInfo) => (
    <tr>
      <td>{userInfo.name}</td>
      <td>{userInfo.accountNumber}</td>
      <td>{userInfo.formattedbalance}</td>
      <td><button type="submit" className="adddeletebttn">Add</button><button type="submit" className="adddeletebttn">Delete</button></td>
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
