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
      dataLimit={5}
    />
  );
};

function TableRow({ userInfo }) {
  const navigate = useNavigate();

  const handleEdit = accountNumber => {
    //when edit is clicked, get the details and pass it as props in edit page.
    // sa loob ng page na yun, kapag nagclick ka ng submit, dapat maistore na yung data sa localStorage.
    //redirect to a website tapos edit/${accountNumber} then ayun kunin lang ulit lahat ng details
    console.log(accountNumber);
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
        onChange={e => handleChange(e)}
        placeholder="Search by name"
      />

      <RowsBalance searchParams={searchParams} inputValue={inputNameValue} />
    </>
  );
};
export default TableBalance;
