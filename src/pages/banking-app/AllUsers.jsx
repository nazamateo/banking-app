import TableBalance from "../../components/banking-app/AllUsers/DisplayUsersBalance";
import BalanceTableHeader from "../../components/banking-app/AllUsers/BalanceTableHeader";

function AllUsersPage({ bankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">ACCOUNT LIST</h1>
      <div className="page-main-content">
        <BalanceTableHeader />
        <TableBalance bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default AllUsersPage;
