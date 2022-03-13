import React from "react";
import "./Users.scss";
import { getBankAccounts } from "../../components/LocalStorage/LocalStorage";

var getFromLocalStorage = getBankAccounts();
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
  return userInfo.map(userInfo => (
    <tr>
      <td>{userInfo.name}</td>
      <td>{userInfo.accountNumber}</td>
      <td>{userInfo.formattedbalance}</td>
      <td>
        <button type="submit" className="adddeletebttn">
          Add
        </button>
        <button type="submit" className="adddeletebttn">
          Delete
        </button>
      </td>
    </tr>
  ));
};

// dapat pag cinlick yung sa sidebar, don palang magloload tong table

const TableBalance = () => {
  return (
    <table className="balanceTable">
      <tbody>
        <HeaderBalance />
        <RowsBalance userInfo={getFromLocalStorage} />
      </tbody>
    </table>
  );
};
export default TableBalance;
