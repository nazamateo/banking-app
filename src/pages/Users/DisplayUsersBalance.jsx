import React, { useEffect, useState } from "react";
import "./Users.scss";
import { getBankAccounts } from "../../components/LocalStorage/LocalStorage";
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

const RowsBalance = ({ searchParams, inputValue }) => {
  const [bankAccounts] = useState(getBankAccounts());
  const [filteredBankAccounts, setFilterBankAccounts] = useState(bankAccounts);

  const filterFromInput = filterUserInfo => {
    const input = searchParams.get("filter");

    const filteredAccounts = filterUserInfo.filter(info => {
      if (!input) return true;
      return info.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
    });
    return filteredAccounts;
  };

  const handleEdit = accountNumber => {
    //when edit is clicked, get the details and pass it as props in edit page.
    // sa loob ng page na yun, kapag nagclick ka ng submit, dapat maistore na yung data sa localStorage.
  };

  useEffect(() => {
    setFilterBankAccounts(filterFromInput(bankAccounts));
  }, [inputValue]);

  return (
    <Pagination
      data={filteredBankAccounts}
      Component={TableRow}
      pageLimit={3}
      dataLimit={3}
    />
  );
};

function TableRow({ userInfo }) {
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
          //onClick={e => deactivateAccount(e, userInfo.accountNumber)}
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
    searchParams.get("filter")
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
        onChange={e => handleChange(e)}
        placeholder="Search by name"
      />
      <table className="balanceTable">
        <thead>
          <HeaderBalance />
        </thead>
        <RowsBalance searchParams={searchParams} inputValue={inputNameValue} />
      </table>
    </>
  );
};
export default TableBalance;
