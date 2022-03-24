import { useEffect, useState, useContext } from "react";
import FormInput from "../../forms/FormInput";
import { Link, useNavigate } from "react-router-dom";
import TablePagination from "../../../components/Pagination";
import styles from "./DisplayUsersBalance.module.scss";
import { BankAccountsContext } from "../../../context/BankAccountContext";

const RowsBalance = ({ inputNameValue }) => {
  const { bankAccounts } = useContext(BankAccountsContext);
  const [filteredBankAccounts, setFilterBankAccounts] = useState(bankAccounts);

  useEffect(() => {
    const filterFromInput = filterUserInfo => {
      if (!inputNameValue) {
        return filterUserInfo;
      }

      const filteredAccounts = filterUserInfo.filter(info =>
        info.name.toLowerCase().includes(inputNameValue.toLowerCase())
      );

      return filteredAccounts;
    };
    setFilterBankAccounts(filterFromInput(bankAccounts));
  }, [inputNameValue]);

  return (
    <TablePagination
      classNames={{
        table: styles.balanceTable,
        pageNumbers: {
          container: styles.pageNumbers,
          activeElement: styles.active,
        },
      }}
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
      <td>₱{userInfo.balance}</td>
      <td>
        <button
          type="button"
          className={styles.actionButton}
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
      <div className={styles.searchContainer}>
        <FormInput
          name="search-name"
          label="Search: "
          classNames={{ label: styles.label, input: styles.input }}
          value={inputNameValue}
          onChange={e => setInputNameValue(e.target.value)}
          placeholder="Search by name"
        />
      </div>

      <RowsBalance inputNameValue={inputNameValue} />
    </>
  );
};

export default TableBalance;
