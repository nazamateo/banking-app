import React, { useState } from "react";
import "./Users.scss";
import {
  getBankAccounts,
  getBankAccountNumber,
} from "../../components/LocalStorage/LocalStorage";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

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

const RowsBalance = ({ searchParams }) => {
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

  const filterFromInput = filterUserInfo => {
    const input = searchParams.get("filter");

    return filterUserInfo.filter(info => {
      if (!input) return true;
      return info.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
    });
  };

  return (
    <Pagination
      data={filterFromInput(bankAccounts)}
      Component={TableRow}
      pageLimit={3}
      dataLimit={3}
      componentFunction={deactivateAccount}
    />
  );
};

function TableRow({ userInfo, deactivateAccount }) {
  return (
    <tr key={userInfo.accountNumber}>
      <td>
        <Link to={`${userInfo.accountNumber}`}>{userInfo.name}</Link>
      </td>
      <td>{userInfo.accountNumber}</td>
      <td>{userInfo.formattedbalance}</td>
      <td>
        <button
          type="button"
          className="adddeletebttn"
          onClick={e => deactivateAccount(e, userInfo.accountNumber)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

const TableBalance = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <input
        value={searchParams.get("filter") || ""}
        onChange={e => {
          let input = e.target.value;
          if (input) {
            setSearchParams({ filter: input });
          } else {
            setSearchParams({});
          }
        }}
        placeholder="Search by name"
      />
      <table className="balanceTable">
        <thead>
          <HeaderBalance />
        </thead>
        <RowsBalance searchParams={searchParams} />
      </table>
    </>
  );
};
export default TableBalance;
