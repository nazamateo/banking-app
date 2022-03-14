import React, { useState } from "react";
import "./Users.scss";
import {
  getBankAccounts,
  getBankAccountNumber,
} from "../../components/LocalStorage/LocalStorage";
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

const RowsBalance = ({ userInfo, deactivateAccount }) => {
  return userInfo.map(userInfo => (
    <tr key={userInfo.accountNumber}>
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

const TableBalance = () => {
  const [bankAccounts, setBankAccounts] = useState(getBankAccounts());

  const deactivateAccount = (e, accountNumber) => {
    e.preventDefault();
    const accountToDeactivate =
      getBankAccountNumber(accountNumber).accountNumber;
    const newAccountList = getBankAccounts().filter(
      account => account.accountNumber !== accountToDeactivate
    );

    localStorage.setItem("bankAccounts", JSON.stringify(newAccountList));
    setBankAccounts(getBankAccounts());
  };

  return (
    <table className="balanceTable">
      <tbody>
        <HeaderBalance />
        <RowsBalance
          userInfo={bankAccounts}
          deactivateAccount={deactivateAccount}
        />
      </tbody>
    </table>
  );
};
export default TableBalance;
