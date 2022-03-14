import React from "react";
import "./Users.scss";
import { getBankAccounts } from "../../components/LocalStorage/LocalStorage";
import { Link } from "react-router-dom";

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
  const deactivateAccount = (e, accountNumber) => {
    e.target.parentNode.parentNode.remove();
    e.preventDefault();
  };
  return userInfo.map(userInfo => (
    <tr>
      <td>
        <Link to={`${userInfo.accountNumber}`}>{userInfo.name}</Link>
      </td>
      <td>{userInfo.accountNumber}</td>
      <td>{userInfo.formattedbalance}</td>
      <td>
        <button
          type="submit"
          className="adddeletebttn"
          onClick={e => deactivateAccount(e, userInfo.accountNumber)}
        >
          Deactivate
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
        <RowsBalance userInfo={getBankAccounts()} />
      </tbody>
    </table>
  );
};
export default TableBalance;
