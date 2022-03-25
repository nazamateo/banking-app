import DepositFunc from "../../components/banking-app/Deposit/index";

function DepositPage({ bankAccounts, setBankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">DEPOSIT FORM</h1>
      <div className="page-main-content">
        <DepositFunc
          bankAccounts={bankAccounts}
          setBankAccounts={setBankAccounts}
        />
      </div>
    </div>
  );
}

export default DepositPage;
