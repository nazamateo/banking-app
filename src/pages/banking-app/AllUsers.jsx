import TableBalance from "../../components/banking-app/AllUsers/DisplayUsersBalance";
import BalanceTableHeader from "../../components/banking-app/AllUsers/BalanceTableHeader";

function AllUsersPage() {
  return (
    <div className="page">
      <h1 className="title">ACCOUNT LIST</h1>
      <div className="page-main-content">
        <BalanceTableHeader />
        <TableBalance />
      </div>
    </div>
  );
}

export default AllUsersPage;
