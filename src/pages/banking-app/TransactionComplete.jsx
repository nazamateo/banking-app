import SuccessTransaction from "../../components/banking-app/TransactionComplete/index";

function SuccessTransactionPage() {
  return (
    <div className="page">
      <h1 className="title">TRANSACTION COMPLETE</h1>
      <div className="page-main-content">
        <SuccessTransaction />
      </div>
    </div>
  );
}

export default SuccessTransactionPage;
