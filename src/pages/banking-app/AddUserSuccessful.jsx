import AddUserSuccess from "../../components/banking-app/AddUserSuccess/index";

function SuccessAddUserPage({ bankAccounts }) {
  return (
    <div className="page">
      <div className="page-main-content">
        <AddUserSuccess bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default SuccessAddUserPage;
