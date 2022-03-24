import SuccessTransaction from "../../components/banking-app/TransactionComplete/index";

function SuccessTransactionPage({ bankAccounts }) {
  return (
    <div className="page">
      <h1 className="title">TRANSACTION COMPLETE</h1>
      <div className="page-main-content align-center ">
        <SuccessTransaction bankAccounts={bankAccounts} />
      </div>
    </div>
  );
}

export default SuccessTransactionPage;
