import React, { useEffect, useState } from "react";
import "./Users.scss";
import { getBankAccounts } from "../../../services/LocalStorage";
import { Link, useNavigate } from "react-router-dom";
import TablePagination from "../../../components/Pagination/Pagination";

const RowsBalance = ({ inputNameValue, inputValue }) => {
  const [bankAccounts] = useState(getBankAccounts());
  const [filteredBankAccounts, setFilterBankAccounts] = useState(bankAccounts);

  const filterFromInput = filterUserInfo => {
    if (!inputNameValue) {
      return filterUserInfo;
    }

    const filteredAccounts = filterUserInfo.filter(info =>
      info.name.toLowerCase().includes(inputNameValue.toLowerCase())
    );

    return filteredAccounts;
  };

  useEffect(() => {
    setFilterBankAccounts(filterFromInput(bankAccounts));
  }, [inputNameValue]);

  return (
    <TablePagination
      classNames={{ table: "balance-table" }}
      headers={["Name", "Account Number", "Account Balance", "Action"]}
      data={filteredBankAccounts}
      Component={TableRow}
      pageLimit={5}
      dataLimit={10}
    />
  );
};

function TableRow({ userInfo }) {
  const navigate = useNavigate();

  const handleEdit = accountNumber => {
    navigate(`edit/${accountNumber}`);
  };

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
          className="action-button"
          onClick={() => handleEdit(userInfo.accountNumber)}
        >
          <i className="las la-edit" />
          Edit
        </button>
      </td>
    </tr>
  );
}

const TableBalance = () => {
  const [inputNameValue, setInputNameValue] = useState("");

  return (
    <>
      <div className="search-container">
        <label htmlFor="search-name">Search: &nbsp;</label>
        <input
          value={inputNameValue}
          onChange={e => setInputNameValue(e.target.value)}
          placeholder="Search by name"
          id="search-name"
        />
      </div>

      <RowsBalance inputNameValue={inputNameValue} />
    </>
  );
};

export default TableBalance;
