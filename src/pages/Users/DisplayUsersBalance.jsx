import React, { useEffect, useState } from "react";
import "./Users.scss";
import { getBankAccounts } from "../../components/LocalStorage/LocalStorage";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import TablePagination from "../../components/Pagination/Pagination";

const RowsBalance = ({ searchParams, inputValue }) => {
  const [bankAccounts] = useState(getBankAccounts());
  const [filteredBankAccounts, setFilterBankAccounts] = useState(bankAccounts);

  const filterFromInput = filterUserInfo => {
    const input = searchParams.get("filter");

    if (!input) {
      return filterUserInfo;
    }

    const filteredAccounts = filterUserInfo.filter(info =>
      info.name.toLowerCase().includes(input.toLowerCase())
    );

    return filteredAccounts;
  };

  useEffect(() => {
    setFilterBankAccounts(filterFromInput(bankAccounts));
  }, [inputValue]);

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
          Edit
        </button>
      </td>
    </tr>
  );
}

const TableBalance = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputNameValue, setInputNameValue] = useState(
    searchParams.get("filter") || ""
  );

  const handleChange = e => {
    let input = e.target.value;
    if (input) {
      setSearchParams({ filter: input });
    } else {
      setSearchParams({});
    }
    setInputNameValue(input);
  };

  return (
    <>
      <input
        value={inputNameValue}
        onChange={handleChange}
        placeholder="Search by name"
      />

      <RowsBalance searchParams={searchParams} inputValue={inputNameValue} />
    </>
  );
};
export default TableBalance;
